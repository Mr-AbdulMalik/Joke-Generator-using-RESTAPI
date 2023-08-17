const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("joke");

const API_KEY = "b00681hcm2RUrPyfqfjj+w==gwS9VF6hyOTCrbgg";
const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": API_KEY
    }
};


getJokeBtn.addEventListener("click", async () => {
    try {
        jokeText.style.color = "darkgreen";
        jokeText.innerText = "Updating...";
        getJokeBtn.disabled = true;
        getJokeBtn.innerText = "Loading..."
        const response = await fetch(API_URL, options);
        const data = await response.json();
        getJokeBtn.disabled = false;
        getJokeBtn.innerText = "Tell me a joke"
        jokeText.innerText = data[0].joke;
    } catch (error) {
        jokeText.innerText = "An error happened, try again later";
        jokeText.style.color = "red";
        getJokeBtn.disabled = false;
        getJokeBtn.innerText = "Tell me a joke"
        console.log(error);
    }
});