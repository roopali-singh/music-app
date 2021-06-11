// TO TOGGLE TO DARK MODE ///////////////////////////////////////////////////////////////////

export const toToggle = () => {
  const toggle = document.querySelector(".toggle");
  const wave = document.querySelector(".wave");
  const header__heading = document.querySelector(".header__heading");
  const footer = document.querySelector(".footer");

  toggle.classList.add("animate");

  setTimeout(() => {
    toggle.classList.toggle("active");
    wave.classList.toggle("active");
    header__heading.classList.toggle("active");
    footer.classList.toggle("active");
  }, 150);

  setTimeout(() => toggle.classList.remove("animate"), 300);
};

// SECONDS TO HH:MM:SS /////////////////////////////////////////////////////////////////////

export function hms(second) {
  var sec_num = parseInt(second, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    // hours + ":" +
    minutes + ":" + seconds
  );
}

// TO CHANGE THE BACKGROUND COLOR O SCROLL /////////////////////////////////////////////////

export function changeBackgroundColor() {
  const body = document.querySelector("body");
  body.classList.add("background");
}
