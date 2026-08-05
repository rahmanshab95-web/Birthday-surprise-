const photos = [
  "IMG-20251120-WA0048.jpg",
  "IMG-20251121-WA0003.jpg",
  "IMG-20251121-WA0000.jpg",
  "IMG-20251120-WA0036.jpg",
  "IMG-20251120-WA0049.jpg"
];

let current = 0;

const message =
"Happy Birthday Duggu ❤️\n\n" +
"Tu meri life ki sabse special best friend hai. 💖\n" +
"Upper wala tumhe hamesha khush rakhe, har dua qubool ho aur tumhari smile hamesha aise hi rahe. 🌸\n\n" +
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
