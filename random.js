var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {  
  makeRect(0,0,10000, 10000, "white", 1)
   makeCircle(100,60,30,"orange",1)
  makeRect(0,50,210,100,"blue",1)
 makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",90,20,15,12,1)
  makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",120,20,15,12,1)
   makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",153,20,15,12,1)
       makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",65,20,15,12,1)
        makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",30,20,15,12,1)
        makeImage("https://img.clipartfest.com/8bf0aa9fdb04cef0db66f09cf45d0006_monster-octopus-clipart-orange-octopus-clipart_675-502.png",25,60,35,32,1)
        makeImage("http://clipartix.com/wp-content/uploads/2016/05/Salmon-fish-clip-art-free-clipart-images.png",140,60,30,24,1)
        makePolygon(34,"black",1)
        makeText("BOTTOM OF OCEAN", 10, 40, 5, "Pangolin", "blue", 1)
        
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0,0,1000,1000,"gray",1)
   makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",90,90,20,12,1)
    makeCircle(35,30,15,"orange",1)
     makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",60,90,20,12,1)
      makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",30,90,20,12,1)
             makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",0,90,20,12,1)
              makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",120,90,20,12,1)
               makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",150,90,20,12,1)
                makeImage("https://img.clipartfest.com/a7a3fc2f557335d673ad2cfd06d2f6a5_05aa795dabacdef12bf60bac5b98ca-free-clipart-images-cloud_8660-6920.svg",180,90,20,12,1)
                makeImage("https://img.clipartfest.com/e25ae31a1ef950e193deb3fbda627b95_flying-paper-airplane-clipart-free-plane-clipart_1052-744.svg",120,50,50,22,1)
                makeImage("http://inventors.phillipmartin.info/corsair.png",40,60,60,32,1)
                makePolygon(34,"black",1)
                 makeText("BOTTOM OF OCEAN", 10, 40, 5, "Pangolin", "blue", 1)
                
}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0,0,1000,1000,"black",1)
     makeCircle(35,30,15,"orange",1)
     makeImage("http://carpng.com/wp-content/uploads/thumb/space-shuttle-8668-0.png",40,60,60,32,1)
     makeImage("http://donnamanobianco.com/uploads/3/5/8/0/3580689/2650618_orig.png",100,40,60,32,1)
     makeImage("http://frpic.com/vectors/moon-clipart/moon-clipart-3.png",150,10,60,32,1)
     makeRect(1131,1223,12,12,"black",1)
     makePolygon(2590,"black",1)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    varmyRandom = Math.random()
if(varmyRandom<0.1){
    createFirstScene()
}else if(varmyRandom<0.67){
    createSecondScene()
}else{
    createThirdScene()
}
    // Generate a random number between 0 and 1, and store it in a variable.
    
    // If the number is less than 0.33, call the function to create your first scene.
    
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}