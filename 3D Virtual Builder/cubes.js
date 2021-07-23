var vw = window.innerWidth

var $plane = document.getElementById('plane')
var $grid = document.getElementById('grid')
var grid = document.getElementById('grid')
var $cubes = document.getElementById('blocks')
var $cubeModel = document.querySelector('.cube')
var $recModel = document.querySelector('.rec')
var $hexModel = document.querySelector('.hex')
var $colorize = document.getElementById('colorize')
var $colorPreview = document.getElementById('color-preview')

var color = '#ffaa22'
var widthInSpaces = 20
var heightInSpaces = 20
var widthInSpaces1 = 10
var widthInSpaces2 = 15
var spaceSize = $plane.clientWidth / widthInSpaces
var spaceSize2 = $plane.clientHeight / widthInSpaces
var spaceSize3 = $plane.clientWidth / widthInSpaces1
var spaceSize4 = $plane.clientWidth / widthInSpaces2
var totalSpaces = widthInSpaces * heightInSpaces
var totalSpaces2 = widthInSpaces1 * heightInSpaces

var shapeCurrent = 'cube'
var returnFunction = addCube

/** grid **/
/*var globalSVG = document.getElementById("theTriangleGrid");*/
function createTriangle(id, points){
  let tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  tri.setAttribute("id", id);
  /*
  Although the standard allows commas inplace of spaces, your milage may vary and you many need
  one of these.
  Alternative 1:
    let point_string = String(points[0][0]) + "," + String(points[0][1]) + " " +
                       String(points[1][0]) + "," + String(points[1][1]) + " " +
                       String(points[2][0]) + "," + String(points[2][1]);
  
  Since it's only a triangle I think it's worth just writing out the three pairs
  instead of using a loop.
  Alternative 2:
    for (pair of points){
      point_string += String(pair[0]) + "," + String(pair[1]) + " ";
    }
  */
  tri.setAttribute("points", points);
  return tri;
};

