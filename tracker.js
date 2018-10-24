function apiPostRequest(e, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  let data = JSON.stringify({
    ln: e.target.href,
    pn: e.target.innerText
  });
  xhr.send(data);
  console.log(data)
}

let navElements = document.getElementsByClassName("primary-nav__list-item-link");

for (var i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.href);
    console.log(event.target.innerText);

    apiPostRequest(event, "www.tesco.com");
  });
}

