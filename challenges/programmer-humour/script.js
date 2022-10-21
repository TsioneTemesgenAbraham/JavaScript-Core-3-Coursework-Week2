var url = `https://xkcd.now.sh/?comic=latest`;

var divImage = document.getElementById("image");

fetch(url)
  .then((response) => response.json())
  //   .then((data) => console.log(data))
  .then((data) => process(data))
  .catch((error) => {
    console.log(error);
  });

function process(data) {
  var image = document.createElement("img");
  var h1 = document.createElement("h1");
  image.src = data.img;
  image.alt = data.alt;
  h1.innerText = data.title;
  divImage.appendChild(h1);
  divImage.appendChild(image);

  //   console.log(image.alt);
}
