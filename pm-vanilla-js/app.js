const input = document.querySelector("input");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {

	fetch("https://fakerapi.it/api/v1/products")
		.then((response) => response.json())
		.then((items) => {


			// items.data.images.forEach(createThumbs);


			// items.data.images.forEach(el => {
			// 		// const thumbs = el.images
			// 		el(createThumbs);

					// thumbsArr.push(thumbs)
					// console.log(thumbsArr.forEach(el => el.url));

				// })

			if (!input.value || input.value == 0 ) {
				container.innerHTML = `
				<div class="message">
				<p>No products Faked yet..</p>
				</div>
				`;
			} 

			// maybe switch statements for here
			
			else if (input.value == 1) {
				const oneItem = items.data.slice(0, 1);
				oneItem.forEach(createBox);
			} 
			else if (input.value == 2) {
				const twoItems = items.data.slice(0, 2);
				twoItems.forEach(createBox);
			} 
			else if (input.value == 3) {
				const threeItems = items.data.slice(0, 3);
				threeItems.forEach(createBox);
			} 
			else if (input.value == 4) {
				const fourItems = items.data.slice(0, 4);
				fourItems.forEach(createBox);
			} 
			else if (input.value == 5) {
				const fiveItems = items.data.slice(0, 5);
				console.log(fiveItems);
				fiveItems.forEach(createBox);
			} 
			else if (input.value == 6) {
				const sixItems = items.data.slice(0, 6);
				sixItems.forEach(createBox);
			} 
			else if (input.value == 7) {
				const sevenItems = items.data.slice(0, 7);
				sevenItems.forEach(createBox);
			} 
			else if (input.value == 8) {
				const eightItems = items.data.slice(0, 8);
				eightItems.forEach(createBox);
			} 
			else if (input.value == 9) {
				const nineItems = items.data.slice(0, 9);
				nineItems.forEach(createBox);
			} 
			else if (input.value == 10) {
				items.data.forEach(createBox);
			} 

			else {
				container.innerHTML = `
				<div class="message">
				<p>Maximum product amount exceeded...</p>
				<p>We  only supply up to 10 products at this point.</p>
				</div>
				`;
            }
		});

		// const thumbs = items.data.images;
		// thumbs.forEach(createThumbs);
		clear ();
});

// Create boxes
function createBox(items) {
	const box = document.createElement("div");
	

	// const thumbnail = items.images.forEach(image => image.url)
	// console.log(thumbnail);
  
	const { image, name, price, tags } = items;
	// instead of using item.image & item.text

	box.classList.add("box");
	box.innerHTML = `
	<img class="mainImage" src="${image}" alt="artificial product"/>
		<div class="thumbs-wrapper">
		</div>
		<div class="product-info">
		<p class="product-name">"${name}"</p>
		<p class="product-price">"${price}"</p>
		<p class="product-tags">"${tags}"</p>
		</div>
	
	`;
	  container.appendChild(box);

	//   const thumbs = document.createElement("img");
	//   const thumbsWrapper = document.querySelector(".thumbs-wrapper");

	//   thumbs.classList.add("thumb");
	  
	//   thumbsWrapper.appendChild(thumbs);
	//   thumbs.outerHTML = `<img class="thumb-test" src="${image}" />`

  }

  function createThumbs(el) {
	  const thumbs = document.createElement("img");
	  const thumbsWrapper = document.querySelector(".thumbs-wrapper");

	  thumbs.classList.add("thumb");
	  
	  thumbsWrapper.appendChild(thumbs);
	  thumbs.outerHTML = `<img class="thumb-test" src="${image}" />`

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
