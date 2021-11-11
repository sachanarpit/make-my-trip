function BookingDetails() {
    return (
        <div>
            
            <h3 style={{marginLeft:"50px"}}>Booking details will be sent to</h3>
            <div className="outer_div">
                
                    <p style={{marginLeft:"25px"}}> Your ticket and flights information will be sent here.</p>
                    <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div>
                            <div>Country code</div>
                            <select style={{padding:"8px", width:"220px",marginTop:"8px"}} name="Wheelchair">
                                <option value="India">India(91)</option>
                                <option value="Afghanistan">Afghanistan(93)</option>
                            </select>
                        </div>
                        <div>
                            <div>Mobile No</div>
                            <input className="" style={{}} type="number" placeholder="Mobile No" />
                        </div>
                        <div>
                            <div>Email</div>
                            <input style={{padding:"7px",width:"220px",marginTop:"8px"}} type="number" placeholder="Email" />
                        </div>
                        </div>
                    </div>
            
            </div>
    )
}

export { BookingDetails };