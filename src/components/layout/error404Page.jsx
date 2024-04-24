import React from 'react'
import {Link } from 'react-router-dom'

function Error404Page() {

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.makewebeasy.com/th/blog/wp-content/uploads/2019/12/cover.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Error code 404</h1>
                        <p className="mb-5">Page Not found!</p>
                        <Link to ="/"><button className="btn btn-ghost">กลับไปยังหน้าแรก</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404Page