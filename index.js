let circle = document.querySelector("circle");
let stylesheet = document.styleSheets[0];

let number = "100%";
let numberOnly = parseInt(number.substring(0, number.length - 1));
let decimal;
if (numberOnly < 100) {
    if (number < 9) {
        decimal = parseFloat(`0.0${numberOnly}`);
    } else {
        decimal = parseFloat(`0.${numberOnly}`);
    }
} else {
    decimal = 1.0;
}
console.log(decimal);
let style;
for (let i = 0; i < stylesheet.cssRules.length; i++) {
    if (stylesheet.cssRules[i].selectorText === ".added") {
        style = stylesheet.cssRules[i];
    }
}
console.log(parseInt(252 - 252 * decimal));
style.style.setProperty("--filled", parseInt(252 - 252 * decimal));


circle.classList.add("added");
