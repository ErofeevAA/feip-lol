import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {refresh} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        refresh().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <NavBar className="flex-grow-0"/>
                <AppRouter className="main-content flex-grow-1"/>
                <Footer className="flex-shrink-0 flex-grow-0"/>
            </div>
        </BrowserRouter>
    );
})


export default App;
