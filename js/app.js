//VARIABLES	
let base  = document.querySelector(".base");
let block = document.querySelector(".block");
let colorInput = document.querySelector(".colorInput");
let deleteInput = document.querySelector(".delete");
let cubes = document.querySelectorAll(".cube")
var deleteVal = false  
let color = 'red';

//GENERATE BLOCKS
function blocks(max){
	let blocks = ""
	for(let i = 0;i < max;i++){
		blocks += "<div class='block'></div>"
	}
	return blocks
}

//CHANGE COLORS
function changeColor(){
	color = colorInput.value;
}

//BLOCKS EVENTS	
base.innerHTML = blocks(160);
base.childNodes.forEach(el => {
	el.addEventListener("mouseenter",(e)=>{
		e.target.style.backgroundColor = "#7c7c7c"
	})
	el.addEventListener("mouseleave",(e)=>{
		e.target.style.backgroundColor = "#cecece"
	})

	el.addEventListener("click",(e)=>{
		if(!deleteVal){
			e.target.innerHTML = `
			<div class="cube">
				<div class="top" style='background-color:${color}'></div>
				<div class="down" style='background-color:${color}'></div>
				<div class="left" style='background-color:${color}'></div>
				<div class="right" style='background-color:${color}'></div>
				<div class="front" style='background-color:${color}'></div>
				<div class="back" style='background-color:${color}'></div>
			</div>		`
		}		
	})	
})

//MOVEMENT
let z = 0;
let x = 45;
function left(){
	z -= 10
	base.style.transform = `translate(-50%,-50%) rotateX(${x}deg) rotateZ(${z}deg)`;
}
function right(){
	z += 10
	base.style.transform = `translate(-50%,-50%) rotateX(${x}deg) rotateZ(${z}deg)`;
}
function up(){
	x -= 10
	base.style.transform = `translate(-50%,-50%) rotateX(${x}deg) rotateZ(${z}deg)`;
}
function down(){
	x += 10
	base.style.transform = `translate(-50%,-50%) rotateX(${x}deg) rotateZ(${z}deg)`;
}

//MOVEMENT WITH KEYBOARD
document.addEventListener("keyup",(e)=>{
	if(e.key == "ArrowLeft"){
		left();
	}else if(e.key == "ArrowRight"){
		right();
	}else if(e.key == "ArrowUp"){
		up();
	}else if(e.key == "ArrowDown"){
		down();
	}
})

//DELETE BLOCK
function deleteBlock(){
	deleteVal = deleteInput.checked;
	if(deleteVal){
		document.querySelectorAll(".cube").forEach(el => {
			for(let i = 0;i < el.children.length ; i++){
				el.children[i].onclick = e =>{
					//change color to transparent
					e.target.parentNode.childNodes[1].style.backgroundColor = "transparent";
					e.target.parentNode.childNodes[3].style.backgroundColor = "transparent";
					e.target.parentNode.childNodes[5].style.backgroundColor = "transparent";
					e.target.parentNode.childNodes[7].style.backgroundColor = "transparent";
					e.target.parentNode.childNodes[9].style.backgroundColor = "transparent";
					e.target.parentNode.childNodes[11].style.backgroundColor = "transparent";
					//delete borders
					e.target.parentNode.childNodes[1].style.border = "none";
					e.target.parentNode.childNodes[3].style.border = "none";
					e.target.parentNode.childNodes[5].style.border = "none";
					e.target.parentNode.childNodes[7].style.border = "none";
					e.target.parentNode.childNodes[9].style.border = "none";
					e.target.parentNode.childNodes[11].style.border = "none";
					
				}
			}
		})
	}
}












