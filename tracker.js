let counter = {};
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
  return counter;
}

function readCookie(a = "clicks_counter") {
  let b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  if (b !== null) {
    let cookie_data = b[b.length - 1];
    console.log("the cookie data is:" + cookie_data);
    counter = JSON.parse(cookie_data);
  }
  return b ? b.pop() : "";
}

function writeToCookie() {
  let counterString = JSON.stringify(counter);
  document.cookie = "clicks_counter" + "=" + counterString;
  console.log("cookie data saved!");
}

let navElements = document.getElementsByClassName(
  "primary-nav__list-item-link"
);

readCookie();
for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);

    apiPostRequest(event, "www.tesco.com");
    updateCounter(event.target.innerText);
  });
}
