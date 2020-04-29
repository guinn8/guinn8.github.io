SQ = 640
SIZE = 26
OFF = 40
let slider;
function setup() {
    createCanvas(SQ, SQ);
	
	
	
	
	
	slider = createSlider(0, 255, 10, 1);
	slider.position(SQ/2, SQ+10);
	slider.style('width', '80px');

	
	
}



function draw() {
	clear();
	drawGrid();
	for(let i=0; i<slider.value() ;i++){
		factorPair(i);
	}
	
		
	
}

function drawGrid(){
	inter = Math.floor((SQ-OFF)/ SIZE)
	lineLen = inter * (SIZE-1)
	for(let i = 0; i < SIZE; i++){
		line(OFF, (SQ-OFF) - (i * inter), OFF + lineLen, (SQ-OFF) - (i * inter));
		textSize(12)
		textAlign(RIGHT)
		text(i, OFF -10, (SQ-OFF) - (i * inter) + 3) //Dont mind the magic numbres
	}
	
	var top = (SQ-OFF) - ((SIZE-1) * inter)
	
	for(let i = 0; i < SIZE; i++){
		line(OFF + (i * inter), top, OFF + (i * inter), SQ-OFF);
		textSize(12)
		textAlign(CENTER, BOTTOM)
		text(i, OFF + (i * inter), SQ-OFF+22) //Dont mind the magic numbres
	}
}

function plot(x,y){
	if(x<SIZE && y < SIZE){
		circle(OFF + (x * inter), (SQ-OFF) - (y * inter), 10)
	}
	
}

function plot(list){
	if(list[0]<SIZE && list[1] < SIZE){
		circle(OFF + (list[0] * inter), (SQ-OFF) - (list[1] * inter), 10)
	}
	
}



function factorPair(n){
	 
	let max = Math.floor(Math.sqrt(n))
	let factors = [] 
	for(i = 2; i <= max; i++){
		if(n % i == 0){
			factors.push([i, n/i])
		}
	}
	
	factors.forEach(ele =>{
		plot(ele);
		plot(ele.reverse());
		return true;
	});
	//return factors
}
