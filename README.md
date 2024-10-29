This project is a **Simple ToDo App** built with **React** and **Material-UI** that fetches, displays, and allows users to view the details of various to-do items. This project is designed as an introduction to React components, Material-UI components, API data fetching, and state management using React hooks.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Demo

Here’s a quick preview of the app:

### First Screen

![First Screen](https://github.com/user-attachments/assets/c97578af-b3e3-4285-a114-42cb58026956)

### Todo List

![Todo List](https://github.com/user-attachments/assets/fa0f5f2d-f452-4af4-8d9d-1673c41e376d)

### Todo Details

![Todo Details](https://github.com/user-attachments/assets/73fd6477-2281-48fe-aa2d-9a5bfaf1fb8b)

## Features

- Fetches to-do data from an API
- Displays a list of to-do items with Material-UI cards
- Allows users to click on a to-do item to view more details in a dialog
- Simple loading animation using Material-UI's Skeleton component
- Responsive and styled with Material-UI

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that provides a faster and leaner development experience for React applications.
- **Material-UI**: A popular React UI framework for implementing Material Design.
- **CSS Modules**: Scoped and modular styling.
- **JavaScript Fetch API**: For making HTTP requests to fetch to-do data from a remote API.

## Techniques

- **React Hooks for State Management and Side Effects**

  - Utilized `useState` to manage component states, including `loading`, `todoList`, `Details`, and `openDialog`.
  - Used `useEffect` to fetch data upon component mount, ensuring data is ready before rendering.

- **API Data Fetching**

  - Data is fetched from the API endpoint `https://dummyjson.com/todos` using the `fetch` API. Results are displayed within the component.
  - Asynchronous functions and `try...catch` blocks manage data retrieval and error handling efficiently.

- **Material-UI Components for Styling**

  - _Material-UI Card_: Used to render each to-do item in the list, providing a responsive and clean card layout.
  - _Material-UI Dialog_: Displays detailed information about a to-do item, opening when the "Details" button is clicked.
  - _Material-UI Skeleton_: A skeleton loader displays a loading animation while data is being fetched.

- **CSS Modules for Scoped Styles**

  - Scoped styles are organized in `styles.module.css`, ensuring that each component’s styles are isolated, reducing conflicts and simplifying maintenance.

- **Props Drilling and Component Communication**
  - `TodoItem` and `TodoDetails` components receive props from `App.js` for event handling and data rendering.
  - The `TodoItem` component triggers a function from `App.js` to fetch and display details for a specific to-do item in a dialog.
