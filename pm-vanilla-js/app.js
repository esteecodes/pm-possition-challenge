const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", () => {
    let myFilteredArray = [];

	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((data) => {

			data.data.forEach(createBox);
			myFilteredArray.push(data.data)

			// console.log(myFilteredArray)

			if (!input.value) {
				container.innerHTML = `<p>No products Faked yet..</p>`;
			} 
			
			else if (input.value == 1) {
				let name = myFilteredArray
				console.log(myFilteredArray)

				container.innerHTML = `<div>hello</div>`;

			} 
//             else if ((input.value == 2)) {
// 				myFilteredArray.push(data.data[0,1]);
//                 let description = myFilteredArray.map(el => el.description);
//                 createdDiv.innerHTML = description;
//                 console.log(myFilteredArray);
// 			} 
// 			else {
//                 createdDiv.innerText = "No!";
//             }
		});

		clear ();
});

// Create boxes
function createBox(data) {
	const box = document.createElement("div");
  
	const { image, description } = data;
	// instead of using item.image & item.text
  
	box.classList.add("box");
	box.innerHTML = `
	<img src="${image}" alt="${description}"/>
	<p>"${description}"</p>
	`;
	  container.appendChild(box);
  }


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
