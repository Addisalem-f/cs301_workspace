[2: 51 AM, 12 / 14 / 2020] Addisalem: // Question 2: 
//   Select an element from the page which has an ID called "abebe" and put it's text on an element with an ID called "kebede" on page load. 
// #2.answer 2
var abebeElement = document.getElementById("abebe")
var kebedeElement = document.getElementById("kebede")
chalitElement.addEventListener("click", function () {
    kebedeElement.textContent = "This is a sample content abebe"
})
///3.Answer Question 3: 
//   Select an element from a page which has an ID called "abebe" and put it's text on an element with an ID called "kebede" when a user clicks on an element with an ID called "challa" 

var abebeElement = document.getElementById("abebe")
var kebedeElement = document.getElementById("kebede")
var chalitElement = document.getElementById("challa")
chalitElement.addEventListener("click", function () {
    kebedeElement.textContent = "This is a sample content abebe"
    // abebeElement.textContent="This is a sample content kebede"/converts abebe value to kebede
})
[2: 54 AM, 12 / 14 / 2020]Addisalem: // Question 1: 
//   Select an element from the page which has an ID called "almaz" and display it's text content on console and alert box on page load.

    // let almazElement = document.getElementById("almaz").textContent;
    // alert(almazElement)
    // console.log(almazElement)