// 	Name: Ewan Haywood
// 	File: part1JS.js
// 	Date: April 6, 2026
// 	javascript for assignment 4 part 1

// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const places = ["The soup kitchen", "Disneyland", "The White House"];

const events = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

// Partial return random string function

function returnRandomStoryString() {
    const random_character = randomValueFromArray(characters);
    const random_place = randomValueFromArray(places);
    const random_event = randomValueFromArray(events);

    let storyText = 'It was 94 Fahrenheit outside, so ${random_character} went for a walk. When they got to ${random_place}, they stared in horror for a few moments, then ${random_event}. Bob saw the whole thing, but was not surprised — ${random_character} weighs 300 pounds, and it was a hot day.';

    return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}