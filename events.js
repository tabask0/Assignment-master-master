class Event {
    constructor(title, time, date, webinarTitle, webinarLink, location, adress, theme){
         this.title = title
         this.time = time
         this.date = JSON.stringify(new Date(date))
         this.webinar= {webinarTitle, webinarLink}
         this.liveEvent = {location, adress}
         this.theme = theme
        }
}

class Webinar extends Event {
    constructor(title, time, date, webinarTitle, webinarLink){
        super(title, date, time)
        this.webinarTitle = webinarTitle
        this.webinarLink = webinarLink
    }

    show() {
        console.log("This " + this.webinarTitle + " webinar " + "is hosted on " + this.webinarLink)
    }
}

class Theme extends Event {
    constructor(title, time, date, theme){
        super(title, time, date)
        this.theme = theme
    }

    show() {
        console.log("The theme for today's Event is: " + this.theme)
    }
}

class LiveEvent extends Event {
    constructor(title, time, date, location, adress){
        super(title, time, date)
        this.location = location
        this.adress = adress
    }

    show() {
        console.log("The location of the event is: " + this.location + " with the adresss: " + this.adress)
    }
}


// Builder Pattern for Event Class

class EventBuilder {
    constructor(title, time, date){
        this.title = title
        this.time = time
        this.date = JSON.stringify(date)
}
    setLiveEvent(location, adress) {
        this.location = location
        this.adress = adress
        return this
    }

    setWebinar(webinarTitle, webinarLink) {
        this.webinarTitle = webinarTitle
        this.webinarLink = webinarLink
        return this
    }

    setTheme(theme) {
        this.theme = theme
        return this
    }

    build(){
        return new Event(this.title, this.time, this.date, this.webinarTitle, this.webinarLink, this.location, this.adress, this.theme)
    }
}

let arr = []

const event1 = new EventBuilder("Vacanta", "10:00", "12.12.2019")
.setLiveEvent("Bucharest ", "Unirii")
.setWebinar("Vacation ", "https://google.com")
.setTheme("Party")
.build()
console.log(event1)


const event2 = new EventBuilder("Work", "09:00", "5.1.2021")
.setLiveEvent("Home ", "remote")
.build()
console.log(event2)

arr.push(event1, event2);
console.log(arr)


