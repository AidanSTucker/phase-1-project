//const API_URL = 

// Fetch data from the API
//async function fetchData() {
 // try {
   // const response = await fetch(API_URL);
    //const data = await response.json();
    //return data;
  //} catch (error) {
   // console.error('Error fetching data:', error);
  //}
//}

// Display the data on the page
function displayData(data) {
  const container = document.getElementById('data-container');

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = item.image;
    card.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const likes = document.createElement('p');
    likes.textContent = `Likes: ${item.likes}`;
    card.appendChild(likes);

    container.appendChild(card);
  });
}

// Event listener for data loading
//window.addEventListener('DOMContentLoaded', async () => {
  //const data = await fetchData();
  //if (data) {
    //displayData(data);
 // }
//});


// DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const playerStats = document.getElementById('player-stats');
const userInfo = document.getElementById('user-info');

// Event listeners
searchBtn.addEventListener('click', searchPlayer);

// Function to search for NBA player stats
function searchPlayer() {
  const playerName = searchInput.value.trim();
  
  // Call the API with playerName and process the response
  // Example: Use fetch or XMLHttpRequest to send a request to the NBA API and retrieve player stats
  
  // Display player stats on the page
  playerStats.innerHTML = `<h3>Player: ${playerName}</h3>`;
  // Example: Update playerStats.innerHTML with the retrieved player stats
}

