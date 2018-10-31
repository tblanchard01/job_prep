let counter = {};
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
  return counter;
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

// let createWidget = () => {
//   let div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.background = "red";
//   div.style.color = "white";
//   div.innerHTML = "Hello";
//   document.body.appendChild(div)

// }

let navElements = document.getElementsByClassName(
  "primary-nav__list-item-link"
);
// createWidget(); 
readCounterCookie();
for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);

    apiPostRequest(event, "www.tesco.com", event.target.href, event.target.innerText);
    updateCounter(event.target.innerText);
  });
}



