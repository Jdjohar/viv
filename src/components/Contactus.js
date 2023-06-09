import React, {useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Contactus = () => {

    const [Data, setData] = useState({Success: false, data: {address:"",date:"",email:"",phone:"",pincode:""}});
    const [query, setquery] = useState({name:"",email:"", phonequery:"", organization:"", message:""})
    const [messageabc, setmessageabc] = useState(false);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/datalist",{
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    console.log(response,"foodcat")
    setData(response)
  }

  const FormQuery = async(e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/mailer",{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:query.name,
            email:query.email, 
            phonequery:query.phonequery, 
            organization:query.organization, 
            message:query.message
        })
    });

    const json = await response.json();
    setmessageabc(true)
    console.log(json, 'sd dscsd sdcsd sdcsd sdcsd');

    if(!json.success){
        alert('Enter vaild  Credentails')
    }
   
}

const onchange = (event) => {
    setquery({ ...query, [event.target.name]: event.target.value })
}
  useEffect(()=>{
    loadData();
  },[])
  return (
    <div>       
    <Navbar/>

    
    <div class="page-title-container">
        <div class="container">
            <h3>CONTACT US</h3>
        </div>
    </div>
    <section className=' py-3'>
        <div className="container">
            <div className="row">
                <div class="col-md-5">
                    <p>
                    {messageabc == true ? "Query Sent!" : ""}
                    </p>
                    
                    <div class="send_message">
                    <h5 className='pt-5'>How can we help you?</h5>
                        <div class="form">
                            <form  name="form1" onSubmit={FormQuery}>
                                <p class="label">Your Name <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="text"   onChange={onchange} name="name" id="name" class="req form-control" required />
                                </div>
                                <p class="label">E-mail <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="email"   onChange={onchange} name="email" id="email" class="req form-control" required />
                                </div>
                                <p class="label">Mobile Number <span className='clr'>*</span></p>
                                <div class="field required">
                                {/* <!--<input name="mobile" type="number" class="form-control" />--> */}
                                <input type='text' name="phonequery"   onChange={onchange} id="mobile" class="req form-control" />
                                </div>
                                <p class="label">Organization <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="text"  onChange={onchange} id="organization" name="organization" class="req form-control" required />
                                </div>
                                <p class="label">Message <span className='clr'>*</span></p>
                                <div class="textarea required">
                                <textarea name="message"   onChange={onchange} id="comments"  class="req form-control" required></textarea>
                                </div>
                                <p></p>
                                <div class="button">
                                <input type="submit"  class="general_button btn" value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">
                    <table class="table line-height">
                    <tr>
                        { console.log(Data, "Data")}

                    {/* {Data.map((data) => {
  
  return(
<>
<td><h4 className='pt-5'>Corporate Address :</h4>
                    <p className='mb-0'><span class="text_subtitle_2"></span><b>Vivilex Technologies Pvt Ltd</b><br />
                    
                    {data.address}
                    <br />
                    HSR Layout, 1st Sector,<br />
                        Bengaluru, Karnataka,<br />
                        India<br/>
                        Pin: 560 102</p>
                        <p className='mb-0'><span class="text_subtitle_2 phones">Phone:</span> +91 810 500 5202</p>
                    <p className='mb-0'><span class="text_subtitle_2">Email:</span> <a href="mailto:#" target="_blank" className='orgclr text-decoration-none'>info@vivilextech.com</a></p>
                    <p><span class="text_subtitle_2">Web:</span> <a href="index-2.html" target="_blank" className='orgclr text-decoration-none'>www.vivilextech.com</a></p>
                        </td>
</>
                        )
                       })} */}
                       
                                      
                    <td width="10"><p></p>
                    <p></p>
                    <p></p></td>
                    <td valign="top">
                    <h4 className='pt-5'>Registered Address :</h4>
                    <p><span class="text_subtitle_2"></span><b>Vivilex Technologies Pvt Ltd</b><br />
                    
                    <strong>Address:</strong> {Data.Success == true ? Data.data.address : ""}<br />
                    <strong>Pincode:</strong> {Data.Success == true ? Data.data.pincode : ""}<br />
                    <strong>Phone:</strong> {Data.Success == true ? Data.data.phone : ""}<br />
                    <strong>Email:</strong> {Data.Success == true ? Data.data.email : ""}<br />
                       
                        </p>
                    </td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
      
    </div>
  )
}

export default Contactus
