import React from 'react'

export default function AboutPage() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.etsystatic.com/24786587/r/il/1e91c1/3462969636/il_570xN.3462969636_pc95.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <div className='avatar'>
                                <div className='w-24 rounded-xl'>
                                    <a href="/"><img src="https://dynamic.brandcrowd.com/asset/logo/937e0eec-eebf-4294-9029-41619d6c3786/logo-search-grid-1x?logoTemplateVersion=1&v=638369310055500000" alt="brand" /></a>
                                </div>
                            </div>
                            <a href="/"><h1 className="mb-5 text-5xl font-bold">CarrentCM</h1></a>
                            <h2 className='mb-5 text-4xl font-bold'>Contact</h2>
                            <div className="max-w-xl">
                                <a className="btn glass btn-primary text-white" href="https://www.facebook.com/phufeaw/" target='_blank'><svg class="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>Facebook</a>
                                <a className="btn glass btn-error text-white" href="https://www.instagram.com/_thephuuu/" target='_blank'><svg class="h-8 w-8 text-pink-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>Instagram</a>
                                <a className="btn glass text-white" href="https://www.tiktok.com/@phufeaw" target='_blank'><svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M18 15a6 6 0 1 1 -10.853 -3.529c1.926-2.338 4.763-3.327 3.848-8.47 2.355 1.761 5.84 5.38 2.022 9.406-1.136 1.091-.244 2.767 1.221 2.593.882-.105 2.023-.966 3.23-2.3.532.68.532 1.717.532 2.3z" /></svg>Tiktok</a>
                                <a className="btn glass btn-success text-white" href="https://line.me/ti/p/bRkJZaMQn7" target='_blank'><svg class="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="4" />  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" /></svg>Line</a>
                                <a className="btn glass btn-success text-white" href="tel:0931713860"><svg class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>โทร</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}