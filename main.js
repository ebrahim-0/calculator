let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
btn.forEach((ele) => {
  ele.onclick = () => {
    if (display.innerText != "" && ele.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && ele.id == "equal") {
      display.innerText = "Empty!";
    } else if (ele.id == "clear") {
      display.innerText = "";
    } else if (ele.id == "del") {
      display.innerText = display.innerText.toString().slice(0, -1);
    } else {
      display.innerText += ele.innerText;
    }
  };
});
