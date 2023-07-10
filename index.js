document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const teamStats = document.getElementById('team-stats');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
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
        if (result.response.length > 0) {
          const teams = result.response;
          displayTeamStats(teams);
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

  function displayTeamStats(teams) {
    let htmlContent = '';
    teams.forEach(team => {
      const { country, logo, name } = team;

      htmlContent += `
        <div class="team-stats" data-name="${name}">
          <h2>${name}</h2>
          <p>Country: ${country.name}</p>
          <img src="${logo}" alt="${name} logo">
        </div>
      `;
    });

    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = htmlContent;

    const teamStatsDivs = document.querySelectorAll('.team-stats');
    teamStatsDivs.forEach(div => {
      div.addEventListener('click', () => {
        const selectedTeamName = div.dataset.name;
        const selectedTeam = teams.find(team => team.name === selectedTeamName);
        if (selectedTeam) {
          const selectedTeamHtml = `
            <div class="team-stats" data-name="${selectedTeam.name}">
              <h2>${selectedTeam.name}</h2>
              <p>Country: ${selectedTeam.country.name}</p>
              <img src="${selectedTeam.logo}" alt="${selectedTeam.name} logo">
            </div>
          `;
          responseContainer.innerHTML = selectedTeamHtml;
        }
      });
    });
  }
});
