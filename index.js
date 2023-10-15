// Array of JSON objects representing store data
const stores = [
  {
    name: "Store 1",
    rating: 5,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ylYw8ZvJXvVFuj8E7-Q6yAHaE8%26pid%3DApi&f=1&ipt=3bb3306d6468aa39e760da77fe2b4ff4ddf5d7330c6016edfba0d788a250ffe3&ipo=images",
    latitude: 40.7128,
    longitude: -74.0060
  },
  {
    name: "Store 1",
    rating: 4,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ylYw8ZvJXvVFuj8E7-Q6yAHaE8%26pid%3DApi&f=1&ipt=3bb3306d6468aa39e760da77fe2b4ff4ddf5d7330c6016edfba0d788a250ffe3&ipo=images",
    latitude: 40.7128,
    longitude: -74.0060
  },
  {
    name: "Store 1",
    rating: 3,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-gq7kxvzwOJI%2FTlOCwy_O2lI%2FAAAAAAAAFco%2FHX-9tqPZvsE%2Fs1600%2FMcDonald%252527s.png&f=1&nofb=1&ipt=6d88e5caf12a7b14a8121c25d0f32a277b494b503ad15b1eba2a224713edb9bb&ipo=images",
    latitude: 40.7128,
    longitude: -74.0060
  },
  {
    name: "Store 1",
    rating: 1,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ylYw8ZvJXvVFuj8E7-Q6yAHaE8%26pid%3DApi&f=1&ipt=3bb3306d6468aa39e760da77fe2b4ff4ddf5d7330c6016edfba0d788a250ffe3&ipo=images",
    latitude: 40.7128,
    longitude: -74.0060
  },
  // Add more store objects as needed
];

// Function to create star rating elements
function createStarRating(rating) {
  const ratingContainer = document.createElement("div");
  for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.textContent = i <= rating ? "★" : "☆";
      star.classList.add("golden-star"); // Add the golden-star class
      ratingContainer.appendChild(star);
  }
  return ratingContainer;
}

// Function to create a div element for each store
function createStoreDiv(store) {
  const li = document.createElement("li");
  li.setAttribute("class", "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col");

  const anchor = document.createElement("a");
  anchor.href = "#";

  const img = document.createElement("img");
  img.setAttribute("class", "hover:grow hover:shadow-lg");
  img.src = store.imageUrl;

  const divFlex = document.createElement("div");
  divFlex.setAttribute("class", "pt-3 flex items-center justify-between");

  const pName = document.createElement("p");
  pName.className = "";
  pName.textContent = store.name;
  const mapUrl = `https://maps.google.com/?q=${store.latitude},${store.longitude}`;
  const navigationLink = document.createElement("a");
  navigationLink.textContent = "Map link"
  navigationLink.setAttribute("href", mapUrl)
  navigationLink.target = "_blank"; // Open link in a new tab
  
  // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // svg.className = "h-6 w-6 fill-current text-gray-500 hover:text-black";
  // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  // svg.setAttribute("viewBox", "0 0 24 24");

  // const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // path.setAttribute("d", "M12,4.595 ...");

  // svg.appendChild(path);

  const storeRating = createStarRating(store.rating);

  anchor.appendChild(img);
  divFlex.appendChild(pName);
  divFlex.appendChild(navigationLink);
  anchor.appendChild(divFlex);
  anchor.appendChild(storeRating);
  li.appendChild(anchor);

  return li;
}

// Function to insert store divs after the <!--Here--> comment
function insertStoreDivs() {
  const ul = document.getElementById('shops');
  // const li = document.createElement('li');
  ul.classList.add("container");
  ul.classList.add("mx-auto");
  ul.classList.add("flex");
  ul.classList.add("items-center");
  ul.classList.add("flex-wrap");
  ul.classList.add("pt-4");
  ul.classList.add("pb-12")
  if (ul) {
    stores.forEach((store) => {
      const storeDiv = createStoreDiv(store);
      ul.appendChild(storeDiv);
    });
  }
}

// Call the function to insert store divs when the page loads
window.addEventListener("load", (e) => {insertStoreDivs()});
