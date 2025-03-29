import React from "react";
import '../component/common/Footer.css';
import { useState } from "react";
import { useEffect } from "react";
import logo from '../../public/images/logo.png'
const Footer = () => {

    const [footerDetails, setFooterDetails] = useState({})

    useEffect(() => {
        getAllFooter()
    }, []);

    const getAllFooter = async () => {
        try {
            const response = await fetch('http://3.7.81.243:3253/api/settings/fetch-frontend-details')
            const data = await response.json();
            if (data.success) {
                setFooterDetails(data?.data)
            }
        } catch (error) {
            console.log("error fetch getAllFooter", error)
        }
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-tagline">
                        Tagline will go here. Lorem ipsum d oler sit amet...
                    </p>
                    <a href="mailto:user@email.com" className="footer-email">
                        {footerDetails?.contact_mail}
                    </a>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-right">
                    <div className="footer-info">
                        <h4>Address</h4>
                        <p>{footerDetails?.address}</p>
                    </div>

                    <div className="footer-info">
                        <h4>Contacts</h4>
                        <p>{footerDetails?.contact_mail}</p>
                        <p>{footerDetails?.contact_no}</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src={logo} alt="Gecko Accountancy" />
                </div>
                <nav className="footer-nav">
                    <a href="#">About</a>
                    <a href="#">Blogs</a>
                    <a href="#">Contact</a>
                    <a href="#">Services</a>
                </nav>
                <p className="footer-rights">© 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
