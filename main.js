const eventsArray = []

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

   function show() {
      promise.then(function(data) {
      data = JSON.parse(data)
      data.map(element => {
        let event;
        if(element.hasOwnProperty("webinar")){
          event =new Webinar(element.title, element.date, element.description, element.webinar.webinarLink)
        }
        if(element.hasOwnProperty("LiveEvent")){
          event =new LiveEvent(element.title, element.date, element.description, element.LiveEvent.adress, element.LiveEvent.location)
        }
        if(element.hasOwnProperty("party")){
          event =new Party(element.title, element.date, element.description, element.party.theme)
        }
        eventsArray.push(event)
      })
      eventsArray.forEach(data => {
        datashow = data.getDataShow()
        document.getElementById("show").innerHTML += datashow
        console.log(data)
      })
    })
    .catch(err => console.log("This error won't leave you alone: " + err))
}}
