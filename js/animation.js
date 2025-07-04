// filepath: /Users/varunpareek/Desktop/HTML/htmlLearning/index.html
const roles = ["Frontend Developer", "Mobile App Developer"];
let currentRole = 0;
let charIndex = 0;
let typing = true;
const typewriter = document.getElementById("typewriter-text");

function typeEffect() {
  const text = roles[currentRole];
  if (typing) {
    if (charIndex < text.length) {
      typewriter.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1200); // Pause before erasing
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}
typeEffect();
