import React from 'react'
import Navbar from '../navbar'
import HeadBar from '../body'
import Footer from '../footer'
import AboutPage from './aboutPage'
function Main() {
    return (
        <>
            <Navbar></Navbar>
            <HeadBar></HeadBar>
            <AboutPage></AboutPage>
            <Footer></Footer>
        </>
    )
}

export default Main