# Duke_javascript

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
  
  
