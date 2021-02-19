let profiles = [];
// example {id:2961966, title: 'Deadpool', year: 2015}

// 3 parameters "id" generated with Date.now method, "title" and "year" are input boxes
const addProfile = (ev) => {
  ev.preventDefault(); // to stop the form from submitting
  let profile = {
    id: Date.now(), // current time stamp
    firstName: document.getElementById("firstName1").value,
    lastName: document.getElementById("lastName1").value,
  };
  profiles.push(profile); // adds the input and id parameters as an array to the movies array object

  document.forms[0].reset(); // to clear the form for the next entries
  // document.querySelector('form').reset();

  // add an if statement for form validation

  // for display purposes opnly
  console.warn("added", { profiles });
  let pre = document.querySelector("#obj pre");
  pre.textContent = JSON.stringify(profiles, "/t", 2);

  // saving to localStorage
  localStorage.setItem("shortProfiles", JSON.stringify(profiles));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addProfile);
});
