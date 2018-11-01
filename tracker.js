let counter = {};
// let output = counter.JSON.stringify
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
  createWidget(counter)



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

  let div = document.createElement("div");
  div.style.width = "20%";
  div.style.height = "15%";
  div.style.padding = "20px";
  div.style.borderRadius = "10px";
  div.style.background = "red";
  div.style.color = "white";
  div.innerHTML = "hits on main menu bar" + JSON.stringify(counterObject)

  document.body.insertBefore(div, null)


}

let navElements = document.getElementsByClassName(
  "primary-nav__list-item-link"
);
readCounterCookie();
createWidget(counter);
for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);

    apiPostRequest(event, "www.tesco.com", event.target.href, event.target.innerText);
    updateCounter(event.target.innerText);
  });

}



