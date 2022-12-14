const search = document.querySelector(".search");
const container = document.querySelector(".container");
const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", () => {

	const box = document.createElement("div");
	box.innerText = "No Products faked yet...";
	container.appendChild(box);
});

function getFakeProducts() {
	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((data) => console.log(data));
}

console.log(getFakeProducts());
