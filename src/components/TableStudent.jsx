import { useEffect, useState } from "react";

export default function TableStudent({ data }) {
  const [studentLength, setStudentLength] = useState(0);

  useEffect(() => {
    setStudentLength(student.mahasiswa.length);
  }, []);

  return (
    <>
      <table className="table bg-base-300">
        <thead>
          <tr>
            <th></th>
            <th>Student ID (NIM)</th>
            <th>Student Name</th>
            <th>University</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
