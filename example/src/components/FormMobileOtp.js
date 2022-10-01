import React, { useState } from "react";


const FormMobileOtp = () => {
    const [dataform, setDataform] = useState(true);
    const [display, setDisplay] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setDataform(!dataform)
        setDisplay(!display)
    }
    return (
        <div className="offer-form">
            {
                dataform &&
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            }
            {
                display &&
                <form>
                    <label>
                        Otp:
                        <input type="text" maxLength={6} name="otp" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            }

        </div>


    )
}

export default FormMobileOtp;