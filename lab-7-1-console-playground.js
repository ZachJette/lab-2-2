// Lab 7.1 — JavaScript Console Playground
// Zach Jette

// --------------------
// 1. Variables
// --------------------
let name = "Zach";
const year = 2026;
let projectsCompleted = 3;

console.log("Name:", name);
console.log("Year:", year);
console.log("Projects completed:", projectsCompleted);

// --------------------
// 2. Basic Math
// --------------------
let pages = 4;
let wordsPerPage = 250;
let totalWords = pages * wordsPerPage;

console.log("Estimated total words:", totalWords);

// --------------------
// 3. Function
// --------------------
function calculatePitchScore(originality, reporting, clarity) {
  return originality + reporting + clarity;
}

let score = calculatePitchScore(8, 7, 9);
console.log("Pitch score:", score);

// --------------------
// 4. If Statement
// --------------------
if (score >= 20) {
  console.log("Strong pitch.");
} else {
  console.log("Needs more development.");
}

// --------------------
// 5. Original Examples
// --------------------

// Example 1: Headline generator
function generateHeadline(topic) {
  return `Reporting on ${topic} in Denver`;
}
console.log(generateHeadline("music and culture"));

// Example 2: Decision logic
let hasPhotos = true;

if (hasPhotos) {
  console.log("Include a featured image.");
} else {
  console.log("Text-only article.");
}

// Example 3: Array + Loop
let userTasks = ["Read work", "Learn about me", "Contact me"];

userTasks.forEach(function(task, index) {
  console.log((index + 1) + ". " + task);
});