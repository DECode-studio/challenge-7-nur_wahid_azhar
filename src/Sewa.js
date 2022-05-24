
import Helmet from "react-helmet";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Head() {
    return (
        <Helmet>
            <title>Car Rental || Challenge VII</title>
        </Helmet>
    )
}
function Sewa() {
    return (
        <div>
            <Head />
        </div>
    )
}

export default Sewa;