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
    teamStats.style.backgroundColor = 'green';
  });

  async function searchTeamStats(teamName) {
    const apiKey = '4948651216msh7c93eb95da5ba5fp10b6b3jsn2cffd22451d6';

    const url = `https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020&search=${teamName}`;
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

        if (result.response.length > 0) {
          const firstResponse = result.response[0];
          displayTeamStats(firstResponse);
        } else {
          teamStats.textContent = 'Team not found.';
        }
      } else {
        console.log('Error with format');
      }
    } catch (error) {
      console.error(error);
    }
  }

  function displayTeamStats(team) {
    const { country, logo, name } = team;

    const htmlContent = `
      <h2>${name}</h2>
      <p>Country: ${country.name}</p>
      <img src="${logo}" alt="${name} logo">
    `;

    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = htmlContent;
  }
});
