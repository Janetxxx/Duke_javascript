// 2d means two-demension graph
// in this way, create a small yellow square
var ctx = dd1.getContext("2d");
ctx.fillStyle = "yellow";
ctx.fillReact(10,10,40,40);

// add one more yellow square next to it
ctx.fillReact(60,10,40,40);

// add text in black
ctx.fillStyle = "black";
ctx.font = "50px Arial";
ctx.fillText("Hello",10,80);


