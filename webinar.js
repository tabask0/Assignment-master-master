class Webinar extends Event {
  constructor(title, date, description, webinarLink){
      super(title, date, description)
      this.webinarLink = webinarLink
  }
  getSpecificDataShow(){
    return `
    <p>Webinar: <li>WebinarLink: <a href="${this.webinarLink}">${this.webinarLink}</a></li></p>
    </div>
    `
  }

  show() {
      console.log("This webinar is hosted on " + this.webinarLink)
  }
}
