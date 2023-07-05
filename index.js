// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome!")
})


// DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const playerStats = document.getElementById('player-stats');

// Event listeners
searchBtn.addEventListener('click', searchPlayer); 
//mkae a submit

// Function to search for NBA player stats
function searchPlayer() {
  const playerName = searchInput.value.trim();
  console.log(playerName);

  // Call the API with playerName and process the response
  fetchPlayerStats(playerName);
}

// Function to fetch player stats from the API
async function fetchPlayerStats(playerName) {
  const url = `https://api-nba-v1.p.rapidapi.com/players?name=${playerName}`;
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'X-RapidAPI-Key': '4948651216msh7c93eb95da5ba5fp10b6b3jsn2cffd22451d6',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (data.data && data.data.length > 0) {
      const player = data.data[0];
      displayPlayerStats(player);
    } else {
      playerStats.innerHTML = '<p>No player found.</p>';
    }
  } catch (error) {
    console.error(error);
  }
}

// Function to display player stats on the page
function displayPlayerStats(player) {
  console.log(player);
  playerStats.innerHTML = `
    <h3>Player: ${player.first_name} ${player.last_name}</h3>
    <p>Team: ${player.team.full_name}</p>
    <p>Position: ${player.position}</p>
    <p>Height: ${player.height_feet}'${player.height_inches}</p>
    <p>Weight: ${player.weight_pounds} lbs</p>
  `;
}
