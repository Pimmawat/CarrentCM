export default function HeadBar() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to CarrentCM</h1>
                        <p className="mb-5">ยินดีต้อนรับเข้าสู่ร้านเช่ารถของเรา ทางร้านของเรามีบริการเช่ารถถึงที่ในเขตเมืองเชียงใหม่ สามารถเข้ามาคุยและติดตามข่าวสารร้านเราได้</p>
                        <button className="btn btn-default">เช่าเลย</button>
                    </div>
                </div>
            </div>
        </>
    )
}