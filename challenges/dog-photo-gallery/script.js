const nextPhotoBtn = document.getElementById("btn");
let ul = document.getElementById("unorderedList");

nextPhotoBtn.addEventListener("click", () => {
  ul.innerHTML = "";
  getDogPhoto();
});

function getDogPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (dogPhotoURL) {
      let list = document.createElement("li");
      let dogImg = document.createElement("img");

      dogImg.src = dogPhotoURL.message;

      list.appendChild(dogImg);
      ul.appendChild(list);
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.onload = getDogPhoto;
