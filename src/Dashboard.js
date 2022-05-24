import Helmet from "react-helmet";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import logo from './images/Rectangle_74.png';
import headImage from './images/img_car.png';

function Head() {
    return (
        <Helmet>
            <title>Dashboard Car || Challenge VII</title>
        </Helmet>
    )
}

function ToolBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width={100} height={34} className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className=" btn btn-success ">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
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
                        <img src="/images/img_checklist.png" height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src="/images/img_checklist.png" height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src="/images/img_checklist.png" height={24} width={24} />
                        <div className="text ps-3">
                            Sewa Mobil Jangka Panjang Bulanan
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src="/images/img_checklist.png" height={24} width={24} />
                        <div className="text ps-3">
                            Gratis Antar - Jemput Mobil di Bandara
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <img src="/images/img_checklist.png" height={24} width={24} />
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
                                            <img src="/images/icon_complete.png" height={32} width={32} />
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
                                            <img src="/images/icon_price.png" height={32} width={32} />
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
                                            <img src="/images/icon_24hrs.png" height={32} width={32} />
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
                                            <img src="/images/icon_professional.png" height={32} width={32} />
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
function Dashboard() {
    return (
        <div>
            <Head />
            <ToolBar />
            <Header />
        </div>
    )
}

export default Dashboard;