# phase-1-project
NBA Team Stats
This code provides a simple web application that allows users to search for NBA team statistics using their team ID. The application is built using HTML, JavaScript, and CSS.

HTML Structure
The HTML file contains the basic structure of the web page. It includes a header section with a title, logo, and description. The main section consists of a search input field and a button for searching team statistics. The team statistics are displayed in a div element with the id "team-stats". The HTML file also includes a link to an external CSS file and a reference to the JavaScript file.

JavaScript Functionality
The JavaScript code is responsible for handling user interactions and fetching team statistics from an API. It uses the Fetch API to make an asynchronous GET request to the API endpoint. The API requires an API key for authentication, which is included in the request headers.

The code attaches event listeners to the search button and the search input field to handle user interactions. When the search button is clicked or the Enter key is pressed in the input field, the searchTeamStats function is called. This function retrieves the team ID entered by the user and constructs the API request URL.

If the API request is successful, the response data is displayed by calling the displayTeamStats function. The team statistics, including the team name, number of games, and points, are extracted from the response and displayed in an unordered list.

If there is an error with the API request or the response format, error messages are logged to the console and displayed in the "team-stats" div.

CSS Styling
The CSS code provides basic styling for the web page. It sets the font family, colors, and padding for different elements. The header section has a dark background color with white text and is aligned using flexbox. The search input, button, and "team-stats" div have their own specific styles.