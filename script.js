let keys = document.querySelectorAll(".key");
let keys_text = document.querySelectorAll(".keys_text");
let sound = new Audio("./Music/040.wav");
let Music = [
  new Audio("./Music/040.wav"),
  new Audio("./Music/041.wav"),
  new Audio("./Music/042.wav"),
  new Audio("./Music/043.wav"),
  new Audio("./Music/044.wav"),
  new Audio("./Music/045.wav"),
  new Audio("./Music/046.wav"),
  new Audio("./Music/047.wav"),
  new Audio("./Music/048.wav"),
  new Audio("./Music/049.wav"),
  new Audio("./Music/050.wav"),
  new Audio("./Music/051.wav"),
  new Audio("./Music/052.wav"),
  new Audio("./Music/053.wav"),
  new Audio("./Music/054.wav"),
  new Audio("./Music/055.wav"),
  new Audio("./Music/056.wav"),
];

let key_show_hide_button = document.getElementById("key_show_hide_button");

key_show_hide_button.addEventListener("change", function () {
  if (key_show_hide_button.checked) {
    keys_text.forEach((element) => {
      element.style.display = "none";
    });
  } else {
    keys_text.forEach((element) => {
      element.style.display = "block";
    });
  }
});

let volumeControl = document.getElementById("volumeControl");
volumeControl.addEventListener("input", function () {
  Music.forEach((element) => {
    element.volume = volumeControl.value / 100;
  });
});

// Play music using keyboard
window.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    play_Sound(0);
  } else if (event.key === "s" || event.key === "S") {
    play_Sound(1);
  } else if (event.key === "d" || event.key === "D") {
    play_Sound(2);
  } else if (event.key === "f" || event.key === "F") {
    play_Sound(3);
  } else if (event.key === "g" || event.key === "G") {
    play_Sound(4);
  } else if (event.key === "h" || event.key === "H") {
    play_Sound(5);
  } else if (event.key === "j" || event.key === "J") {
    play_Sound(6);
  } else if (event.key === "k" || event.key === "K") {
    play_Sound(7);
  } else if (event.key === "l" || event.key === "L") {
    play_Sound(8);
  } else if (event.key === ";" || event.key === ":") {
    play_Sound(9);
  } else if (event.key === "w" || event.key === "W") {
    play_Sound(10);
  } else if (event.key === "e" || event.key === "e") {
    play_Sound(11);
  } else if (event.key === "t" || event.key === "T") {
    play_Sound(12);
  } else if (event.key === "y" || event.key === "Y") {
    play_Sound(13);
  } else if (event.key === "u" || event.key === "U") {
    play_Sound(14);
  } else if (event.key === "o" || event.key === "O") {
    play_Sound(15);
  } else if (event.key === "p" || event.key === "P") {
    play_Sound(16);
  }
});

function play_Sound(index) {
  Music[index].currentTime = 0;
  Music[index].play();
  keys[index].style.transform = "scale(0.95)";
  keys[index].style.opacity = "0.9";
  setTimeout(() => {
    keys[index].style.transform = "scale(1)";
    keys[index].style.opacity = "1";
  }, 100);
}

// Play music using click
keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    play_Sound(index);
  });
});

function play(notes, tempo) {
  notes.forEach((note, index) => {
    if (note !== -1) {
      setTimeout(() => {
        play_Sound(note);
        // Music[note].play();
      }, index * tempo);
    }
  });
}

const play_button_1 = document.getElementById("play_button_1");
const play_button_2 = document.getElementById("play_button_2");

play_button_1.addEventListener("click", () => {
  // Automatically play Twinkle Twinkle Little Star
  const notes = [0, 0, 7, 7, 9, 9, 7, -1, 5, 5, 4, 4, 2, 2, 0];
  const tempo = 500;
  play(notes, tempo);
});

play_button_2.addEventListener("click", () => {
  // Automatically play Happy Birthday to you
  const notes = [
    0, 0, 2, 0, 5, 4,       // "Happy birthday to you"
    0, 0, 2, 0, 7, 5,       // "Happy birthday to you"
    0, 0, 12, 9, 5, 4, 2,   // "Happy birthday dear [Name]"
    10, 10, 9, 5, 7, 5      // "Happy birthday to you"
    ];
  const tempo = 450;
  play(notes, tempo);
});
