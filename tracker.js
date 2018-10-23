function apiRequest(link) {
  console.log(link);
}

let navElements = document.getElementsByClassName("primary-nav__list-item-link");

for (var i = 0; i < navElements.length; i++) {

  navElements[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.href)
    console.log(event.target.innerText)

    // apiRequest("hello");
  });
}

//    for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click",
//         function (event) {
//             event.preventDefault();
//             if (confirm('Are you sure?')) {
//                 window.location = this.href;
//             }
//         },
//         false);
// }

// var trackInternalLink = function(url) {
//     gtag('event', 'click', {
//       'event_category': 'internal urls',
//       'event_label': url,
//       'transport_type': 'beacon',
//       'event_callback': function(){document.location = url;}
//     });
//   }
