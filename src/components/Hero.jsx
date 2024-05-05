import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [inputStudent, setInputStudent] = useState("");
  const navigate = useNavigate();

  function handleClickSearch() {
    const path = `/search/${inputStudent}`;
    navigate(path);
  }

  function handleInputStudent(e) {
    const { value } = e.target;

    setInputStudent(value);
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:p-20 lg:m-10">
            <h1 className="text-4xl font-bold">Search Indonesian Student</h1>
            <p className="py-6 ">
              This application is present as a reference for Higher Education
              information and provides convenience for users who want to access
              data information about Higher Education and the academic community
              anywhere and anytime.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search here.."
                  className="input input-bordered"
                  name="student"
                  onChange={handleInputStudent}
                  autoComplete={"off"}
                  required
                />
                <label class="label">
                  <p href="#" class="label-text-alt text-center">
                    You can search Student Name / ID (NIM) / Student
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleClickSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
