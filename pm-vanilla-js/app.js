const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
	const createdDiv = document.createElement("div");
	container.appendChild(createdDiv);
    
	if (!input.value) {
		createdDiv.innerText = "No products Faked yet..";
	} 
    else if ((input.value = 1)) {
		createdDiv.innerText = "1 PRODUCT LOADS HERE";
	} 
    else if ((input.value = 2)) {
		createdDiv.innerText = "2 PRODUCTS LOAD HERE";
	} 
    else if ((input.value = 3)) {
		createdDiv.innerText = "3 PRODUCTS LOAD HERE";
	} 
    else if ((input.value = 4)) {
		createdDiv.innerText = "4 PRODUCTS LOAD HERE";
	} 
    else if ((input.value = 5)) {
		createdDiv.innerText = "5 PRODUCTS LOAD HERE";
	}

	for (const container of document.querySelectorAll(".container")) {
		if (container.querySelectorAll("div").length > 0) {
			container.removeChild(container.firstChild);
		}
	}
});

function getFakeProducts() {
	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((data) => console.log(data));
}

console.log(getFakeProducts());
