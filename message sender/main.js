function getData() {
  const btn = document.getElementById("submitBtn");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const input = document.getElementById("message");
    const output = document.getElementById("messageoutput");
    const error = document.querySelector(".error");
    console.log(input.value);
    if (input.value === "") {
      error.classList.add("display");
    } else {
      error.classList.remove("display");
      output.textContent = input.value;
      input.value = "";
    }
  });
}

getData();
