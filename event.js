class Event {
    constructor(title, time, date){
         this.title = title
         this.time = time
         this.date = JSON.stringify(new Date(date))
        }

        getGenericDataShow(){
            return `
            <div class="container">
            <p>Title: ${this.title}</p>
            <p>Date: ${this.date}</p>
            <p>Time: ${this.time}</p>
            
            `
        }

        getSpecificDataShow(){};

        getDataShow() {
            return this.getGenericDataShow() + this.getSpecificDataShow()
        }
}


// Builder Pattern for Event Class

class EventBuilder {
    constructor(title, time, date){
        this.title = title
        this.time = time
        this.date = date
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

 