let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let his = document.getElementById("his");
let result = document.querySelector(".history");
btn.forEach((ele) => {
  ele.onclick = () => {
    if (display.innerText != "" && ele.id == "equal") {
      display.innerText = `${display.innerText} \t = ${eval(
        display.innerText
      )}`;
      result.innerHTML += `${display.innerText} \n`;
    } else if (display.innerText == "" && ele.id == "equal") {
      display.innerText = "Empty!";
    } else if (ele.id == "clear") {
      display.innerText = "";
    } else if (ele.id == "del") {
      display.innerText = display.innerText.toString().slice(0, -1);
    } else {
      display.innerText += ele.innerText;
    }
    display.innerText == ele.value;
  };
});

his.onclick = () => {
  result.style.display = "block";
};
