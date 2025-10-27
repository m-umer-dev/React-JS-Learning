let link = "https://jsonplaceholder.typicode.com/posts";

let data = {
  title: "hello Buddy",
  body: "This Data is send using post.",
  userId: 1,
};

fetch(link, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => console.log("Success", result))
  .catch((error) => console.log("Error", error));
