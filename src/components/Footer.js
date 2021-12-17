import React from "react";
import { NavLink, Router } from "react-router-dom";
import "./Footer.css";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footerstyled";
import emailjs from 'emailjs-com';

const Footer = () => {
	function sendEmail(e){
		e.preventDefault();
		emailjs.sendForm('service_t3zywkp','template_frnicx6',e.target,'user_NTcR20H1U9ZdnQlhVySB1'
		).then(res=>{
			alert("Successfully Submitted");
		}).catch(err=> console.log(err));
	}
return (
	<Box>
	<h1 style={{ color: "Blue",
				textAlign: "center",
				marginTop: "-10px",
                fontSize: "30px"
                 }}>
		Chanakya Pahal
	</h1>
	<Container style={{marginTop:"20px"}}>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<p style={{color:"white", marginLeft:"10px", fontSize:"20px"}}>Chanakya Pahal is an NGO in India directly benefitting
over 15,00,000 children and their families every year. </p>
		</Column>
		<Column>
			<Heading>Our Work</Heading>
			<NavLink to="/education" className="main-nav" activeClassName="main-nav-active"
			style={{color:"white", marginTop:"0px"}}>Education</NavLink>
			<NavLink to="/health" className="main-nav" activeClassName="main-nav-active"
			style={{color:"white", marginTop:"-40px"}}>Health</NavLink>
			<NavLink to="/livelihood" className="main-nav" activeClassName="main-nav-active"
			style={{color:"white", marginTop:"-40px"}}>Livelihood</NavLink>
			<NavLink to="/womenempowerment" className="main-nav" activeClassName="main-nav-active"
			style={{color:"white", marginTop:"-40px"}}>Women Empowerment
                </NavLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/profile.php?id=100075450080489">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/ngochanakyapahal/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px",
                                
                                }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			                    <form className="row"
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
                                        style={{marginTop:"10px"
                                                
                                                }}
                                        />

                                    </form>
			</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
