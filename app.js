const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });

  // Animate Links
};

navSlide();

// Color for each letter of my name

// const logo = document.querySelector(".navbar h1");
// const split = logo.textContent.split(" ");
// console.log(split);

// logo.textContent = split;
// for (let i = 0; i < logo.textContent.length; i++) {
//   console.log(logo.textContent[i]);
// }

// Cut the personal statement

const statement = document.querySelector(".personal-statement .container");
const statement_paragraph = document.querySelector(".personal-statement p");
const btn = document.createElement("a");
btn.className = "btn";
btn.textContent = "Read More";
btn.href = "journey.html";
const icon = document.createElement("i");
icon.className = "fas fa-arrow-right";
btn.append(icon);
const spliceStatement = statement_paragraph.textContent
  .slice(0, 150)
  .replace("ate", "....");
statement.append(btn);

console.log(spliceStatement);
statement_paragraph.textContent = spliceStatement;
