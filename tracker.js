// ==UserScript==
// @name         test script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://secure.tesco.com/clubcard*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

let counter = {};
let addMenuTracking = (link) => {
let navElements = document.getElementsByClassName(link);
for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);
    apiPostRequest(event, "www.tesco.com", event.target.href, event.target.innerText);
    updateCounter(event.target.innerText);
    updateWidget(counter)
  
  
  });
  
  }

}
// "primary-nav__list-item-link" 
function apiPostRequest(url, href, page_name) {
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
let data = JSON.stringify({
  ln: href,
  pn: page_name
});
xhr.send(data);
console.log(data);
}
let updateCounter = link => {
counter[link] == null ? (counter[link] = 1) : (counter[link] += 1);
console.log(counter);
};


let readCounterCookie = (a = "clicks_counter") => {
let b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
if (b !== null) {
  let cookie_data = b[b.length - 1];
  console.log("the cookie data is:" + cookie_data);
  counter = JSON.parse(cookie_data);
}
return b ? b.pop() : "";
};

let writeToCookie = () => {
let counterString = JSON.stringify(counter);
document.cookie = "clicks_counter" + "=" + counterString;
console.log("cookie data saved!");
};


function apiPostRequest(url, href, page_name) {
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
let data = JSON.stringify({
  ln: href,
  pn: page_name
});
xhr.send(data);
console.log(data);
}

let createWidget = (counterObject) => {

let clicksWidget = document.createElement("div");

clicksWidget.id = "clicksWidget"
clicksWidget.innerHTML = "hits on main menu bar:<br/><br/>" + JSON.stringify(counterObject).substring(1,JSON.stringify(counterObject).length-1)

document.body.insertBefore(clicksWidget, null);
  // add styles
  let styles = "#clicksWidget{position:fixed!important;z-index :9999;top:10px;left:20px;width : 200px;height:100px;padding:20px;margin : 10%;border-radius : 10px;background:#f00;color:#fff; box-shadow: 0 8px 6px -6px black;}";
  let stls = document.createElement("style");
  stls.textContent = styles;
  document.head.appendChild(stls);
}

let updateWidget = (counterObject) => {
document.getElementById("clicksWidget").innerHTML = "hits on main menu bar:<br/><br/>" + JSON.stringify(counterObject)

}

addMenuTracking("primary-nav__list-item-link")
readCounterCookie();
createWidget(counter);
// for (var i = 0; i < navElements.length; i++) {
// navElements[i].addEventListener("click", function (event) {
//   event.preventDefault();ß
//   console.log(event.target.href);
//   console.log(event.target.innerText);

//   apiPostRequest(event, "www.tesco.com", event.target.href, event.target.innerText);
//   updateCounter(event.target.innerText);
//   updateWidget(counter)


// });

// }




})();