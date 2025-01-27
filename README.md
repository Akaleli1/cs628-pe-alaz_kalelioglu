# cs628-pe-alaz_kalelioglu

Movie List:

Input
The input to the program consists of a list of predefined movie objects, each containing properties for the title, genre, and release year. Additionally, the program takes user interaction as input through a dropdown menu for genre selection and click events on movie cards.

Process
The application processes the input by rendering the list of movies and filtering them based on the genre selected by the user. It uses React hooks such as useState to manage the selected genre and useMemo to compute the filtered list of movies and unique genres. When a movie card is clicked, the application handles the event by displaying an alert with the movie's title.

Output
The output is a dynamic user interface that displays the filtered list of movies as cards. Each card contains the movie's title, genre, and release year. The dropdown menu allows the user to filter movies by genre, and clicking on a card triggers an alert showing the movie's title.