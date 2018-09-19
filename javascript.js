var currentAmount = 120;
var goal = 632.21;

var barWidth = 265 * (currentAmount / goal) + "px";

var fill = document.querySelector(".fill");

fill.style.width = barWidth;

var boldMoney = document.getElementById('boldMoney');

var whatsLeft = goal - currentAmount;

boldMoney.innerHTML = "$" + whatsLeft;
