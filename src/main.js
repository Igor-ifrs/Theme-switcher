import "../style/style.css";

const IccTheme = function () {
  const btnFlip = document.querySelector(".container_img");
  const _html = document.querySelector("html");
  const _title = document.querySelector("h1");

  btnFlip.addEventListener("click", function () {
    btnFlip.classList.toggle("switch-mode");

    if (_html.classList.contains("light")) {
      _title.textContent = `Trocando o Tema do Site (tema light)`;
      _html.setAttribute("class", "dark");
    } else {
      _title.textContent = `Trocando o Tema do Site (tema dark)`;
      _html.setAttribute("class", "light");
    }
  });
};

window.addEventListener("DOMContentLoaded", IccTheme);
