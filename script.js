document.addEventListener('DOMContentLoaded', function(){
	const today = new Date().getDay();
	const open_time = document.querySelectorAll("li[data-day]");
	console.log(today);
	
	open_time.forEach(item => {
		const days = item.dataset.day.split(",");
		if (days.includes(today.toString())){
			item.querySelector(".red_dot").style.display = "inline-block";
		}
	});

	document.getElementById("plus").addEventListener("click", function(){
		let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, input, textarea");
		elements.forEach(element => {
			let current_size = parseFloat(window.getComputedStyle(element).fontSize);
			if (current_size < 56){
				element.style.fontSize = (current_size + 2) + "px";
			}
		});
	});

	document.getElementById("minus").addEventListener("click", function(){
		let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
		elements.forEach(element => {
			let current_size = parseFloat(window.getComputedStyle(element).fontSize);
			if (current_size > 18){
				element.style.fontSize = (current_size - 2) + "px";
			}
		});
	});

});
