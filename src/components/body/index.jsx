import Swal from 'sweetalert2';

export default function HeadBar() {
    function noti() {
        <div role="alert" className="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>we use cookies for no reason.</span>
            <div>
                <button className="btn btn-sm">Deny</button>
                <button className="btn btn-sm btn-primary">Accept</button>
            </div>
        </div>
    }
    return (
        <>
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
            {/*Intro */}
            <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
                <div className="container">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <span className="font-semibold text-lg text-primary mb-2 block">
                                    ยินดีต้อนรับ
                                </span>
                                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                    คุณกำลังมองหารถเช่าอยู่ใช่ไหม
                                </h2>
                                <p className="text-base text-body-color text-lg">
                                    CarrentCM บริการรถเช่าเชียงใหม่
                                    <br />บริการรับส่งรถถึงที่ เงื่อนไขไม่ยุ่งยาก เอกสารไม่เยอะ
                                    <br />รถสภาพดี สะอาด ขับได้ทั่วประเทศไทย

                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Show Product*/}
                </div>
            </section>
            <div className="p-8">
                <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
                    เช่ากับเราดียังไง
                </h1>
                <p className="text-center mt-6 text-lg font-light text-gray-500">
                    The time is now for it to be okay to be great. For being a bright color. For
                    standing out.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8">
                    <div
                        className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
                        Social conversations
                    </h2>
                    <p className="font-light text-sm text-gray-500 mb-3">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                    <button
                        onClick={() => Swal.fire({
                            title: 'Something is wrong!',
                            text: 'Please try agian',
                            icon: 'error',
                            confirmButtonText: 'Close',
                        })}
                    >
                        กดปุ่มนี้สิ
                    </button>
                    <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
                        More about us icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="p-8">
                    <div
                        className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
                        Social conversations
                    </h2>
                    <p className="font-light text-sm text-gray-500 mb-3">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                    <a className="text-green-500 flex items-center hover:text-green-600" href="/">
                        More about us icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                <div className="p-8">
                    <div
                        className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
                        Social conversations
                    </h2>
                    <p class="font-light text-sm text-gray-500 mb-3">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                    <a className="text-red-500 flex items-center hover:text-red-600" href="/">
                        More about us icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}