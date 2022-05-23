
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
function Dashboard() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard;