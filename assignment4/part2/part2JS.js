// Name: Ewan Haywood
// File: part2JS.html
// Date: April 6, 2026
// Assignment 4 part 2 javascript

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic1.jpg", alt: "closeup of a human eye"},
    {filename: "pic2.jpg", alt: "closeup of a rock"},
    {filename: "pic3.jpg", alt: "white and purple flowers"},
    {filename: "pic4.jpg", alt: "wall from a egyptian tomb"},
    {filename: "pic5.jpg", alt: "a moth of a leaf"},  
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
    const newImage = document.createElement("img");
    newImage.src = `${baseURL}${image.filename}`;
    newImage.alt = image.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayedImage);
    newImage.addEventListener("keydown", (e) => {
        if (e.code == "Enter") {
            updateDisplayedImage(e);
        }
    });
}