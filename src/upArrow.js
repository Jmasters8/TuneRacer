export default class UpArrow {
  constructor(gameWidth, gameHeight) {
    this.width = 80
    this.height = 80

    this.image = document.getElementById("upArrow");

    // this.position = {
    //   x: 350,
    //   y: 800
    // }
    this.position = {
      x: 275,
      y: 613
    }

  }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}