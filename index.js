//RESUELVE TUS EJERCICIOS AQUI
//DOG API//
//Ejercicio 1//

function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((json) => {
      let dogBreeds = [];
      for (let i in json["message"]) {
        dogBreeds.push(i);
      }
      return dogBreeds;
    })
    .catch((error) => console.log(error));
}
console.log(getAllBreeds)();

//Ejercicio 2//

function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((collection) => collection.message[0])
    .catch((error) => console.log(error));
}

getAllBreeds();

//Ejercicio 3//

function getAllImagesByBreed(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch(() => []);
}

//Ejercicio 4//
function getAllImagesByBreed2(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch(() => []);
}

//Ejerecicio 5//

//GITHUB API (1)//

function getGitHubUserProfile(username) {
  const url = `https://api.github.com/users/${username}`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return {
        name: data.name,
        bio: data.bio,
        avatarUrl: data.avatar_url,
        followers: data.followers,
        following: data.following,
        publicRepos: data.public_repos,
      };
    });
}

//Ejercicio 6//

function printGithubUserProfile(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const img = document.createElement("img");
      img.src = data.avatar_url;
      img.alt = "Imagen de usuario";

      const h1 = document.createElement("h1");
      h1.textContent = data.name;
      const section = document.createElement("section");

      section.appendChild(img);
      section.appendChild(h1);
      document.body.appendChild(section);
    })
    .catch((error) => console.error(error));
}

//Ejercicio 7//

function getAndPrintGitHubUserProfile(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const section = document.createElement("section");
      const img = document.createElement("img");
      img.src = data.avatar_url;
      img.alt = "imagen de usuario";
      const h1 = document.createElement("h1");
      h1.textContent = data.name;
      const p = document.createElement("p");
      p.textContent = `Public repos: ${data.public_repos}`;
      section.appendChild(img);
      section.appendChild(h1);
      section.appendChild(p);
      document.body.appendChild(section);
    })
    .catch((error) => console.error(error));
}

//Ejercicio 8//

const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  getAndPrintGitHubUserProfile(username);
});

//Ejercicio 9//
//GITHUB API(II)//
let userNames = ["Amir1, Amir2"];
function fetchGithubUsers(userNames) {
  const promises = userNames.map((name) =>
    fetch(`https://api.github.com/users/${name}`).then((response) =>
      response.json()
    )
  );
  return Promise.all(promises);
}
