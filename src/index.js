// css controll with js using addClass / removeClass
const circle = document.querySelector(".circle");
const transform = {
  translate: "translate",
  scale: "scale",
  rotate: "rotate",
  skew: "skew",
  combiningTransform: "combiningTransform",
  transitionProperty: "transitionProperty",
  transitionTiming: "transitionTiming",
  transitionDelay: "transitionDelay"
};
const animate = transform.transitionTiming;

circle.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Click Me!") {
    e.target.innerHTML = "RESET!";
    e.target.classList.add(animate);
  } else {
    e.target.innerHTML = "Click Me!";
    e.target.classList.remove(animate);
  }
});
