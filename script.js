// Create grids 
var n = window.prompt("How many squares per side", "15");
width = height = 300
const box = document.querySelector('#box');
box.setAttribute('style', 'display:flex; flex-wrap: wrap; justify-content: space-evenly');
box.style.width = width + 'px';
box.style.height = height + 'px';

width = Math.floor(300/n);
height = width;
console.log(width)
for(i=0;i<n;i++){
	for(j=0;j<n;j++){
		const container = document.createElement('div');
		container.classList.add('container'); 
		container.style.width = width + 'px';
		container.style.height = height + 'px';
		container.style.backgroundColor = 'white'; 
		box.appendChild(container);
	}
}
// var grid = document.querySelector('.container');
// multiple class of same name doesnt work
var inputs = document.getElementsByClassName('container');
for( var i=0; i<inputs.length; i++){
   inputs[i].addEventListener('mouseover', function( event ) {   
		// highlight the mouseover target
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var col = "rgb(" + r + "," + g + "," + b + ")";
		event.target.style.backgroundColor = col;
	});
}

// Refresh on button click
var btn = document.querySelector('#clearbtn');
btn.addEventListener("click", function(){
	// window.alert();
	window.location.reload();
	
});