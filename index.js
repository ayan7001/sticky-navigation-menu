const theHamburgerButton = document.querySelector(".hamburger");
const hamburgerFirstChild = document.querySelector("#ham1");
const hamburgerSecondChild = document.querySelector("#ham2");
const hamburgerThirdChild = document.querySelector("#ham3");
const navigationMenu = document.querySelector(".menus");

theHamburgerButton.addEventListener("click", function () {
  if (hamburgerFirstChild.getAttribute("rotation") === "off") {
    hamburgerFirstChild.setAttribute("rotation", "on");
    hamburgerSecondChild.setAttribute("display", "off");
    hamburgerThirdChild.setAttribute("rotation", "on");
    navigationMenu.setAttribute("displaymobile", "on");
  } else if (hamburgerFirstChild.getAttribute("rotation") === "on") {
    hamburgerFirstChild.setAttribute("rotation", "off");
    hamburgerSecondChild.setAttribute("display", "on");
    hamburgerThirdChild.setAttribute("rotation", "off");
    navigationMenu.setAttribute("displaymobile", "off");
  }
});

//test
var theSubCategory = document.querySelector(".subcategory");
console.log(theSubCategory.parentElement.nextElementSibling, window.innerWidth);
var theSecondProduct = document.querySelector("#secondproduct");

var theDropDownButton = document.querySelector("#categoryopener");
theDropDownButton.addEventListener("click", function () {
  if (
    theSubCategory.getAttribute("display") === "off" &&
    window.innerWidth > 430
  ) {
    theSubCategory.setAttribute("display", "on");
  } else if (
    theSubCategory.getAttribute("display") === "on" &&
    window.innerWidth > 430
  ) {
    theSubCategory.setAttribute("display", "off");
  } else if (
    theSubCategory.getAttribute("display") === "off" &&
    window.innerWidth <= 430
  ) {
    theSubCategory.setAttribute("display", "on");
    theSecondProduct.setAttribute("displaymobilesubcategory", "on");
  } else if (
    theSubCategory.getAttribute("display") === "on" &&
    window.innerWidth <= 430
  ) {
    theSubCategory.setAttribute("display", "off");
    theSecondProduct.setAttribute("displaymobilesubcategory", "off");
  }
});
