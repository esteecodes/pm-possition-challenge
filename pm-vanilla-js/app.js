const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", () => {
    let myFilteredArray = [];

	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((items) => {


			console.log(items.data);

			// items.data.forEach(createBox);
			// myFilteredArray.push(data.data);

			// console.log(myFilteredArray)

			if (!input.value ||input.value == 0 ) {
				container.innerHTML = `<p>No products Faked yet..</p>`;
			} 
			
			else if (input.value == 5) {
				const fiveItems = items.data.slice(0, 5);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
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


function clear () {
	for (const container of document.querySelectorAll(".container")) {
		if (container.querySelectorAll("div").length > 0) {
			container.removeChild(container.firstChild);
		}
	}
}