function createSquare(svg, centerPointx, centerPointy, width, height, id, svg){

  const half_width = width / 2;
  const half_height = height / 2;
  const TRIS = ["_top", "_bottom", "_left", "_right"]

  points1 = [
             //right
             [centerPointx  - width + half_width/3, centerPointy],
             //left
             [centerPointx - half_width * 2, centerPointy],
             //top
             [centerPointx - half_width * 2, centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points1))

  points11 = [[centerPointx + half_width/3 - half_width * 2, centerPointy],
             [centerPointx - width, centerPointy],
             [centerPointx - half_width * 2, centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points11))

  points2 = [[centerPointx  - width + half_width/2, centerPointy - half_height/2],
             [centerPointx  - width + half_width/3, centerPointy],
             [centerPointx - half_width * 2, centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points2))

  points22 = [[centerPointx  - width + half_width/2, centerPointy + half_height/2],
             [centerPointx  - width + half_width/3, centerPointy],
             [centerPointx - half_width * 2, centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points22))

  points3 = [[centerPointx  - width + half_width * (2/3), centerPointy - half_height],
             [centerPointx  - width + half_width/2, centerPointy - half_height/2],
             [centerPointx - half_width * 2, centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points3))

  points33 = [[centerPointx  - width + half_width * (2/3), centerPointy + half_height],
              [centerPointx  - width + half_width/2, centerPointy + half_height/2],
              [centerPointx - half_width * 2, centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], points33))

  points4 = [[centerPointx - half_width , centerPointy],
             [centerPointx  - width + half_width/3, centerPointy],
             [centerPointx  - width + half_width/2, centerPointy - half_height/2]];
  svg.appendChild(createTriangle(id + TRIS[2], points4))
  
  points44 = [[centerPointx - half_width , centerPointy],
             [centerPointx  - width + half_width/3, centerPointy],
             [centerPointx  - width + half_width/2, centerPointy + half_height/2]];
  svg.appendChild(createTriangle(id + TRIS[2], points44))

  points5 = [[centerPointx  - width + half_width * (2/3), centerPointy - half_height],
             [centerPointx  - width + half_width/2, centerPointy - half_height/2],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], points5))

  points55 = [[centerPointx  - width + half_width * (2/3), centerPointy + half_height],
             [centerPointx  - width + half_width/2, centerPointy + half_height/2],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], points55))

  points6 = [[centerPointx  - width + half_width * (2/3), centerPointy - half_height],
             [centerPointx  - width + half_width, centerPointy - half_height],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], points6))

  points66 = [[centerPointx  - width + half_width * (2/3), centerPointy + half_height],
             [centerPointx  - width + half_width, centerPointy + half_height],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], points66))
  
  point1 = [
             //right
             [centerPointx - (half_width/3) , centerPointy],
             //left
             [centerPointx, centerPointy],
             //top
             [centerPointx, centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point1))

  point11 = [[centerPointx - half_width/3 , centerPointy],
             [centerPointx, centerPointy],
             [centerPointx , centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point11))

  point2 = [[centerPointx  - half_width/2, centerPointy - half_height/2],
             [centerPointx  -half_width/3, centerPointy],
             [centerPointx , centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point2))

  point22 = [[centerPointx  -half_width/2, centerPointy + half_height/2],
             [centerPointx  - half_width/3, centerPointy],
             [centerPointx , centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point22))

  point3 = [[centerPointx  -half_width * (2/3), centerPointy - half_height],
             [centerPointx  -half_width/2, centerPointy - half_height/2],
             [centerPointx , centerPointy - half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point3))

  point33 = [[centerPointx  - half_width * (2/3), centerPointy + half_height],
              [centerPointx - half_width/2, centerPointy + half_height/2],
              [centerPointx, centerPointy + half_height]];
  svg.appendChild(createTriangle(id + TRIS[2], point33))

  point4 = [[centerPointx - half_width , centerPointy],
             [centerPointx  - half_width/3, centerPointy],
             [centerPointx  - half_width/2, centerPointy - half_height/2]];
  svg.appendChild(createTriangle(id + TRIS[2], point4))
  
  point44 = [[centerPointx - half_width , centerPointy],
             [centerPointx  -  half_width/3, centerPointy],
             [centerPointx  - half_width/2, centerPointy + half_height/2]];
  svg.appendChild(createTriangle(id + TRIS[2], point44))

  point5 = [[centerPointx  -  half_width * (2/3), centerPointy - half_height],
             [centerPointx  -  half_width/2, centerPointy - half_height/2],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], point5))

  point55 = [[centerPointx  -  half_width * (2/3), centerPointy + half_height],
             [centerPointx  -  half_width/2, centerPointy + half_height/2],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], point55))

  point6 = [[centerPointx  -  half_width * (2/3), centerPointy - half_height],
             [centerPointx  -  half_width, centerPointy - half_height],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], point6))

  point66 = [[centerPointx  -  half_width * (2/3), centerPointy + half_height],
             [centerPointx  -  half_width, centerPointy + half_height],
             [centerPointx - half_width , centerPointy]];
  svg.appendChild(createTriangle(id + TRIS[2], point66))
  
};


function createGrid(svg, num_rows, num_cols, square_width, square_height) {
 
  for(let x = 0; x < num_cols; x++) {
    for(let y = 0; y < num_rows; y++) {
      console.log(y)
      createSquare(svg, 
        x * square_width + square_width, 
        y * square_height + square_height, square_width,
        square_height, 
        "test_" + x + "_" + y, svg);
    }
  }
  svg.style.left = 0 + 'px'
  svg.style.top = 0 + 'px'
  console.log(svg)
};

createGrid($grid, 10, 5, 104, 60);



