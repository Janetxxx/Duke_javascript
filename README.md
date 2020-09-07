# Duke_javascript

upper left conor is (0, 0)

## lesson_1
  Computers are all based on math, so computer only represents as numbers, not letters
  Abstraction: use computer program instead of knowning the concept of how does computer works
 
  ### Green screen
  if pixel is green, then set output to background pixel
  otherwise set output to foreground
     
## lesson_2
  Methods: invoked on objects
  Functions: not invoked on objects
  
  function 
  var
  
  "a" + "b" = "ab" 
  
  Writing code in Duke websit: https://www.dukelearntoprogram.com/course1/example/index.php

  ### if want to print an img
    var img = new SimpleImage("brownhorse.jpg");
    print(img.getWidth());
    print(img);
    
## lesson_3
### for loop
    for ( var pixel of img.values() ){
      var newG = 255 - pixel.getGreen():
      pixel.setGreen(newG)
    }


### code
    for (var pixel of fgImage.values()){
      if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getpixel(x, y);
        output.setPixel(x, y, bgPixel);
      }
      else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
      }
    }
    
 for White pixel: R = 255, G = 255, B = 255.  
 image is all red (each pixel has red value 255, green value 0 and blue value 0).
  
  
## lesson_4
  ### Interactivity 
    Green screen redux
    website to upload foreground and background: https://codepen.io/astrachan/pen/gwbGQv
  
  ### Buttons with Divs
    HTML and CSS with <div> and ID
    Button, connect to functionality
    JavaScript, controlled by button
    
    Create an HTML Button
    e.g. 
    in HTML:
    <input type = "button" value = "change" onclick = "alert('clicked button')" >
    
    or
    
    in HTML:
    <input type = "button" value = "change" onclick = "dochange()" >
    in JS (call JS function):
    function dochange(){
      alert('clicked button');
    }
    
    onclick attribute: triggers event handler on click, will pop up an alert message 'clicked button'.



  ### Changing Pages Interactively
  ### change background color
  
## lesson_5
  ### change text name
  
## lesson_6
  ### Using HTML5 Canvas to draw graphics
  website source: https://www.w3schools.com/html/html5_canvas.asp
