
function Acknowledgement() {
    return (
        <div>
            
            <h3 style={{marginLeft:"50px"}}>Acknowledgement</h3>
            <div className ="outer_div" style={{ }}>
                <div style={{ marginLeft: "10px" }}>By clicking on the Continue button below to proceed with the booking, I confirm that I have read and I accept the <span style={{ color: "#1f77f7", cursor: "pointer" }}>Fare Rules</span>, the <span style={{ color: "#1f77f7", cursor: "pointer" }}>Privacy Policy</span>, the <span style={{ color: "#1f77f7", cursor: "pointer" }}>User Agreement</span> and <span style={{ color: "#1f77f7", cursor: "pointer" }}>Terms of Service</span> of MakeMyTrip</div>
                <button className = "continue_btn">CONTINUE</button>
            </div>
        </div>
    )
}

export { Acknowledgement };