import { Link } from "react-router-dom";
import Logo from "../../assets/pic/brand.png"

import "./index.css";

export default function Navbar() {
  return (
    <div className="navbar text-default-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/"><li><a>หน้าแรก</a></li></Link>
            <li><a>อัตราค่าบริการ</a></li>
            <li><a>เช่ารถ</a></li>
            <li><a>นโยบาย</a></li>
            <Link to="/about"><li><a>เกี่ยวกับเรา</a></li></Link>
            <li>
              <a>ติดต่อเรา</a>
              <ul className="p-2">
                <li><a href="https://www.facebook.com/phufeaw/" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/_thephuuu/" target="_blank">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@phufeaw" target="_blank">Tiktok</a></li>
                <li><a href="https://line.me/ti/p/bRkJZaMQn7" target="_blank">Line</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/"><img src={Logo} alt="Logo" className="brand"/></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/"><li><a>หน้าแรก</a></li></Link>
          <li><a>อัตราค่าบริการ</a></li>
          <li><a>เช่ารถ</a></li>
          <li><a>นโยบาย</a></li>
          <Link to="/about"><li><a>เกี่ยวกับเรา</a></li></Link>
          <li>
            <details>
              <summary>ติดต่อเรา</summary>
              <ul className="p-2">
                <li><a href="https://www.facebook.com/phufeaw/" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/_thephuuu/" target="_blank">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@phufeaw" target="_blank">Tiktok</a></li>
                <li><a href="https://line.me/ti/p/bRkJZaMQn7" target="_blank">Line</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
