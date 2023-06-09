import React, { useState } from 'react'

export default function ContactInfo() {

    const [info, setinfo] = useState({ address: "", pincode: "", phone: "", email: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/createcontact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    address: info.address,  
                    pincode: info.pincode,
                    phone: info.phone,
                    email: info.email
                }
            )
        });

        const json = await response.json();
        console.log(json, "JSON DATA");

        if (json.Success) {
            alert('Enter vaild  Credentails')
        }
    }
    const onchange = (event) => {
        setinfo({ ...info, [event.target.name]: event.target.value })
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className="send_message">
                    <h5 className='pt-5'>Update Contact Info</h5>
                    <div className="form" >
                        <form name="form1" onSubmit={handleSubmit}> 
                            <p className="label">Address <span className='clr'>*</span></p>
                            <div className="field required">
                                <input 
                                type="text" 
                                name="address" 
                                id="address" 
                                value={info.address} 
                                onChange={onchange}
                                className="req form-control" 
                                
                                />
                            </div>
                            <p className="label">Pincode <span className='clr'>*</span></p>
                            <div className="field required">
                                <input 
                                type="text" 
                                name="pincode" 
                                id="pincode" 
                                value={info.pincode} 
                                onChange={onchange}
                                className="req form-control" 
                                
                                />
                            </div>
                            <p className="label">Phone <span className='clr'>*</span></p>
                            <div className="field required">
                                <input 
                                type="text" 
                                name="phone" 
                                id="phone" 
                                value={info.phone} 
                                onChange={onchange}
                                className="req form-control" 
                                
                                />
                            </div>
                            <p className="label">email <span className='clr'>*</span></p>
                            <div className="field required">
                                <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                value={info.email} 
                                onChange={onchange}
                                className="req form-control" 
                                
                                />
                            </div>
                            
                            <div className="button">
                                <input type="submit" className="general_button btn" value="Update Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
