const protein = ["Skinka", "Kyckling", "Kebabkött", "Tonfisk", "Räkor", "Salami", "Bacon"];
const vegetables = ["Lök", "Oliver", "Fefferoni", "Sallad"];
const sauce = ["Vitlökssås", "Kebabsås", "Bearnaisesås", "Starksås", "Hamburgerdressing", "Curry"];

const buttons = document.querySelectorAll(".Button");

buttons.forEach(button => {
	button.addEventListener("click", function () {
		button.classList.add("Button_shrink");
	
		setTimeout(function () {
			button.classList.remove("Button_shrink");
		}, 50);
	});
});



function randomizeIngrediant(array, element) {
	const chosenIndex = Math.floor(Math.random() * array.length);
	const ingrediant = array[chosenIndex];

	document.getElementById(element).textContent = ingrediant;
}

document.getElementById('random_protein').addEventListener('click', function () {
	randomizeIngrediant(protein, 'protein_text');
});

document.getElementById('random_vegetable').addEventListener('click', function () {
	randomizeIngrediant(vegetables, 'vegetable_text');
});

document.getElementById('random_sauce').addEventListener('click', function () {
	randomizeIngrediant(sauce, 'sauce_text');
});