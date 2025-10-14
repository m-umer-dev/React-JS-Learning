console.log("Error Handling Video is clicked");
setTimeout(() => {
  console.log("Error Handling Video is loading...");
}, 1000);
setTimeout(() => {
  console.log("Error Handling video is loaded and Played..");
}, 2000);
try {
  console.log(value);
} catch (error) {
  console.log(error);
}
setTimeout(() => {
  console.log("Thanks For Watching..");
}, 3000);
