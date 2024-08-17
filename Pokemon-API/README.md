# Pokémon Fetcher App

This is a simple React app that fetches data from the Pokémon API (`pokeapi.co`) and displays information about a Pokémon based on user input. The app allows users to enter a Pokémon name, fetch details about that Pokémon, and display its name and image.

## Features

- Enter the name of any Pokémon to fetch its details.
- Display the name and sprite (image) of the Pokémon.
- Simple error handling for invalid Pokémon names.

## Usage

1. Enter the name of a Pokémon in the text input.
2. Click the `Submit` button.
3. The app will fetch the data for the entered Pokémon and display its name and image if found.
4. If the Pokémon is not found, the console will show an error.

### Example

If you enter "pikachu" and click "Submit", the app will display:

- **Name:** Pikachu
- **Image:** (Sprite from the Pokémon API)

## API

This app uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

The fetch URL format is : https://pokeapi.co/api/v2/pokemon/{pokemon-name}


Where `{pokemon-name}` is the name of the Pokémon entered by the user (in lowercase).

## Code Overview

### `App.js`

- The main component of the app.
- Uses `useState` to manage Pokémon name input and store the fetched Pokémon data.
- Handles form submission and fetch requests.
- Displays the Pokémon name and sprite after fetching.

### State Variables

- **pokemon**: Stores the input value of the Pokémon name.
- **pokemonObject**: Stores the data fetched from the API for the Pokémon.

### Functions

- **handleSubmit(e)**: Prevents form submission (default action).
- **handleClick()**: Fetches Pokémon data from the API and sets it in the state.

## Technologies Used

- **React**: Front-end library to build the user interface.
- **PokéAPI**: Public API to fetch Pokémon details.






