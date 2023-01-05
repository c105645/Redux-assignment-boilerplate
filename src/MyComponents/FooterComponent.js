import React from 'react';
import './FooterComponent.css'

const Footer = () => (
    <div className="footer">
    <div className="container">
        <div className="row justify-content-center">             
            <div className="col-7 col-sm-5">
                <h5>Our Head Quarters</h5>
                <address>
                123, Some Famous Road<br />
                India<br />
                <i className="bi bi-envelope"></i>: <a href="mailto:newstoday@news.net">
                newstoday@news.net</a>
                </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
                <div className="text-center">
                    <a className="btn btn-primary btn-social-icon btn-google mr-1" href="http://google.com/+"><i className="bi bi-google"></i></a>
                    <a className="btn btn-primary btn-social-icon btn-facebook mr-1" href="http://www.facebook.com/profile.php?id="><i className="bi bi-facebook"></i></a>
                    <a className="btn btn-primary btn-social-icon btn-linkedin mr-1" href="http://www.linkedin.com/in/"><i className="bi bi-linkedin"></i></a>
                    <a className="btn btn-primary btn-social-icon btn-twitter mr-1" href="http://twitter.com/"><i className="bi bi-twitter"></i></a>
                    <a className="btn btn-primary btn-social-icon btn-google mr-1" href="http://youtube.com/"><i className="bi bi-youtube"></i></a>
                    <a className="btn btn-primary btn-social-icon" href="mailto:newstoday@news.net"><i className="bi bi-envelope"></i></a>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">             
            <div className="col-auto">
                <p>© Copyright 2022 News Today</p>
            </div>
        </div>
    </div>
</div>
);

export default Footer;