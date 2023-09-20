var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2D");
img_width = 300;
img_height = 100;
im:img_image="";
var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.src = img_image;   
    img_imgTag.onload = uploading;
}

function uploading() {
	ctx.drawImage(img_imgTag.src, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
            aplhabetkey();
            document.getElementById("d1").innerHTML="Presionaste una tecla del alfabeto";
        }
	else {
		otherkey();
		document.getElementById("d1").innerHTML="Presionaste un símbolo u otra tecla";
	}
}

function aplhabetkey()
{
    img_image="Alpkey.png";
    add();
}
function numberkey()
{
	img_image="numkey.png";
    add();
}
function arrowkey()
{
    img_image="Arrkey.png";
    add();
}
function specialkey()
{
	img_image="spkey.png";
    add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}