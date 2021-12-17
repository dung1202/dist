const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const qwer = document.getElementById("qwer");
// const joke = document.getElementById("joke");
// const punchline = document.getElementById("punchline");
const reload = document.getElementsByClassName('instructions')[0];

let counter = 0;
let jokes = [
  { Q: "What do you call a blind reindeer?", A: "No-eye deer." },
  {
    Q: "Why are mummies such big fans of Christmas?",
    A: "Because they enjoy wrapping.",
  },
  {
    Q: "Why did Santa have to go to the hospital?",
    A: "Because of his poor elf.",
  },
  {
    Q: "What do you get when you cross a snowman with a vampire?",
    A: "Frostbite.",
  },
  {
    Q: "Why did no-one bid for Rudolph and Blitzen on eBay?",
    A: "Because they were two deer.",
  },
  { Q: "What do you call an old snowman?", A: "Water." },
  { Q: "What do snowmen have for breakfast?", A: "Snowflakes!" },
  { Q: "What is white and minty?", A: "A polo bear!" },
  { Q: "Who is a Christmas tree’s favorite singer?", A: "Spruce Springsteen!" },
  {
    Q: "Why don’t penguins fly?",
    A: "Because they’re not tall enough to be pilots!",
  },
];
let num = Math.floor(Math.random() * jokes.length);

cracker.addEventListener("click", () => {
  if (counter < 13) {
    counter++;
  } else {
    // joke.textContent = jokes[num].Q;
    // punchline.textContent = jokes[num].A;
    leftCracker.style.animation = "left 1s forwards";
    rightCracker.style.animation = "right 1s forwards";
    message.style.animation = "title 1s forwards";
    jokeWrap.style.animation = "joke 2s forwards";
    cracker.style.transform = "scaleX(1)";
    reload.innerHTML = ''
    reload.style.cursor= 'pointer'
    qwer.style.backgroundImage = "url('./12345.jpg')"
  }
});
function ok() {
  location.reload();
}
function Loop() {
  window.requestAnimationFrame(Loop);
  if (counter > 0 && counter < 13) {
    cracker.style.transform = `scaleX(${1 + counter / 100})`;
    counter -= 0.05;
  }
}
Loop();
