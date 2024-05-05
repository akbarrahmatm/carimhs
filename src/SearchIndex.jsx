import Navbar from "./components/Navbar";
import { useState } from "react";

export default function SearchIndex() {
  const [inputStudent, setInputStudent] = useState("");

  function handleClickSearch() {
    const path = `/search/${inputStudent}`;

    window.location.href = path;
  }

  function handleInputStudent(e) {
    const { value } = e.target;

    setInputStudent(value);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200">
        <div className="w-full join lg:mt-10 mt-5  lg:px-[20rem] px-2">
          <input
            className="input w-screen input-bordered join-item"
            autoComplete={"off"}
            placeholder="Search student Name / ID (NIM) / University here..."
            onChange={handleInputStudent}
            name="student"
          />
          <button
            onClick={handleClickSearch}
            className="btn join-item btn-outline rounded-r-full"
          >
            Search
          </button>
        </div>
        <div className="lg:mt-10 mt-5  lg:px-[17rem] px-2">
          <div className="overflow-x-auto">
            <table className="table bg-base-300 mb-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student ID (NIM)</th>
                  <th>Student Name</th>
                  <th>University</th>
                  <th>Major</th>
                  <th></th>
                </tr>
              </thead>
            </table>

            <div className="text-center h-[20vh] flex flex-col items-center justify-center">
              <p className="text-center text-md font-bold">No Data Found</p>
              <p className="text-center ">
                Please reload or search student first
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
