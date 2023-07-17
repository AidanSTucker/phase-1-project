document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded");
});

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const teamName = document.getElementById('team-name');
const responseContainer = document.getElementById('response-container');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const teamName = searchInput.value;
  searchTeamName(teamName);
});

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const teamName = searchInput.value;
    searchTeamName(teamName);
  }
});

teamName.addEventListener('mouseover', () => {
  teamName.style.backgroundColor = 'green';
});

async function searchTeamName(teamName) {
  const apiKey = API_KEY;
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
        displayTeamName(teams);
      } else {
        teamName.textContent = 'Team not found.';
      }
    } else {
      console.log('Error with format');
    }
  } catch (error) {
    console.error(error);
  }
}

function displayTeamName(teams) {
  let htmlContent = '';

  teams.forEach(team => {
    const { country, logo, name } = team;

    htmlContent += `
      <div class="team-name" data-name="${name}">
        <h2>${name}</h2>
        <p>Country: ${country.name}</p>
        <img src="${logo}" alt="${name} logo">
      </div>
    `;
  });

  responseContainer.innerHTML = htmlContent;

  const teamNameDivs = document.querySelectorAll('.team-name');
  teamNameDivs.forEach(div => {
    div.addEventListener('click', () => {
      const selectedTeamName = div.dataset.name;
      const selectedTeam = teams.find(team => team.name === selectedTeamName);
      if (selectedTeam) {
        const selectedTeamHtml = `
          <div class="team-name" data-name="${selectedTeam.name}">
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
