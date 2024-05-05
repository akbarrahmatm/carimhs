import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar lg:px-[20%] bg-base-300 shadow-lg">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            consumePDDikti
          </Link>
        </div>
        {/* <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold">
              <a className="active">Student Search</a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
