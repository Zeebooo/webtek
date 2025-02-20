document.addEventListener('DOMContentLoaded', function(){
	const today = new Date().getDay();
	const open_time = document.querySelectorAll("li[data-day]");
	console.log(today);
	
	open_time.forEach(item => {
		const days = item.dataset.day.split(",");
		if (days.includes(today.toString())){
			item.querySelector(".arrow").style.display = "inline-block";
		}
	});
});