function changeShape(name) {
  var grid = document.getElementById('grid')
  var block = document.getElementById('blocks')
  //shape delete
  for (i = 0; i < grid.childElementCount; i++) {
    grid.children[i].addEventListener('contextmenu', removeShape)
  }
  for (i = 0; i < block.childElementCount; i++) {
    block.children[i].addEventListener('contextmenu', removeShape)
  }
  //cube add
  if (name == 'cube') {
    $shapeCurrent = 'cube'
    for (i = 0; i < grid.childElementCount; i++) {
      grid.children[i].removeEventListener('click', returnFunction)
      grid.children[i].addEventListener('click', addCube)
    }
    for (i = 0; i < block.childElementCount; i++) {
      block.children[i].removeEventListener('click', returnFunction)
      block.children[i].addEventListener('click', addCube)
    }
    returnFunction = addCube
  }

  if (name == 'Triangle1') {
    $shapeCurrent = 'Triangle1'
  }
  if (name == 'Triangle2') {
    $shapeCurrent = 'Triangle2'
  }
  if (name == "Rectangle") {
    $shapeCurrent = 'Rectangle'
    for (i = 0; i < grid.childElementCount; i++) {
      grid.children[i].removeEventListener('click',returnFunction)
      grid.children[i].addEventListener('click', addRec)
    }
   
    for (i = 0; i < block.childElementCount; i++) {
      block.children[i].removeEventListener('click', returnFunction)
      block.children[i].addEventListener('click', addRec)

    }
    returnFunction = addRec
  }
  if (name == "Hexagon") {
    $shapeCurrent = 'Hexagon'
    for (i = 0; i < grid.childElementCount; i++) {
      grid.children[i].removeEventListener('click',returnFunction)
      grid.children[i].addEventListener('click', addHex)
    }
    for (i = 0; i < block.childElementCount; i++) {
      block.children[i].removeEventListener('click', returnFunction)
      block.children[i].addEventListener('click', addHex)
    }
    returnFunction = addHex
  }
  if (name == "Trapezoid") {
    $shapeCurrent = 'Trapezoid'
  }
}

/** METHODS **/

function removeShape(e) {
  e.preventDefault()
  var target = e.target
  target = e.target.parentNode
  let str = target.getAttribute('position')
  number = parseInt(str)
  for (i = 1;i<$cubes.childNodes.length;i++) {
    if ($cubes.childNodes.item(i).getAttribute('position') == number){
      $cubes.removeChild($cubes.childNodes.item(i))
    }
  }
}


function addSpace(index) {
  var $space1 = document.createElement('div')
  $space1.classList.add('space')

  var x1 = index === 0 ? 0 : (index % widthInSpaces) * spaceSize
  var y1 = index === 0 ? 0 : Math.floor(index / widthInSpaces) * spaceSize2

  $space1.style.left = x1 + 'px'
  $space1.style.top = y1 + 'px'

  $grid.appendChild($space1)

  $space1.addEventListener('mouseenter', function(e) { e.target.style.backgroundColor = color })
  $space1.addEventListener('mouseleave', function(e) { e.target.style.backgroundColor = 'transparent' })
}

function addSpace2(index) {
  var $space2 = document.createElement('div')
  $space2.classList.add('space2')

  var x2 = index === 0 ? 0 : (index % widthInSpaces1) * spaceSize3
  var y2 = index === 0 ? 0 : Math.floor(index / widthInSpaces) * spaceSize2

  $space2.style.left = x2 + 'px'
  $space2.style.top = y2 + 'px'

  $grid.appendChild($space2)

  $space2.addEventListener('mouseenter', function(e) { e.target.style.backgroundColor = color })
  $space2.addEventListener('mouseleave', function(e) { e.target.style.backgroundColor = 'transparent' })
}

function addCube(e) {
  e.preventDefault()
  var target = e.target
  var length = 0
  var cubeTranslation = 'translate3d(0, 0, 0)'
  
  var number = $cubes.childElementCount
  if ((e.target.classList[e.target.classList.length-2] == 'face') ||
  e.target.classList[e.target.classList.length -2 ] == 'recFace') {
    target = e.target.parentNode
    let str = target.getAttribute('data-layer')
    length = parseInt(str)
    cubeTranslation = `translate3d(0, 0, ${length}px)`
    var $cube = $cubeModel.cloneNode(true)
    $cube.classList.remove('is--hidden')
    $cube.setAttribute('data-layer', `${length + 50}`)
    $cube.setAttribute('position', `${number}`)
    $cube.style.left = target.style.left
    $cube.style.top = target.style.top
    $cube.style.transform = cubeTranslation
    colorizeCube($cube)
    $cubes.appendChild($cube)
  }

  else if (e.target.classList[e.target.classList.length-1] == 'hexface') {
    target = e.target.parentNode
    target1 = target.parentNode
    let str = target1.getAttribute('data-layer')
    length = parseInt(str)
    cubeTranslation = `translate3d(0, 0, ${length}px)`
    var $cube = $cubeModel.cloneNode(true)
    $cube.classList.remove('is--hidden')
    $cube.setAttribute('data-layer', `${length+52}`)
    $cube.setAttribute('position', `${number}`)
    $cube.style.left = target1.style.left
    $cube.style.top = target1.style.top
    $cube.style.transform = cubeTranslation
    colorizeRec($cube)
    $cubes.appendChild($cube) 
  }
  
  else {
    length = 50
    var $cube = $cubeModel.cloneNode(true)
    $cube.classList.remove('is--hidden')
    $cube.setAttribute('data-layer', `${length}`)
    $cube.setAttribute('position', `${0+number}`)
    $cube.style.left = target.style.left
    $cube.style.top = target.style.top
    $cube.style.transform = cubeTranslation
    colorizeCube($cube)
    $cubes.appendChild($cube)
  }
  
  var block = document.getElementById('blocks')
  for (i = 0; i < block.childElementCount; i++) {
    block.children[i].addEventListener('click', returnFunction)
    block.children[i].addEventListener('contextmenu', removeShape)
  }
}

