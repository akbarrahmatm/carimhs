export async function searchStudent(name) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(
    `https://be-proxy-pddikti.vercel.app/student/${name}`,
    {
      method: "GET",
    }
  );

  const resData = await response.json();

  if (!response.ok) {
    const message = `${response.status} | ${resData.message}`;
    throw new Error(message);
  }

  return resData;
}

export async function detailStudent(id) {
  // await new Promise((resolve) => setTimeout(resolve, 100000));

  const response = await fetch(
    `https://be-proxy-pddikti.vercel.app/student/detail/${id}`,
    {
      method: "GET",
    }
  );

  const resData = await response.json();

  if (!response.ok) {
    const message = `${response.status} | ${resData.message}`;
    throw new Error(message);
  }

  return resData;
}
