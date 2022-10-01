import React, { useState } from "react";


const FormMobileOtp = () => {
    const [display, setDisplay] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setDisplay(!display)
      }
    return(
        <div className="offer-form">
            <form onSubmit={handleSubmit}>
               
            <label>
            Name:
            <input type="text" name="name" required  />
            </label>
            <label>
            Email:
            <input type="text" name="email"  required />
            </label>
            <input type="submit" value="Submit" />
        </form>
        {display && <h3>otp from</h3>}

        </div>

        
    )
}

export default FormMobileOtp;