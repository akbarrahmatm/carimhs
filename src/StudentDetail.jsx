import { parse } from "postcss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { detailStudent } from "./utils/httpRequest";

export default function StudentDetail() {
  const { idStudent } = useParams("search");

  const [inputStudent, setInputStudent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [generalData, setGeneralData] = useState([]);
  const [academicData, setAcademicData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  function formatIdSmt(id_smt) {
    const tahun = id_smt.slice(0, 4);
    const semester = id_smt.slice(4);
    if (parseInt(semester) % 2 === 0) {
      return `Genap ${tahun}`;
    } else {
      return `Ganjil ${tahun}`;
    }
  }

  function formatGender(gender) {
    let parsedGender;
    if (gender === "L") {
      parsedGender = "Male";
    } else if (gender === "P") {
      parsedGender = "Female";
    } else {
      parsedGender = "";
    }

    return parsedGender;
  }

  function handleClickSearch() {
    const path = `/search/${inputStudent}`;

    window.location.href = path;
  }

  function handleInputStudent(e) {
    const { value } = e.target;

    setInputStudent(value);
  }

  useEffect(() => {
    async function fetchDetailStudent() {
      setIsLoading(true);
      try {
        const response = await detailStudent(idStudent);

        setGeneralData(response.dataumum);
        setAcademicData(response.datastudi);
        setStatusData(response.datastatuskuliah);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }

    fetchDetailStudent();
  }, []);

  console.log(generalData);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200">
        <div className="w-full join lg:mt-10 mt-5  lg:px-[20rem] px-2">
          <input
            className="input w-screen input-bordered join-item"
            placeholder="Search student here..."
            autoComplete={"off"}
            name="student"
            onChange={handleInputStudent}
          />
          <button
            onClick={handleClickSearch}
            className="btn join-item btn-outline rounded-r-full"
          >
            Search
          </button>
        </div>

        <div className="w-full join lg:mt-10 mt-5  lg:px-[20rem] px-2">
          <div className="card w-screen lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              {generalData && (
                <div className="grid grid-cols-5 gap-4 sm:mr-0 md:mr-0 lg:mr-[10rem]">
                  <div className="font-semibold">ID (NIM)</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.nipd && generalData.nipd}
                  </div>

                  <div className="font-semibold">Name</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.nm_pd}
                  </div>

                  <div className="font-semibold">Gender</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.jk && formatGender(generalData.jk)}
                  </div>

                  <div className="font-semibold">University</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.namapt && generalData.namapt}
                  </div>

                  <div className="font-semibold">Major</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.namaprodi && generalData.namaprodi}
                  </div>

                  <div className="font-semibold">Degree</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.namajenjang && generalData.namajenjang}
                  </div>

                  <div className="font-semibold">Start Period</div>
                  <div className="text-center">:</div>
                  <div className="col-span-3">
                    {isLoading && <div className="skeleton h-4 w-full"></div>}
                    {generalData.mulai_smt &&
                      formatIdSmt(generalData.mulai_smt)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full join mt-5  lg:px-[20rem] px-2">
          <div className="card w-screen lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <div role="tablist" className="tabs tabs-bordered">
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="Status Kuliah"
                  defaultChecked
                />
                <div
                  role="tabpanel"
                  className="tab-content overflow-x-auto bg-base-100 border-base-300  p-6"
                >
                  <div className="overflow-x-auto ">
                    <table className="table  mb-3">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Semester</th>
                          <th>Status</th>
                          <th>SKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && (
                          <>
                            {[...Array(5)].map((_, index) => (
                              <tr key={index}>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                        {statusData &&
                          statusData.length > 0 &&
                          statusData.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.id_smt && formatIdSmt(item.id_smt)}</td>
                              <td>{item.nm_stat_mhs}</td>
                              <td>{item.sks_smt}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {!isLoading && statusData.length === 0 && (
                      <div className="text-center h-[20vh] flex flex-col items-center justify-center">
                        <p className="text-center text-md font-bold">
                          No Data Found
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab w-[150px]"
                  aria-label="Mata Kuliah"
                />
                <div
                  role="tabpanel"
                  className="tab-content overflow-x-auto bg-base-100 border-base-300  p-6"
                >
                  <div className="overflow-x-auto ">
                    <table className="table  mb-3">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Semester</th>
                          <th>Kode Mata Kuliah</th>
                          <th>Mata Kuliah</th>
                          <th>SKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && (
                          <>
                            {[...Array(5)].map((_, index) => (
                              <tr key={index}>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                                <td>
                                  <div className="skeleton h-4 w-full"></div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                        {academicData &&
                          academicData.length > 0 &&
                          academicData.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{formatIdSmt(item.id_smt)}</td>
                              <td>{item.kode_mk}</td>
                              <td>{item.nm_mk}</td>
                              <td>{item.sks_mk}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {!isLoading && academicData.length === 0 && (
                      <div className="text-center h-[20vh] flex flex-col items-center justify-center">
                        <p className="text-center text-md font-bold">
                          No Data Found
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
