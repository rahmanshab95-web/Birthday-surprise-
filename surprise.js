const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

let current = 0;

const message =
"Happy Birthday Duggu ❤️\n\n" +
"Tu meri life ki sabse special best friend hai. 💖\n" +
"Allah tumhe hamesha khush rakhe, har dua qubool ho aur tumhari smile hamesha aise hi rahe. 🌸\n\n" +
"Many Many Happy Returns of the Day! 🎂✨";

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typing").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

window.onload = function () {
  typeWriter();
};

function nextPhoto() {
  current++;
  if (current >= photos.length) current = 0;
  document.getElementById("photo").src = photos[current];
}
