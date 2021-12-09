const btn = document.querySelector("#button");
const audio = document.querySelector("#audio");
const key = "72298efc933846d4a929ea2b48349aea";
// Get joke functionality, get joke from api and get content from it
const getJoke = async function () {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    return `${data.joke}`;
  } catch (err) {
    console.log(err);
  }
};
//Add audio src to audio
const passJoke = async function () {
  try {
    const joke = await getJoke();
    const speach = `http://api.voicerss.org/?key=${key}&hl=en-us&src=${joke}`;
    audio.src = speach;
  } catch (err) {
    console.log(err);
  }
};
//Add joke to audio
passJoke();
// Event listener
btn.addEventListener("click", () => {
  btn.disabled = true;
  audio.play();
});
audio.addEventListener("ended", () => {
  btn.disabled = false;
});
