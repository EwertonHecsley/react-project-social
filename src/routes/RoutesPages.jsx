import { Route, Routes } from "react-router-dom"

export const RoutesPages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Social Project</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
        </>
    )
}