const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

const INTERVAL_TIME_IN_MS = 1000;

setInterval(() => {
  const currentDate = new Date();
  const currHr = currentDate.getHours();
  const currMn = currentDate.getMinutes();
  const currSc = currentDate.getSeconds();

  rotateCss(hr, currHr * 30);
  rotateCss(mn, currMn * 6);
  rotateCss(sc, currSc * 6);

}, INTERVAL_TIME_IN_MS);

function rotateCss(element, deg) {
  element.style.transform = `rotate(${deg}deg)`;
}
