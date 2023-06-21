canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.

    rover_width = 100 ;
    rover_height = 90;

    mars_background_array = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"] ;

    random_number = Math.floor(Math.random()*4)



background_image = mars_background_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;


 function add() {
    background_img_tag = new Image() ;
    background_img_tag.onload = uploadBackground ;
    background_img_tag.src = background_image ;

    rover_img_tag = new Image() ;
    rover_img_tag.onload = uploadRover ;
   rover_img_tag.src = rover_image ;



 }

//Create "uploadBackground()" function.

function uploadBackground() {
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height)
}
                              
                                         //Draw image of background

//Create "uploadrover()" function.

function uploadRover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height)
}

                                        //Draw image of rover


window.addEventListener( "keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
    if (keyPressed == "38") {
        up();
        console.log("up")
    }
		
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if (keyPressed == "40") {
        down();
        console.log("down")
    }
    if (keyPressed == "37") {
        left();
        console.log("left")
    }
    if (keyPressed == "39") {
        right();
        console.log("right")
    }
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
    if(rover_y>=10) {
        rover_y = rover_y - 10 ;
        console.log("when up arrow key is pressed, X = " + rover_x + " ,Y = " + rover_y); 
        uploadBackground() ;
        uploadRover() ;
    }

}
function down(){
    if(rover_y<=500) {
        rover_y = rover_y + 10 ;
        console.log("when down arrow key is pressed, X = " + rover_x + " ,Y = " + rover_y); 
        uploadBackground() ;
        uploadRover() ;
    }

	
}
function right(){
    if(rover_x<=690) {
        rover_x = rover_x + 10 ;
        console.log("when right arrow key is pressed, X = " + rover_x + " ,Y = " + rover_y); 
        uploadBackground() ;
        uploadRover() ;
    }
	
}
function left(){

    if(rover_x>=5) {
        rover_x = rover_x - 10 ;
        console.log("when left arrow key is pressed, X = " + rover_x + " ,Y = " + rover_y); 
        uploadBackground() ;
        uploadRover() ;
    }
	
}



