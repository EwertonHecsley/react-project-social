import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Donation } from "../pages/donation/Donation"

export const RoutesPages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donation" element={<Donation/>} />
            </Routes>
        </>
    )
}