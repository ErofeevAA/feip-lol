import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {useState} from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
    //const [user, setUser] = useState();

    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <NavBar className="flex-grow-0"/>
                <AppRouter className="main-content flex-grow-1"/>
                <Footer className="flex-shrink-0 flex-grow-0"/>
            </div>
        </BrowserRouter>
    );
}


export default App;
