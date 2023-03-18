const memeContainer = document.getElementById("meme-container");
const newMemeBtn = document.getElementById("new-meme-btn");

// Add your memes and jokes here
const memes = [
	{
		image: "",
		caption: "Pun Joke 1"
	},
	{
		image: "meme2.jpg",
		caption: "Dad Joke 1"
	},
	{
		image: "meme3.jpg",
		caption: "Pop Culture Joke 1"
	},
	{
		image: "meme4.jpg",
		caption: "Animal Joke 1"
	},
	{
		image: "meme5.jpg",
		caption: "Random Joke 1"
	},
];

function generateMeme() {
	// Choose a random meme from the array
	const randomIndex = Math.floor(Math.random() * memes.length);
	const randomMeme = memes[randomIndex];

	// Create a new meme element and add it to the container
	const memeElement = document.createElement("div");
	memeElement.classList.add("meme");
	memeElement.innerHTML = `
		<img src="${randomMeme.image}" alt="${randomMeme.caption}">
		<p>${randomMeme.caption}</p>
	`;
	memeContainer.appendChild(memeElement);
}

newMemeBtn.addEventListener("click", generateMeme);
