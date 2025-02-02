# Todo List Application Analysis

## Input
The application accepts user input through a text input field where users enter task descriptions. Each input is captured as a string value through React's controlled component pattern using the `useState` hook. The input system also handles form submission events through the `onSubmit` handler and click events for task completion toggling and deletion.

## Process
The core processing occurs through React's state management system. When a task is added, the application generates a unique ID using `crypto.randomUUID()` and creates a new todo object with the input text, ID, and default completion status. The application maintains todos in an array state using the `useState` hook. Task modifications (toggling completion, deletion) are processed through callback functions that manipulate the todo array using immutable state updates via array methods like `map` and `filter`.

## Output
The application renders a dynamic user interface displaying the processed todo items. Each todo item is presented as a card component showing the task text, completion status (indicated by a checkmark icon), and a delete button. The output updates reactively whenever the underlying todo state changes, providing immediate visual feedback for all user actions. Empty states are handled by displaying a message when no todos exist.


# Movie List Application Analysis: 


Input
The input to the program consists of a list of predefined movie objects, each containing properties for the title, genre, and release year. Additionally, the program takes user interaction as input through a dropdown menu for genre selection and click events on movie cards.

Process
The application processes the input by rendering the list of movies and filtering them based on the genre selected by the user. It uses React hooks such as useState to manage the selected genre and useMemo to compute the filtered list of movies and unique genres. When a movie card is clicked, the application handles the event by displaying an alert with the movie's title.

Output
The output is a dynamic user interface that displays the filtered list of movies as cards. Each card contains the movie's title, genre, and release year. The dropdown menu allows the user to filter movies by genre, and clicking on a card triggers an alert showing the movie's title.
