const octopusFacts = [
  "Octopuses have three hearts: one central heart that pumps blood through the body and two smaller hearts that pump blood to the gills.",
  "They are incredibly intelligent and have been observed using tools and solving complex puzzles.",
  "Octopuses can change their color and texture to blend in with their surroundings, allowing for impressive camouflage.",
  "They have highly developed eyes and can see a wide range of colors, including ultraviolet light.",
  "Octopuses are capable of squeezing through tiny openings due to their soft bodies and lack of bones.",
  "They are excellent escape artists and can use their flexible bodies to fit through small gaps or even unscrew jar lids.",
  "Octopuses have a unique ability to regenerate lost limbs, which is a remarkable feat of regenerative biology.",
  "Some species of octopuses are known for their incredible ability to mimic other marine creatures, including fish, jellyfish, and even coral.",
  "Female octopuses are dedicated mothers. They lay and protect their eggs, often sacrificing their own lives to ensure the survival of their offspring.",
  "Octopuses are part of the cephalopod family, which also includes squid, cuttlefish, and nautiluses.",
];

const button = document.getElementById("generate-random-fact-button");

button.addEventListener("click", () => {
  const randomFactIndex = Math.floor(Math.random() * octopusFacts.length);
  console.log(octopusFacts[randomFactIndex]);
});

const carouselImages = document.querySelector(".content-gallery-images");
const prevButton = document.querySelector(".content-gallery-nav-prev");
const nextButton = document.querySelector(".content-gallery-nav-next");

const imageWidth = carouselImages.clientWidth;

const images = Array.from(carouselImages.children);

prevButton.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    const currentTransform = images[i].style.transform
      .split("")
      .filter((el) => {
        return !isNaN(Number(el)) || el === "-";
      })
      .join("");

    images[i].style.transform = `translateX(${
      Number(imageWidth) + Number(currentTransform)
    }px)`;
  }

  if (images[0].style.transform !== "translateX(0px)") {
    prevButton.style.visibility = "visible";
  } else {
    prevButton.style.visibility = "hidden";
  }

  if (
    images[0].style.transform !==
    `translateX(-${(images.length - 1) * imageWidth}px)`
  ) {
    nextButton.style.visibility = "visible";
  } else {
    nextButton.style.visibility = "hidden";
  }
});

nextButton.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    const currentTransform = images[i].style.transform
      .split("")
      .filter((el) => {
        return !isNaN(Number(el));
      })
      .join("");

    images[i].style.transform = `translateX(-${
      Number(imageWidth) + Number(currentTransform)
    }px)`;
  }

  if (images[0].style.transform !== "translateX(0px)") {
    prevButton.style.visibility = "visible";
  } else {
    prevButton.style.visibility = "hidden";
  }

  if (
    images[0].style.transform !==
    `translateX(-${(images.length - 1) * imageWidth}px)`
  ) {
    nextButton.style.visibility = "visible";
  } else {
    nextButton.style.visibility = "hidden";
  }
});

if (
  !images[0].style.transform ||
  images[0].style.transform === "translateX(0px)"
) {
  prevButton.style.visibility = "hidden";
}

if (
  images[0].style.transform ===
  `translateX(-${(images.length - 1) * imageWidth}px)`
) {
  nextButton.style.visibility = "hidden";
}
