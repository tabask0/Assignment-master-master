class LiveEvent extends Event {
  constructor(title, date, description, location, adress){
      super(title, date, description)
      this.location = location
      this.adress = adress
  }
    getSpecificDataShow(){
      return `
      <p>LiveEvent: <li>Location: ${this.location}</li><li>Adress: ${this.adress}</li></p>
      </div>
      `
    }

  show() {
      console.log("The location of the event is: " + this.location + " with the adresss: " + this.adress)
  }
}