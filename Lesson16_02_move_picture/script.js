/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function() {
      this.left = this.left + this.speed;
    }
  
    this.moveDown = function() {
      this.top = this.top + this.speed;
    }
  
    this.moveLeft = function() {
      this.left = this.left - this.speed;
    }
  
    this.moveUp = function() {
      this.top = this.top - this.speed;
    }
  }
  
  var hero = new Hero('Bursyamo.png', 10, 30, 100, 80);
  
  function start() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
  
    document.onkeydown = function(evt) {
      switch (evt.keyCode) {
        case 37: // Left arrow key
          hero.moveLeft();
          break;
        case 38: // Up arrow key
          hero.moveUp();
          break;
        case 39: // Right arrow key
          hero.moveRight();
          break;
        case 40: // Down arrow key
          hero.moveDown();
          break;
      }
      document.getElementById('game').innerHTML = hero.getHeroElement();
    }
  }
  start();