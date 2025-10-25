let arg = [
  "Initializing Hack Program...",
  "Hacking ummroro username...",
  "username found ummroro01",
  "Connecting to Facebook",
];

function bodydisplay(args) {
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    setTimeout(() => {
      let p = document.createElement("p");
      p.textContent = element;
      document.body.append(p);
    }, 3000 * index);
  }
}

bodydisplay(arg);
