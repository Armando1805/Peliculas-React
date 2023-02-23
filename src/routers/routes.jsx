import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LangingPage } from "../pages/LandingPage"

export const MyRoutes = () => {
    return(<Router>
        <Routes>
            <Route exact path="/" element={<LangingPage/>}/>
        </Routes>
    </Router>)
}