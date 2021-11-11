import "./AddOne.css"

function AddOns() {

    return (
        <div>
            
            <h3 style={{marginLeft:"50px"}}>Add-Ons</h3>
            <div className="outer_div">
                <div style={{display:"flex",marginTop:"15px"}}>
                <span><img style={{width:"24px"}} src="https://imgak.mmtcdn.com/flights/assets/media/mobile/common/2X/covidInsurance.png" alt="" /></span>
                <span style={{ fontSize: "20px",marginLeft:"20px"}}><b>Rs 2 lacs Covid Insurance</b></span>
                <span><img style={{ width:"30px",marginLeft:"440px"}} src="https://imgak.mmtcdn.com/flights/assets/media/mobile/common/2X/adityaBirlaIcon.png" alt="" /></span>
                </div>
                <div className="inner_shadow_box" style={{display:"flex" }}>
                    <div style={{ width: "560px" }}>Strengthen your safety with COVID insurance of Rs.2,00,000 for hospitalization (new strain covered). Validity 16 days from trip date. TnC Apply <span style={{color:"#1f77f7",cursor:"pointer"}}>View all benefits</span></div>
                    <span className="rs99"> <b>₹ 99</b> </span>
                    <div id = "hover_div">+ ADD</div>
                </div>
            </div>
        </div>
    )
}

export { AddOns };