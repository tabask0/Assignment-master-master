if(window.Promise) {
    var promise = new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "./events.json", true);
      xhr.onload = function() {
        if (xhr.status == 200) {
            resolve(xhr.response);
        } else {
            reject(Error(xhr.statusText));
        }
      };
      xhr.send();
    });

   function show(){  promise.then(function(data) {
      data = JSON.parse(data)
      let datashow = data.map(element => 
        `
      <div class="container">
      <p>Title: ${element.title}</p>
      <p>Date: ${element.date}</p>
      <p>Time: ${element.time}</p>
      <p>Webinar: <li>Title: ${element.webinar.title}</li><li>Link: ${element.webinar.link}</li></p>
      <p>LiveEvent: <li>Location: ${element.liveEvent.location}</li><li>Adress: ${element.liveEvent.adress}</li></p>
      <p>Theme: ${element.theme}</p>
      </div>
      `
      ).join(" ")
      console.log(data)
      document.getElementById("show").innerHTML = datashow;
    })
    .catch(err => console.log("This error won't leave you alone: " + err))
}}



