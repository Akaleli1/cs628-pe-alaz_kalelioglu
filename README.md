# Recipe Finder

## Project Overview
Recipe Finder is a web application that allows users to search for recipes, view recipe details, and manage their own recipes. Users can add, edit, and delete recipes.

## Input-Output Process Model

### Input
1. **User Actions**: 
   - Searching for recipes by name or ingredients.
   - Viewing details of a specific recipe.
   - Adding a new recipe.
   - Editing an existing recipe.
   - Deleting a recipe.

2. **API Requests**:
   - GET request to fetch recipe details by ID.
   - POST request to add a new recipe.
   - PUT request to update an existing recipe.
   - DELETE request to remove a recipe.

### Process
1. **Fetching Data**:
   - When a user searches for recipes, the application sends a GET request to the server to fetch matching recipes.
   - When a user views a recipe, the application sends a GET request to fetch the recipe details by ID.

2. **Managing Recipes**:
   - When a user adds a new recipe, the application sends a POST request with the recipe data to the server.
   - When a user edits a recipe, the application sends a PUT request with the updated recipe data to the server.
   - When a user deletes a recipe, the application sends a DELETE request to the server to remove the recipe.

### Output
1. **User Interface**:
   - Display a list of recipes matching the search criteria.
   - Show detailed information about a specific recipe, including ingredients and instructions.
   - Provide forms for adding and editing recipes.
   - Confirm deletion of a recipe and update the UI accordingly.

2. **API Responses**:
   - JSON data containing recipe details, lists of recipes, or confirmation messages for add/edit/delete actions.

## Example
### Fetching Recipe Details
- **Input**: User clicks on a recipe to view details.
- **Process**: Application sends a GET request to `/api/recipes/{id}`.
- **Output**: Display recipe details including name, image, ingredients, and instructions.

### Adding a New Recipe
- **Input**: User fills out the form and submits a new recipe.
- **Process**: Application sends a POST request to `/api/recipes` with the recipe data.
- **Output**: Confirmation message and update the recipe list to include the new recipe.



# Cities Application

A React-based web application for managing city information using local storage.

# Input

The application accepts user input through a form interface that collects:
- City name (text)
- Country name (text)
- Population count (number)

These inputs are validated to ensure all fields are filled before submission. The form provides a clean, intuitive interface with proper labeling and input validation.

# Process

The application processes data through several key operations:
1. Data Storage: Converts form inputs into a structured city object with a unique ID
2. Local Storage Management: Stores city data in the browser's localStorage as a JSON string
3. State Management: Uses React's useState hook for form handling and data updates
4. Routing Logic: Implements React Router for navigation between views
5. Data Retrieval: Fetches and parses stored city data for display
6. Component Rendering: Transforms data into visual components based on the current route

# Output

The application produces three main outputs:
1. Cities List View: Displays all stored cities as clickable links
2. City Details View: Shows comprehensive information about a selected city
3. Success Messages: Provides feedback after successful city addition
4. Navigation Elements: Renders navigation links and back buttons for user interaction

The output is presented through a responsive, user-friendly interface styled with Tailwind CSS and enhanced with Lucide React icons for visual appeal.

# Todo List Application Analysis

## Input
The application accepts user input through a text input field where users enter task descriptions. Each input is captured as a string value through React's controlled component pattern using the `useState` hook. The input system also handles form submission events through the `onSubmit` handler and click events for task completion toggling and deletion.

## Process
The core processing occurs through React's state management system. When a task is added, the application generates a unique ID using `crypto.randomUUID()` and creates a new todo object with the input text, ID, and default completion status. The application maintains todos in an array state using the `useState` hook. Task modifications (toggling completion, deletion) are processed through callback functions that manipulate the todo array using immutable state updates via array methods like `map` and `filter`.

## Output
The application renders a dynamic user interface displaying the processed todo items. Each todo item is presented as a card component showing the task text, completion status (indicated by a checkmark icon), and a delete button. The output updates reactively whenever the underlying todo state changes, providing immediate visual feedback for all user actions. Empty states are handled by displaying a message when no todos exist.


# Movie List Application Analysis: 

## Input
The input to the program consists of a list of predefined movie objects, each containing properties for the title, genre, and release year. Additionally, the program takes user interaction as input through a dropdown menu for genre selection and click events on movie cards.

## Process
The application processes the input by rendering the list of movies and filtering them based on the genre selected by the user. It uses React hooks such as useState to manage the selected genre and useMemo to compute the filtered list of movies and unique genres. When a movie card is clicked, the application handles the event by displaying an alert with the movie's title.

## Output
The output is a dynamic user interface that displays the filtered list of movies as cards. Each card contains the movie's title, genre, and release year. The dropdown menu allows the user to filter movies by genre, and clicking on a card triggers an alert showing the movie's title.
