class Webinar extends Event {
  constructor(title, time, date, webinarTitle, webinarLink){
      super(title, time, date)
      this.webinarTitle = webinarTitle
      this.webinarLink = webinarLink
  }
  getSpecificDataShow(){
    return `
    <p>Webinar: <li>Webinar Title: ${this.webinarTitle}</li><li>WebinarLink: ${this.webinarLink}</li></p>
    </div>
    `
  }

  show() {
      console.log("This " + this.webinarTitle + " webinar " + "is hosted on " + this.webinarLink)
  }
}
