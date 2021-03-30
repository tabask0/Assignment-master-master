class Party extends Event {
  constructor(title, date, description, theme){
      super(title, date, description)
      this.theme = theme
  }

  getSpecificDataShow(){
    return `
      <p>Party: <li>Theme: ${this.theme}</li></p>
      </div>
      `
  }

  show() {
      console.log("The theme for today's Event is: " + this.theme)
  }
}