function addRec(e) {
  e.preventDefault()
  var target = e.target
  var length = 0
  var recTranslation = 'translate3d(0, 0, 0)'
  if (e.target.classList[e.target.classList.length-2] == 'recFace' ||
  e.target.classList[e.target.classList.length-2] == 'face') {
    target = e.target.parentNode
    let str = target.getAttribute('data-layer')
    length = parseInt(str)
    recTranslation = `translate3d(0, 0, ${length}px)`
    var $rec = $recModel.cloneNode(true)
    $rec.classList.remove('is--hidden')
    $rec.setAttribute('data-layer', `${length+30}`)
    $rec.style.left = target.style.left
    $rec.style.top = target.style.top
    $rec.style.transform = recTranslation
    colorizeRec($rec)
    $cubes.appendChild($rec)
  }

  else if (e.target.classList[e.target.classList.length-1] == 'hexface') {
    target = e.target.parentNode
    target1 = target.parentNode
    let str = target1.getAttribute('data-layer')
    length = parseInt(str)
    recTranslation = `translate3d(0, 0, ${length}px)`
    var $rec = $recModel.cloneNode(true)
    $rec.classList.remove('is--hidden')
    $rec.setAttribute('data-layer', `${length+30}`)
    $rec.style.left = target1.style.left
    $rec.style.top = target1.style.top
    $rec.style.transform = recTranslation
    colorizeRec($rec)
    $cubes.appendChild($rec) 
   
  }
  
  else {
    var $rec = $recModel.cloneNode(true)
    $rec.classList.remove('is--hidden')
    $rec.setAttribute('data-layer', `${30}`)
    $rec.style.left = target.style.left
    $rec.style.top = target.style.top
    $rec.style.transform = recTranslation
    colorizeRec($rec)
    $cubes.appendChild($rec)
  }
  
  var block = document.getElementById('blocks')
  for (i = 0; i < block.childElementCount; i++) {
    block.children[i].addEventListener('click', returnFunction)
    block.children[i].addEventListener('click', returnFunction)
  }
}

function addHex(e) {
  e.preventDefault()
  var target = e.target
  var length = 0
  var hexTranslation = 'translate3d(0, 0, 0)'
  if (e.target.classList[e.target.classList.length-2] == 'recFace' ||
  e.target.classList[e.target.classList.length-2] == 'face') {
    target = e.target.parentNode
    let str = target.getAttribute('data-layer')
    length = parseInt(str)
    hexTranslation = `translate3d(0, 0, ${length}px)`
    var $hex = $hexModel.cloneNode(true)
    $hex.classList.remove('is--hidden')
    $hex.setAttribute('data-layer', `${length+52}`)
    $hex.style.left = target.style.left
    $hex.style.top = target.style.top
    $hex.style.transform = hexTranslation
    colorizeHex($hex)
    $cubes.appendChild($hex) 
  }
  else if (e.target.classList[e.target.classList.length-1] == 'hexface') {
    target = e.target.parentNode
    target1 = target.parentNode
    let str = target1.getAttribute('data-layer')
    length = parseInt(str)
    hexTranslation = `translate3d(0, 0, ${length}px)`
    var $hex = $hexModel.cloneNode(true)
    $hex.classList.remove('is--hidden')
    $hex.setAttribute('data-layer', `${length+52}`)
    $hex.style.left = target1.style.left
    $hex.style.top = target1.style.top
    $hex.style.transform = hexTranslation
    colorizeRec($hex)
    $cubes.appendChild($hex) 
  }
  else {
    var $hex = $hexModel.cloneNode(true)
    $hex.classList.remove('is--hidden')
    $hex.setAttribute('data-layer', `${52}`)
    $hex.style.left = target.style.left
    $hex.style.top = target.style.top
    $hex.style.transform = hexTranslation
    colorizeHex($hex)
    $cubes.appendChild($hex)
  }
  var block = document.getElementById('blocks')
  for (i = 0; i < block.childElementCount; i++) {
    block.children[i].addEventListener('click', returnFunction)
  }
}

