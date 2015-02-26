var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};

bgImage.src = "images/background.jpg";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

heroImage.src = "images/hero.png";

var coinReady = false;
var coinImage = new Image();
coinImage.onload = function () {
	coinReady = true;
};

coinImage.src = "images/coin_gold.png";

var render = function (){
	if(bgReady) {
		ctx.drawImage(bgImage,0,0);
	}
	if(heroReady) {
		ctx.drawImage(heroImage,0,0);
	}
	if(coinReady) {
		ctx.drawImage(coinImage,0,0);
	}
};

var main = function () {
	render();
	requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame;
main();