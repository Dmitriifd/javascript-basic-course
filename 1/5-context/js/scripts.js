window.addEventListener('load', function(){
	let some = document.querySelector('.some');
	let other = document.querySelector('.other');

	some.addEventListener('click', changeColor);
	other.addEventListener('mouseenter', changeColor);
});

function changeColor(){
	let colors = ['#ff0', '#f00', '#00f'];
	let num = Math.floor(Math.random() * colors.length);
	this.style.color = colors[num];
}

