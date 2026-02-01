import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Donation } from "../pages/donation/Donation"
import { Volunteer } from "../pages/volunteer/Volunteer"

export const RoutesPages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donation" element={<Donation/>} />
                <Route path="/volunteer" element={<Volunteer/>}/>
            </Routes>
        </>
    )
}