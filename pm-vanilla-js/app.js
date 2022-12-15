const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", () => {

	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((items) => {

			if (!input.value ||input.value == 0 ) {
				container.innerHTML = `
				<div class="message">
				<p>No products Faked yet..</p>
				</div>
				`;
			} 
			
			else if (input.value == 1) {
				const fiveItems = items.data.slice(0, 1);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 
			else if (input.value == 2) {
				const fiveItems = items.data.slice(0, 2);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 
			else if (input.value == 3) {
				const fiveItems = items.data.slice(0, 3);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 
			else if (input.value == 4) {
				const fiveItems = items.data.slice(0, 4);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 
			else if (input.value == 5) {
				const fiveItems = items.data.slice(0, 5);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 

			else {
				container.innerHTML = `
				<div class="message">
				<p>Maximum product amount exceeded...</p>
				<p>Currently we can only supply up to 5 products.</p>
				</div>
				`;
            }
		});

		clear ();
});

// Create boxes
function createBox(items) {
	const box = document.createElement("div");
  
	const { image, description } = items;
	// instead of using item.image & item.text
  
	box.classList.add("box");
	box.innerHTML = `
	<img src="${image}" alt="${description}"/>
	<p>"${description}"</p>
	`;
	  container.appendChild(box);
  }

// Clear loaded products
function clear () {
	const loadedProducts = container.querySelectorAll("div");

	if (loadedProducts.length > 0 ) {
		loadedProducts.forEach( (product) => {
			product.remove();
		})
	}	
}
