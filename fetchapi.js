// Approach one

// let p = fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
// );

// p.then((response) => {
//   console.log(response.status);
//   return response.json();
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// approch two

async function getting() {
  try {
    let p = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );
    let data = await p.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getting();
