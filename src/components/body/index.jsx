export default function HeadBar() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to CarrentCM</h1>
                        <p className="mb-5">ยินดีต้อนรับเข้าสู่ร้านเช่ารถของเรา ทางร้านของเรามีบริการเช่ารถถึงที่ในเขตเมืองเชียงใหม่ สามารถเข้ามาคุยและติดตามข่าวสารร้านเราได้</p>
                        <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>เช่าเลย</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-3xl text-primary">CarrentCM</h3>
                                <p className="py-4 text-md text-primary">สวัสดีค้าบ เรียกผมว่าไอ้จ๊าบ</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-error text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>ปิด</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    )
}