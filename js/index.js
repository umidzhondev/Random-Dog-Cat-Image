const catBtn = document.querySelector("#cat__btn");
const dogBtn = document.querySelector("#dog__btn");
const catResult = document.querySelector(".cat__result");
const dogResult = document.querySelector(".dog__result");

const catData = "https://aws.random.cat/meow";
const dogData = "https://random.dog/woof.json";

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);
dogBtn

function getRandomCat() {
  fetch(catData)
    .then((javob) => javob.json())
    .then((data) => {
      catResult.innerHTML = `<img src="${data.file}" alt="CatPhoto" />`;
    });
}

function getRandomDog() {
  fetch(dogData)
    .then((javob) => javob.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        dogResult.innerHTML = `<video src="${data.url}" autoplay alt="DogPhoto" />`;
      } else {
        dogResult.innerHTML = `<img src="${data.url}" alt="DogPhoto" />`;
      }
    });
}
