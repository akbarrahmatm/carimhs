import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar lg:px-[20%] bg-base-300 shadow-lg">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            CariMHS
          </Link>
        </div>
      </div>
    </>
  );
}
