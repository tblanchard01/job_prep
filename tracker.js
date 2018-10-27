let counter = {}
function apiPostRequest(e, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  let data = JSON.stringify({
    ln: e.target.href,
    pn: e.target.innerText
  });
  xhr.send(data);
  console.log(data);
}
function updateCounter(link) {
  counter[link] == null ? (counter[link] = 1) : (counter[link] += 1);
    console.log(counter);
  }


function writeToCookie(link) {
  console.log(link);
}

let navElements = document.getElementsByClassName(
  "primary-nav__list-item-link"
);

for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);

    apiPostRequest(event, "www.tesco.com");
    updateCounter(event.target.innerText);
  });
}

// var navElements = document.getElementsByClassName(“nav-item__link”);

// for (var i = 0; i < navElements.length; i++) {

//  navElements[i].addEventListener(“click”, apiRequest);

// }

// function apiRequest(){
//  var params = `ln=${event.target.href}&pn=${event.target.innerText}`
//  var url = ‘https:/tesco.com’
//  var request = new XMLhttpRequest();
//  request.open(‘POST’, url, true)
//  request.setRequestHeader(“Content-type”, “application/x-www-form-urlencoded”);
//  request.send(params);
//  alert(‘hello’)
// }

// function setSessionCookie(){
//  document.cookie =“counter=” + 1 + “;pn=” + event.target.innerText + “;ln=” + event.target.href + “;max-age=” + (60 * 60 * 24 *30) + “;”
// }