function colorizeCube($cube) {
  var $faces = Array.from($cube.querySelectorAll('.face'))
  $faces.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
}


function colorizeHex($hex) {
  var $faces = Array.from($hex.querySelectorAll('.hextop'))
  var $faces1 = Array.from($hex.querySelectorAll('.hexbottom'))
  var $faces3 = Array.from($hex.querySelectorAll('.hexside'))
  var $faces4 = Array.from($hex.querySelectorAll('.hexface'))
  var $faces5 = Array.from($hex.querySelectorAll('.hexside-faces'))
  $faces.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
  $faces1.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
  $faces3.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
  $faces4.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
  $faces5.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
}

function colorizeRec($rec) {
  var $faces = Array.from($rec.querySelectorAll('.recFace'))
  var $faces1 = Array.from($rec.querySelectorAll('.recFace1'))
  $faces.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
  $faces1.forEach(function($face, i) {
    $face.style.backgroundColor = getColorNeighbor(color, i)
  })
}

function getRandomColor() {
  var chars = '0123456789abcdef'.split('')
  var hex = '#'

  for (var n = 0; n < 6; n++) {
    var rand = Math.round(Math.random() * (chars.length - 1))
    hex += chars[rand]
  }
  return hex
}

function getColorNeighbor(hex, n) {
  var chars = '0123456789abcdef'.split('')
  var hexArr = hex.replace('#', '').split('')

  var big = (n % 3) * 2
  var small = (n % 2) === 0 ? big + 1 : big - 1
  if (small === -1) small = 5

  var neighborBig = hexArr[big] === 'f' ? 'e' : chars[chars.indexOf(hexArr[big]) + 1]
  var neighborSmall = hexArr[big] === 'f' ? 'e' : chars[chars.indexOf(hexArr[big]) + 1]

  hexArr[big] = neighborBig
  hexArr[small] = neighborSmall

  return '#' + hexArr.join('')
}

function isMobileAt(vw) {
  return vw < 500
}



/** EVENT LISTENERS **/

window.addEventListener('resize', function() {
  if (window.innerWidth === vw) return
  if (isMobileAt(vw) === isMobileAt(window.innerWidth)) return

  vw = window.innerWidth
  var conversion = isMobileAt(vw) ? 3 / 5 : 5 / 3

  var $cubes = Array.from(document.querySelectorAll('.cube'))
  var $recs = Array.from(document.querySelectorAll('.rec'))
  var $hexs = Array.from(document.querySelectorAll('.hex'))
  var $spaces = Array.from(document.querySelectorAll('.space'))
  var $nodes = $cubes.concat($spaces)
  var $nodesRec = $recs.concat($spaces)
  var $nodesHex = $hexs.concat($spaces)
  

  $nodes.forEach(function($node) {
    $node.style.left = parseInt($node.style.left) * conversion + 'px'
    $node.style.top = parseInt($node.style.top) * conversion + 'px'
  })

  $nodesRec.forEach(function($node) {
    $node.style.left = parseInt($node.style.left) * conversion + 'px'
    $node.style.top = parseInt($node.style.top) * conversion + 'px'
  })

  $nodesHex.forEach(function($node) {
    $node.style.left = parseInt($node.style.left) * conversion + 'px'
    $node.style.top = parseInt($node.style.top) * conversion + 'px'
  })
})



$colorize.addEventListener('click', function() {
  color = getRandomColor()
  $colorPreview.style.backgroundColor = color
})



/** RUN **/

var spaceIndex = 0
var spaceIndex1 = 0

while (spaceIndex < totalSpaces) {
  addSpace(spaceIndex)
  spaceIndex ++
}
console.log($grid)
/** 
while (spaceIndex1 < totalSpaces) {
  addSpace2(spaceIndex1)
  spaceIndex1 ++
}
*/


