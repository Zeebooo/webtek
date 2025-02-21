document.addEventListener('DOMContentLoaded', function(){
	const today = new Date().getDay();
	const open_time = document.querySelectorAll("li[data-day]");
	const text_sizes = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, input, textarea");
	let originalSizes = {};  
	
	text_sizes.forEach(element => {
		originalSizes[element] = window.getComputedStyle(element).fontSize;
	});

	document.getElementById("reset").addEventListener("click", function(){
		text_sizes.forEach(element => {
			if (originalSizes[element]) { 
				element.style.fontSize = originalSizes[element]; 
			}
		});
	});
	
	
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



	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$("#scroll_top").fadeIn();
		}
		else {
			$("#scroll_top").fadeOut();
		}
	});

	$("#scroll_top").click(function(){
		$("html,body").animate({scrollTop: 0}, 500)
	});


	$("#submit_button").click(function(){
		var name = $("#name").val();
		var mail = $("#mail").val();
		var number = $("#number").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		let arr = [name, mail, number, subject, message]
		var labels = ["Namn", "Mejladress", "Telefonnummer", "Ämne", "Meddelande"];

		for(let i = 0; i <= arr.length; i++){
			if(arr[i] == ""){
				alert(labels[i] + " måste fyllas i!");
				return false;
			}
		}

		if(!$("#confirm").prop("checked")) {
			alert("Du måste godkänna villkoren!")
			return false;
		}

		alert("Formuläret skickades!");

	});

});
