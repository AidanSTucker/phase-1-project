document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-btn');
  const teamStats = document.getElementById('team-stats');

  searchButton.addEventListener('click', () => {
    const teamName = searchInput.value;
    searchTeamStats(teamName);
  });

  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const teamName = searchInput.value;
      searchTeamStats(teamName);
    }
  });

  teamStats.addEventListener('mouseover', () => {
    teamStats.style.backgroundColor = 'white';
  });

  async function searchTeamStats(teamName) {
    const apiKey = '4948651216msh7c93eb95da5ba5fp10b6b3jsn2cffd22451d6';
  
    const url = `https://api-basketball.p.rapidapi.com/statistics?season=2019-2020&league=12&team=${teamName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        displayTeamStats(result);
      } else {
        console.log("Error with format");
      }
    } catch (error) {
      console.error(error);
      teamStats.textContent = 'Error retrieving team statistics.';
    }
  }

  function displayTeamStats(stats) {
    teamStats.innerHTML = '';
  
    if (stats.errors) {
      teamStats.textContent = 'Error retrieving team statistics.';
      return;
    }
  
    const teamName = stats.response.team.name;
    const games = stats.response.games;
    const points = stats.response.points;
  
    const list = document.createElement('ul');
  
    const teamNameItem = document.createElement('li');
    teamNameItem.textContent = `Team: ${teamName}`;
  
    const gamesItem = document.createElement('li');
    gamesItem.textContent = `Games: ${games}`;
  
    const pointsItem = document.createElement('li');
    pointsItem.textContent = `Points: ${points}`;
  
    list.appendChild(teamNameItem);
    list.appendChild(gamesItem);
    list.appendChild(pointsItem);
  
    teamStats.appendChild(list);
  }
})