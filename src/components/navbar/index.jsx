export default function Navbar() {
  return (
    <div className="navbar text-default-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>หน้าแรก</a></li>
            <li><a>อัตราค่าบริการ</a></li>
            <li><a>เช่ารถ</a></li>
            <li><a>นโยบาย</a></li>
            <li><a>เกี่ยวกับเรา</a></li>
            <li>
              <a>ติดต่อเรา</a>
              <ul className="p-2">
                <li><a>Facebook</a></li>
                <li><a>Tiktok</a></li>
                <li><a>Line</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost text-lg">CarrentCM</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>หน้าแรก</a></li>
          <li><a>อัตราค่าบริการ</a></li>
          <li><a>เช่ารถ</a></li>
          <li><a>นโยบาย</a></li>
          <li><a>เกี่ยวกับเรา</a></li>
          <li>
            <details>
              <summary>ติดต่อเรา</summary>
              <ul className="p-2">
                <li><a>Facebook</a></li>
                <li><a>Tiktok</a></li>
                <li><a>Line</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-success text-white"><svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>โทรเลย</a>
      </div>
    </div>
  );
}
