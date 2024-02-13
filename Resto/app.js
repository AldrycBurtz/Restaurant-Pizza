const slides = [
	{
		"image":"slide1.png",
	},
	{
		"image":"slide2.png",
	},
	{
		"image":"slide3.png",
	}
]

let banner = document.querySelector("#banner")
let position = 0



const image = document.createElement ("img")
image.setAttribute ("src","/images/"+slides[position].image)
console.log(image)
image.setAttribute ("class", "banner-img")


banner.appendChild(image)

  let leftArrow = document.querySelector(".arrow_left");

leftArrow.addEventListener("click", () => {
	position --
	if (position < 0) {
		position = slides.length -1
	}
	image.setAttribute ("src","/images/"+slides[position].image)
})

let rightArrow = document.querySelector(".arrow_right");

rightArrow.addEventListener("click", () => {
	position ++
	if (position >= slides.length) {
		position = 0
	}
	image.setAttribute ("src","/images/"+slides[position].image)
})