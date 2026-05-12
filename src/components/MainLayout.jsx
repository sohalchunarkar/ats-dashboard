import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="grow container mx-auto p-4 md:p-6 lg:p-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout