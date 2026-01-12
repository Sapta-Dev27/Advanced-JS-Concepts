const URL = "https://api.github.com/users/Sapta-Dev27";

async function fetchGithubProfile() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.log("Error fetching data:", error);
  }
}

async function fetchGithubFollowers() {
  try{
    const response = await fetch(`${URL}/followers`);
    const followers = await response.json();
    console.log(followers);
  }
  catch(error){
    console.log("Error fetching followers:", error);
  }
}

fetchGithubProfile();
fetchGithubFollowers();