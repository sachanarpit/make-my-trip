const express = require("express");
require("dotenv").config();


const crypto = require('crypto');
const cookieParser = require("cookie-parser");

const { parse } = require("path");

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const smsKey = process.env.SMS_SECRET_KEY;
const client = require('twilio')(accountSid,authToken);
const jwt = require("jsonwebtoken");


const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
const cors = require('cors');

let refreshTokens = [];

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'http://localhost:3000',credentials:true}))

/******************* Send OTP ****/

app.post('/sendOTP',(req,res)=>{
    const phone = req.body.phone;
    const otp = Math.floor(100000+ Math.random()*900000);
    const ttl = 2*60*1000;
    const expires = Date.now() +ttl;
    const data = `${phone}.${otp}.${expires}`
    const hash = crypto.createHmac('sha256',smsKey).update(data).digest("hex");
    const fullhash = `${hash}.${expires}`;

    // client.messages.create({
    //     body:`Your One Time Login Password for CFM is ${otp}`,
    //     from:+18048893104,
    //     to:phone
    // }).then((messages)=>console.log(messages)).catch((err)=>console.error(err))

     res.status(200).send({phone,hash:fullhash,otp})
})

/************************* Verify router ******************/

app.post("/verifyOTP", (req,res)=>{
    const phone = req.body.phone;
    const hash  = req.body.hash;
    const otp = req.body.otp;

    let [hashValue,expires] = hash.split(".");

    let now  = Date.now()
    if(now>parseInt(expires)){
        return res.status(504).send({msg:"Timeout please try again!"})
    } 

    const data = `${phone}.${otp}.${expires}`;
    const newCalculatedHash = crypto.createHmac('sha256',smsKey).update(data).digest('hex')
    
    if(newCalculatedHash === hashValue){
        //return res.status(202).send({msg:"user confirmed"})
        
        const acccessToken = jwt.sign({data:phone},JWT_AUTH_TOKEN,{expiresIn: '30s'});
        const refreshToken = jwt.sign({data:phone},JWT_REFRESH_TOKEN,{expiresIn: '1y'});
        refreshTokens.push(refreshToken);

        res.status(202).
        cookie('accessToken',acccessToken,{
            expires:new Date(new Date().getTime()+ 30*1000),
            sameSite:'strict',
            httpOnly:true
        })
        .cookie('refreshToken',refreshToken,{
            expires:new Date(new Date().getTime()+ 31557600000),
            sameSite:'strict',
            httpOnly:true
        })
        .cookie('authSession',true,{
            expires:new Date(new Date().getTime()+ 30*1000),
            sameSite: 'strict'
        })
        .cookie('refreshTokenID',true,{
            expires:new Date(new Date().getTime()+ 3557600000),
            sameSite: 'strict'
        })
        .send({msg:`Device Verified`})

    }else{
        return res.status(400).send({verification:false,msg:"Incorrect OTP"})
    }
})

/************************ Authenticate User ****************/

async function authenticateUser(req,res,next){
    const accessToken = req.cookies.accessToken;

    jwt.verify(accessToken,JWT_AUTH_TOKEN,async(err,phone)=>{
        if(phone){
            req.phone = phone;
            next();

        }else if(err.message === 'TokenExpiredError'){
            return res.status(403).send({success:false,msg:`Access Token Expired`})
        }else{
            console.error(err)
            res.status(403).send({err,msg:"User Not Authenticated"})
        }
    })
}
/********************* Refresh  ****************/

app.post("/refresh",(req,res)=>{
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken) return res.status(403).send({msg:"Refresh Token not found, Please login again"});

    if(!refreshTokens.includes(refreshToken)) return res.status(403).send({msg:"Refresh Token blocked, login again"})

    jwt.verify(refreshToken,JWT_REFRESH_TOKEN,(err,phone)=>{
        if(!err){
            const acccessToken = jwt.sign({data:phone},JWT_AUTH_TOKEN,{expiresIn: '30s'});

            res.status(200).
            cookie('accessToken',acccessToken,{
                expires:new Date(new Date().getTime()+ 30*1000),
                sameSite:'strict',
                httpOnly:true
            })
            .cookie('authSession',true,{
                expires:new Date(new Date().getTime()+ 30*1000),
                sameSite:'strict',

            }).send({previousSessionExpiry:true, success:true})
        }else{
            return res.status(403).send({success:false, msg:"Invalid refresh token"})
        }
    })
    
})
/*************************** logout  ****************/
app.get("/logout", (req,res)=>{
    res.clearCookie('refreshToken')
    .clearCookie('.accessToken')
    .clearCookie('authSession')
    .clearCookie('refreshTokenID')
    .send('user Logged Out')
})

module.exports = app;