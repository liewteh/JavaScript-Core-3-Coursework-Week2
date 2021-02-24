fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      return response.json();
    })
    .then(function (humourData) {
      let humour = document.getElementById("humour");

      humour.src = humourData.img;

    })
    .catch(function (error) {
      console.log(error);
    });