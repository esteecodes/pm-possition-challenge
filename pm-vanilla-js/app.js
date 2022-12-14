const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", () => {
    let myFilteredArray = [];
	const createdDiv = document.createElement("div");
	container.appendChild(createdDiv);

	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((data) => {
			if (!input.value) {
				createdDiv.innerText = "No products Faked yet..";
				myFilteredArray = [];
			} else if ((input.value = 1)) {
				myFilteredArray.push(data.data[0]);
                let description = myFilteredArray.map(el => el.description);
                let image = myFilteredArray.map(el => el.image);
                createdDiv.innerHTML = `${description} <img src="${image}" alt="">`;
			} 
            // else if ((input.value = 2)) {
			// 	myFilteredArray.push(data.data[0]);
			// 	myFilteredArray.push(data.data[1]);
            //     let description = myFilteredArray.map(el => el.description);
            //     // createdDiv.innerHTML = description;
            //     console.log(myFilteredArray);
			// } else {
            //     createdDiv.innerText = "No!";
            // }
		});

		clear ();

	// if (!input.value) {
	// 	createdDiv.innerText = "No products Faked yet..";
	// 	myFilteredArray = [];
	// } else if ((input.value = 1)) {
	// 	createdDiv.innerHTML = `<div>${myFilteredArray}</div>`;
	// } else {
	// 	createdDiv.innerHTML = `<div>${myFilteredArray}</div>`;
	// }

	// for (const container of document.querySelectorAll(".container")) {
	// 	if (container.querySelectorAll("div").length > 0) {
	// 		container.removeChild(container.firstChild);
	// 	}
	// }
});

function clear () {
	for (const container of document.querySelectorAll(".container")) {
		if (container.querySelectorAll("div").length > 0) {
			container.removeChild(container.firstChild);
		}
	}
}

// function getFakeProducts() {
// 	fetch("https://fakerapi.it/api/v1/products")
// 		.then((response) => response.json())
// 		.then((data) =>
//         myFilteredArray.push(data)
//         );
//         console.log(myFilteredArray)
// }

// console.log(getFakeProducts());
