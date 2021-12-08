const btn = document.querySelector("#button");
const audio = document.querySelector("#audio");
// Get joke functionality, get joke from api and get content from it
const getJoke = async function () {
  const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": "3bf41993d0msh7778086c2033e29p11df6bjsn0503b17ebba1",
    },
  });
  const data = await res.json();
  return `${data.body[0].setup} ${data.body[0].punchline}`;
};
//Add audio src to audio
const displayJoke = async function () {
  const joke = await getJoke();
  const speach = `http://api.voicerss.org/?key=72298efc933846d4a929ea2b48349aea&hl=en-us&src=${joke}`;
  audio.src = speach;
};
//Add joke to audio
displayJoke();

btn.addEventListener("click", () => {
  audio.play();
});
