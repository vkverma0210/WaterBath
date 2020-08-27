document
  .getElementById("registration-button")
  .addEventListener("click", function () {
    document.querySelector(".Registration_Form").style.display = "block";
  });

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".Registration_Form").style.display = "none";
});
