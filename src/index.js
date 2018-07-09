const form = document.getElementById("salesform_form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  setTimeout(() => {
    // reset form
    first_name.value = "";
    last_name.value = "";
    email.value = "";
    // alert
    alert('Fake Success');
  }, 500);
});
