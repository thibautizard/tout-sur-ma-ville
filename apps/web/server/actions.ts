"use server";

export async function getCities() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json(),
  );
  // const url =
  //   "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&countryIds=FR&namePrefix=toul&languageCode=FR&limit=5&sort=-population";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.API_KEY_GEO_DB_CITIES ?? "",
  //     "X-RapidAPI-Host": process.env.API_HOST_GEO_DB_CITIES ?? "",
  //   },
  // };
  // try {
  //   const response = await fetch(url, options);
  //   const data = await response.json();
  //   return { data };
  // } catch (error) {
  //   return { error };
  // }
}
