# phase-1-project
NBA Team Name
This code is a fairly simple web application that lets users search for a NBA team, either by the team name or city of origin.

How it Works
Open the NBA Logo Finder in your web browser.
You will see a search box where you can enter the name of an NBA team or even the city they represent.
After entering the team name or city, click the search button or press Enter.
The NBA Logo Finder will fetch data from a public API and retrieve the logo and information of the corresponding team.
The logo and team information will be displayed on the page, allowing you to see and admire the iconic logo that represents the team. Additionally, if you happen to search for a city that has two teams, you can click on the one you want to see, and the other team will be removed.
Features
Logo Display: The NBA Logo Finder provides an interactive and visually appealing way to view the logos of NBA teams. The logos are prominently displayed on the page, allowing you to easily recognize and appreciate the unique design of each team's logo.

Team Information: In addition to the logo, the NBA Logo Finder also presents information about the team. This includes details such as the team's name and country, providing a comprehensive overview of the team's identity.

Search Functionality: The search feature allows you to find specific teams by entering their name or city. The NBA Logo Finder will then retrieve the logo and information of the corresponding team, making it easy to rediscover the logos of your favorite NBA teams or explore new teams based on their location.

HTML Structure
The HTML file contains the basic structure of the web page. It includes a header section with a title, logo, and description. The main section consists of a search input field and a button for searching team statistics. The team statistics are displayed in a div element with the id "team-name". The HTML file also includes a link to an external CSS file and a reference to the JavaScript file.

JavaScript Functionality
The JavaScript code is responsible for handling user interactions and fetching team statistics from an API. It uses the Fetch API to make an asynchronous GET request to the API endpoint. The API requires an API key for authentication, which is included in the request headers.

The code attaches event listeners to the search button and the search input field to handle user interactions. When the search button is clicked or the Enter key is pressed in the input field, the searchTeamName function is called. This function retrieves the team name and or city entered by the user and constructs the API request URL.

If the request is successfull, the content below the search bar will be updated with the teams full name, their country, and a image of their logo. You can search multiple times without having to update the page.

If there is an error with the API request or the response format, error messages are logged to the console and displayed in the "team-name" form.

CSS Styling
The CSS code provides basic styling for the web page. It sets the font family, colors, and padding for different elements. The header section has a dark background color with white text and is aligned using flexbox. The search input, button, and "team-name" form have their own specific styles.

Source Of NBA Logo In Header: 1000LOGOS.net 
(https://1000logos.net/nba-logo/#:~:text=The%20NBA%20logo%2C%20designed%20by,replace%20him%20with%20Kobe%20Bryant.
)

Source Of Team Logo: Public API -> API-Basketball (RapidAPI)