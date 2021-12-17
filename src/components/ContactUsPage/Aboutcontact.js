import React from "react";
import './Aboutcontact.css';
import emailjs from 'emailjs-com';
function Aboutcontact(props){
function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_t3zywkp','template_frnicx6',e.target,'user_NTcR20H1U9ZdnQlhVySB1'
    ).then(res=>{
        alert("Successfully Submitted");
    }).catch(err=> console.log(err));
}
return(
<>
    <b><u><h1>Contact us :- </h1></u></b>
        <h2> For further queries , you can mail us: </h2>
        <h2>chanakyapahalgo@gmail.com</h2>
        <br/>
        <br/>
        <h2>
            Helpline Number:
        </h2>
        <h2>
            Awdesh Kumar - 8809683711
        </h2>
        <h2>
            Location : Bihar
        </h2>
        <React.Fragment>
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                               <div class="card-body">
                                   <div className="container border"
                                   style={{marginTop:"20px",
                                            width:'100%',
                                            backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEF6CyD-_cobPQcPVv0zuLEQCSTzipebs4g&usqp=CAU')`,
                                           

                                        }}>
                                   <b> <h2 class="Chankaya_Pahal" style={{marginTop:'25px'}}>Contact Form</h2></b>
                                    <form className="row" style={{margin: "25px 85px 75px 100px"}}
                                    onSubmit={sendEmail}
                                    >
                                        <label>Name:</label>
                                        <input type='text' name='name' className="form-control"/>
                                        <label style={{marginTop:"10px"
                                                
                                            }}>Email</label>
                                        <input type="email" name="user_email" className="form-control"
                                        />
                                        <label style={{marginTop:"10px"
                                                
                                            }}> Message </label>
                                        <textarea name="message" className="form-control"/>
                                        <input type="submit" value="Send" className="form-control btn btn-primary"
                                        style={{marginTop:"30px"
                                                
                                                }}
                                        />

                                    </form>
                                    </div>
                                 </div>
                                              </div>
                                              </div>
                        <div class="col">
                                 <div className="container border"
                                   style={{marginTop:"20px",
                                            width:'75%',
                                            height:'400px',
                                            textAlign:"center",
                                            backgroundImage:`url('https://www.smilefoundationindia.org/images/contact/contact.jpg')`,       
                                        }}>
                                            </div>
                        </div>
                    </div>
                </div>
</React.Fragment> 
<div>
    <h1 style={{marginLeft:"20px",fontSize:"30px"}}>Visit us Here:</h1>
    <br/>
    <h2 style={{marginLeft:"30px",
                color:"green",
                fontSize:"25px"}}>Headoffice:</h2>
    <h2 style={{marginLeft:"30px"}}>Bihar </h2>
    <h2 style={{marginLeft:"30px"}}>Mobile Number: +917488210620</h2>
</div>
</>
);
}
export default Aboutcontact;