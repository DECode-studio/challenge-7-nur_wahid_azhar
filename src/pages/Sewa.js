import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/fontawesome-free-regular'
import Helmet from "react-helmet";

import ToolBar from "../widget/Toolbar";
import { faUsers } from "@fortawesome/fontawesome-free-solid";
import Footer from "../widget/Footer";

function Head() {
    return (
        <Helmet>
            <title>Car Rental || Challenge VII</title>
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
                    </div>
                </div>
                <div>
                    <div className="ms-auto">
                        <img className="img-responsive" id="img_car" src={require("../images/img_car.png")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SettingBar() {
    return (
        <div className="container">
            <div className="card p-4 br-10" style={{ marginTop: '-60px' }}>
                <form>
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="cb_tipe_driver" className="form-label">Tipe Driver</label>
                                <div className="dropdown">
                                    <a className="btn btn-outline-success dropdown-toggle" role="button" id="cb_tipe_driver" data-bs-toggle="dropdown">
                                        Pilih Tipe Driver
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="cb_tipe_driver">
                                        <li><a id="index_supir" className="dropdown-item" onclick="indexSupir()">Dengan
                                            Sopir</a></li>
                                        <li><a id="index_tanpa_supir" className="dropdown-item" onclick="indexTanpaSupir()">Tanpa Sopir (Lepas Kunci)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="cb_date_picker" className="form-label">Tanggal</label>
                                <div className="input-group date" id="cb_date_picker" data-target-input="nearest">
                                    <input id="txt_date" type="text" className="form-control outline-success" data-target="#cb_date_picker" />
                                    <span className="input-group-append" data-target="#cb_date_picker" data-toggle="datetimepicker">
                                        <span className="input-group-text bg-white d-block outline-success">
                                            <i className="fa fa-regular fa-calendar"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="cb_time_picker" className="form-label">Waktu Jemput / Ambil</label>
                                <div className="input-group date" id="cb_time_picker" data-target-input="nearest">
                                    <input id="txt_time" type="text" className="form-control outline-success" data-target="#cb_time_picker" />
                                    <span className="input-group-append">
                                        <span className="input-group-text bg-white d-block outline-success" data-target="#cb_time_picker" data-toggle="datetimepicker">
                                            {/* <FontAwesomeIcon icon={"fa-light fa-clock"} /> */}
                                            <FontAwesomeIcon icon={faClock} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="txt_jumlah_penumpang" className="form-label">Jumlah Penumpang (optional)</label>
                                <div className="input-group date">
                                    <input id="txt_jumlah_penumpang" type="number" max={6} min={0} className="form-control outline-success" />
                                    <span className="input-group-append">
                                        <span className="input-group-text bg-white d-block outline-success">
                                            <FontAwesomeIcon icon={faUsers} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button id="btn_cari_mobil" type="button" className="btn btn-success mt-32" onclick="changeShow()">Cari Mobil</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    )
}

function Sewa() {
    return (
        <div>
            <Head />
            <ToolBar />
            <Header />
            <SettingBar />
            <Footer />
        </div>
    )
}

export default Sewa;