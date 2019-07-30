var n = 16;
const box = document.querySelector('#box');
box.setAttribute('style', 'display:flex; flex-wrap: wrap; justify-content: space-evenly');

for(i=0;i<n;i++){
	for(j=0;j<n;j++){
		const container = document.createElement('div');
		container.classList.add('container'); 
		container.setAttribute('style', 'background-color:aquamarine; width:10px; height:10px;border:1px solid black;');    
		box.appendChild(container);
	}
}
// var grid = document.querySelector('.container');
// console.log(grid) because multiple class of same name doesnt work
var inputs = document.getElementsByClassName('container');
for( var i=0; i<inputs.length; i++){
   inputs[i].addEventListener('mouseover', function( event ) {   
		// highlight the mouseover target
		event.target.style.backgroundColor = "orange";
	});
}

