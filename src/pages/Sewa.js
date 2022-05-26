import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from '@fortawesome/fontawesome-free-regular'
import Helmet from "react-helmet";

import ToolBar from "../widget/Toolbar";
import { faCar, faMotorcycle, faScrewdriver, faToolbox, faUsers } from "@fortawesome/fontawesome-free-solid";
import { } from "@fortawesome/fontawesome-free-regular";
import Footer from "../widget/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import currencyFormat from "../service/currency";



const Head = () => {
    return (
        <Helmet>
            <title>Car Rental || Challenge VII</title>
        </Helmet>
    )
}

const Header = () => {
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

const SettingBar = (setDriver, setDate, setTime, setPassenger) => {
    return (
        <div className="container">
            <div className="card p-4 br-10" style={{ marginTop: '-60px' }}>
                <form>
                    <fieldset>
                        <div className="row flex-wrap">
                            <div className="col align-self-end">
                                <label htmlFor="cb_tipe_driver" className="form-label">Tipe Driver</label>
                                <div className="dropdown">
                                    <a className="btn btn-outline-success dropdown-toggle" role="button" id="cb_tipe_driver" data-bs-toggle="dropdown">
                                        Pilih Tipe Driver
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="cb_tipe_driver">
                                        <li><a id="index_supir" className="dropdown-item" >Dengan
                                            Sopir</a></li>
                                        <li><a id="index_tanpa_supir" className="dropdown-item" >Tanpa Sopir (Lepas Kunci)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col align-self-end">
                                <label htmlFor="cb_date_picker" className="form-label">Tanggal</label>
                                <div className="input-group date" id="cb_date_picker" data-target-input="nearest">
                                    <input id="txt_date" type="date" className="form-control outline-success" data-target="#cb_date_picker" />
                                </div>
                            </div>
                            <div className="col align-self-end">
                                <label htmlFor="cb_time_picker" className="form-label">Waktu Jemput / Ambil</label>
                                <div className="input-group date" id="cb_time_picker" data-target-input="nearest">
                                    <input id="txt_time" type="time" className="form-control outline-success" data-target="#cb_time_picker" />
                                </div>
                            </div>
                            <div className="col align-self-end">
                                <label htmlFor="txt_jumlah_penumpang" className="form-label">Jumlah Penumpang (optional)</label>
                                <div className="input-group date">
                                    <input id="txt_jumlah_penumpang" type="number" max={6} min={0} className="form-control outline-success" minLength={0} />
                                    <span className="input-group-text bg-white d-block outline-success">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto align-self-end mt-3">
                                <button id="btn_cari_mobil" type="button" className="btn btn-success mt-32" >Cari Mobil</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    )
}

const CarCard = ({ index, carImage, carType, carRent, carDescription, carCapacity, carTransmission, carYear }) => {
    return (
        <div id="card_mobil" className="card ms-3 mt-3 br-10" style={{ width: '18rem' }}>
            <div className="card-body position-relative" style={{ height: 530 }}>
                <p>
                    <img id="img_card" src={require('../images/car' + (index < 9 ? "0" + (index + 1) : index + 1) + '.min.jpg')} height="160px" width="255px" className="br-10" />
                </p>
                <h6 id="txt_nama_mobil">
                    {carType}
                </h6>
                <h5 id="txt_harga_mobil" className="card-title">{currencyFormat(carRent)} / hari</h5>
                <p id="txt_deskripsi_mobil" className="card-text">{carDescription}
                </p>
                <div className="d-flex align-items-center mb-2">
                    <div>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div id="txt_keterangan_penumpang" className="ms-3">
                        {carCapacity} Orang
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div>
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <div id="txt_keterangan_setting" className="ms-3">
                        {carTransmission}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div id="txt_keterangan_waktu" className="ms-3">
                        Tahun {carYear}
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: 15, width: '89%' }}>
                    <a className="btn btn-success p-2" style={{ width: '100%' }}>Pilih Mobil</a>
                </div>
            </div>
        </div>
    )
}

const Content = ({ cars, showCard, driver, date, time, passenger }) => {
    return (
        // carImage={car.image} carType={car.type} carRent={car.rentPerDay} carDescription={car.description} carCapacity={car.capacity} carTransmission={car.transmission} carYear={car.year}
        // style={{ display: 'none' }}
        <div id="data_container" className="container mt-5" {...showCard ? 'batu' : 'hidden'} >
            <div id="row_data" className="d-flex justify-content-center flex-wrap">
                {
                    cars.map((car, index) => (
                        <CarCard key={index} index={index} carImage={"." + car.image} carType={car.type} carRent={car.rentPerDay} carDescription={car.description} carCapacity={car.capacity} carTransmission={car.transmission} carYear={car.year} />
                    ))
                }

            </div >
        </div >
    )
}

function Sewa() {
    const [cars, setCar] = useState([]);

    const [driver, setDriver] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passenger, setPassenger] = useState(0);

    const getCar = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');

            setCar(response.data);

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(
        () => getCar,
        []
    )

    return (
        <div>
            <Head />
            <ToolBar />
            <Header />
            <SettingBar setDriver={setDriver} setDate={setDate} setTime={setTime} setPassenger={setPassenger} />
            <Content cars={cars} driver={driver} date={date} time={time} passenger={passenger} />
            <Footer />
        </div>
    )
}

export default Sewa;