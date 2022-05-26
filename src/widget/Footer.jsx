function Footer() {
    return (
        <div className="bg-light mt-5">
            <div className="container mt-xxl-5 p-5">
                <div className="row">
                    <div className="col">
                        <p>
                            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                        </p><p>
                        </p><p>
                            binarcarrental@gmail.com
                        </p>
                        <p>
                            081-233-334-808
                        </p>
                    </div>
                    <div className="col">
                        <p style={{ fontWeight: 'bold' }}>
                            Our services
                        </p><p>
                        </p><p style={{ fontWeight: 'bold' }}>
                            Why Us
                        </p>
                        <p style={{ fontWeight: 'bold' }}>
                            Testimonial
                        </p>
                        <p style={{ fontWeight: 'bold' }}>
                            FAQ
                        </p>
                    </div>
                    <div className="col">
                        <p>Connect with us</p>
                        <div className="d-flex">
                            <div className="p-2">
                                <img src={require("../images/icon_facebook.png")} width={32} height={32} />
                            </div>
                            <div className="p-2">
                                <img src={require("../images/icon_instagram.png")} width={32} height={32} />
                            </div>
                            <div className="p-2">
                                <img src={require("../images/icon_twitter.png")} width={32} height={32} />
                            </div>
                            <div className="p-2">
                                <img src={require("../images/icon_mail.png")} width={32} height={32} />
                            </div>
                            <div className="p-2">
                                <img src={require("../images/icon_twitch.png")} width={32} height={32} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <p>
                            Copyright Binar 2022
                        </p>
                        <img src={require("../images/Rectangle_74.png")} width={100} height={34} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;