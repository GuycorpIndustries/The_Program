/*export {double}
function double (n) {
    return n * 2;
}*/

const darkModeBtn = document.getElementById("darkModeBtn");

let darkModeOn = false;

function darkMode() {
  document.addEventListener("DOMContentLoaded", () => {
    darkModeBtn.addEventListener("click", () => {
      if (!darkModeOn) {
        trans();
        document.body.setAttribute("data-theme", "dark");
        darkModeBtn.classList.add("toggleAnim");
        darkModeBtn.classList.remove("toggleAnimRev");
        darkModeOn = true;
      } else {
        trans();
        document.body.setAttribute("data-theme", "light");
        darkModeBtn.classList.add("toggleAnimRev");
        darkModeBtn.classList.remove("toggleAnim");
        darkModeOn = false;
      }
    });
  });
}
let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};


export default darkMode;