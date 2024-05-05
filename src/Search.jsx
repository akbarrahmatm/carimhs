import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchStudent } from "./utils/httpRequest";

export default function Search() {
  const { searchParams } = useParams("search");

  const [inputStudent, setInputStudent] = useState(searchParams);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleClickSearch() {
    if (searchParams === inputStudent) {
      false;
    } else {
      const path = `/search/${inputStudent}`;

      window.location.href = path;
    }
  }

  function handleInputStudent(e) {
    const { value } = e.target;

    setInputStudent(value);
  }

  function handleClickDetail(id) {
    const path = `/student/${id}`;

    window.location.href = path;
  }

  useEffect(() => {
    async function fetchStudent() {
      setIsLoading(true);
      try {
        const response = await searchStudent(inputStudent);

        const parsedStudents = response.mahasiswa.map((item) => {
          const match = item.text.match(
            /^(.*?)\((.*?)\),\s*PT\s*:\s*(.*?),\s*Prodi\s*:\s*(.*?)$/
          );
          if (match) {
            return {
              nama: match[1].trim(),
              nim: match[2].trim(),
              universitas: match[3].trim(),
              prodi: match[4].trim(),
              id_mhs: item["website-link"].replace("/data_mahasiswa/", ""),
            };
          } else {
            return null;
          }
        });

        setStudents(parsedStudents.filter(Boolean));
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    }

    fetchStudent();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200">
        <div className="w-full join lg:mt-10 mt-5  lg:px-[20rem] px-2">
          <input
            className="input w-screen input-bordered join-item"
            placeholder="Search student Name / ID (NIM) / University here..."
            autoComplete={"off"}
            onChange={handleInputStudent}
            name="student"
            defaultValue={searchParams}
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
              <tbody>
                {students &&
                  students.length > 0 &&
                  students.map((student, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student.nim}</td>
                      <td>{student.nama}</td>
                      <td>{student.universitas}</td>
                      <td>{student.prodi}</td>
                      <td>
                        <button
                          onClick={() => handleClickDetail(student.id_mhs)}
                          className="btn btn-sm btn-neutral"
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {isLoading && (
              <div className="text-center h-[20vh] flex flex-col items-center justify-center">
                <span className="loading loading-dots loading-md"></span>
                <p className="text-center font-bold">Fetching Student Data</p>
              </div>
            )}

            {!isLoading && students.length === 0 && (
              <div className="text-center h-[20vh] flex flex-col items-center justify-center">
                <p className="text-center text-md font-bold">No Data Found</p>
                <p className="text-center ">Please search another keyword</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
