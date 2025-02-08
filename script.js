document.addEventListener("DOMContentLoaded", function () {
  const dark = document.querySelector("button:nth-of-type(3)");
  const white = document.querySelector("button:nth-of-type(4)");
  const fontButton = document.querySelector("#word");
  const body = document.body;
  const fontElements = document.querySelectorAll(".fonts h1");

  // Toggle dark mode
  dark.addEventListener("click", function () {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  });

  // Toggle light mode
  white.addEventListener("click", function () {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  });

  // Change font text dynamically
  fontButton.addEventListener("click", function () {
    let userText = prompt("Enter your text:");
    if (userText) {
      fontElements.forEach((element) => {
        element.textContent = userText;
      });
    }
  });
});
