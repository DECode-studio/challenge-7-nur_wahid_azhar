import Helmet from "react-helmet";

import headImage from '../images/img_car.png';
import ToolBar from "../widget/Toolbar";

function Head() {
    return (
        <Helmet>
            <title>Dashboard Car || Challenge VII</title>
        </Helmet>
    )
}
function Header() {
    return (
        <div className="bg-light pt-5">
            <div className="d-flex ctx-resp">
                <div className="p-5">
                    <div className="container">
                        <h1 className="text-black pb-3">
                            Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h1>
                        <div className="text">
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </div>
                        <div className="pt-3">
                            <a type="button" className="btn btn-success" href="/sewa">Mulai Sewa Mobil</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ms-auto">
                        <img className="img-responsive" id="img_car" src={headImage} />
                    </div>
                </div>
            </div>
        </div>

    )
}

function Content() {
    return (
        <div>
            <div className="container p-md-5 d-flex ctx-resp">
                <div className="p-5">
                    <img className="img-responsive" id="img_service" src={require('../images/img_service.png')} />
                </div>
                <div className="align-self-center">
                    <h3>
                        Best Car Rental for any kind of trip in (Lokasimu)!
                    </h3>
                    <div className="text pt-3 pb-3">
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.
                    </div>
                    <div className="d-flex pb-3">
                        <img src={require("../images/img_checklist.png")} height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src={require("../images/img_checklist.png")} height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src={require("../images/img_checklist.png")} height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Jangka Panjang Bulanan
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src={require("../images/img_checklist.png")} height={24} width={24} />
                        <div className="text ps-3">
                            Gratis Antar - Jemput Mobil di Bandara
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src={require("../images/img_checklist.png")} height={24} width={24} />
                        <div className="text ps-3">
                            Layanan Airport Transfer / Drop In Out
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="col">
                    <h3 className=" pt-5 pb-2">Why Us?</h3>
                    <div className="text pb-4">
                        Mengapa harus pilih Binar Car Rental?
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-wrap">
                            <div className="ps-2">
                                <div className="card" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className="pb-3">
                                            <img src={require("../images/icon_complete.png")} height={32} width={32} />
                                        </div>
                                        <h5 className="card-title">Mobil Lengkap</h5>
                                        <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                            terawat
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2">
                                <div className="card" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className="pb-3">
                                            <img src={require("../images/icon_price.png")} height={32} width={32} />
                                        </div>
                                        <h5 className="card-title">Harga Murah</h5>
                                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                            mobil
                                            lain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2">
                                <div className="card" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className="pb-3">
                                            <img src={require("../images/icon_24hrs.png")} height={32} width={32} />
                                        </div>
                                        <h5 className="card-title">Layanan 24 Jam</h5>
                                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                            tersedia
                                            di
                                            akhir minggu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2">
                                <div className="card" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className="pb-3">
                                            <img src={require("../images/icon_professional.png")} height={32} width={32} />
                                        </div>
                                        <h5 className="card-title">Sopir Profesional</h5>
                                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                            tepat
                                            waktu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
function Dashboard() {

    return (
        <div>
            <Head />
            <ToolBar />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Dashboard;