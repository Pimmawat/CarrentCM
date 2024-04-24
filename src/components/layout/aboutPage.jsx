import React from 'react'
import Navbar from '../navbar'
import brand from '../../assets/pic/brand.png'

export default function AboutPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://f.ptcdn.info/330/048/000/oj3wnam4yD6BSbj18uP-o.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">CarrentCM</h1>
                            <p className="mb-5 text-3xl">ยินดีต้อนรับ</p>
                            <p className='bm-5'> ร้านของเราตั้งอยู่ที่จังหวัดเชียงใหม่ มีบริการให้เช่ารถ เอกสารง่าย ไม่ยุ่งยาก สะดวก ปลอดภัย บริการเป็นกันเอง</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}