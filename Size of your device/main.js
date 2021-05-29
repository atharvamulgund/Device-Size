window.onresize = screen;
window.onload = screen;

function screen(){
    myWidth = window.innerWidth;
    myHeight = window.innerHeight
    document.getElementById('size').innerHTML = "Width : " + myWidth + "px Height: " +myHeight ;
   

}