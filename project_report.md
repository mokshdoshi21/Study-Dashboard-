                                                              WPL_MINI PROJECT   
By Moksh Doshi_16010425815
By Parth Chauhan_16010425817 


 Study Dashboard Project Report

1. Project Overview
The Study Dashboard is a comprehensive, private web application designed to help manage study routines, tasks, and notes efficiently. It acts as a personal productivity hub, incorporating features like a Pomodoro timer, hierarchical task tracking, study streaks, and secure note-taking. The project is structured as a full-stack application with a React-based frontend and an Express-based Node.js backend utilizing SQLite for persistent data storage.

 2. Technology Stack
Frontend:
- React (v19): Core library for building the user interface.
- Vite: Build tool and development server, configured for PWA support (`vite-plugin-pwa`).
- Lucide React: Icon library used throughout the UI.
- Vanilla CSS: Styling using custom CSS modules for each component.

 3. Project Architecture

The project is divided into two main parts: a React frontend built with Vite and an Express backend.
studydashboard/

* Express API Server
* SQLite database connection & schema setup
* Local SQLite database file
* Express API routes and server config
* Local storage for image uploads
* React Frontend Source
* UI Components (Cards, Sidebar, etc.)
* Static data (e.g., quotes.json)
* Custom React hooks (useLocalStorage)
* Main application layout and routing
* Global styles and CSS variables
* React entry point
* Static assets (icons, manifest)
* Vite and PWA configuration
* Frontend dependencies and scripts


4. Key Features & Modules
 
1. Lock/Unlock 



2. TO-DO LIST


3. Timetable


4. Notes


5. Exam Countdown(Tracker)


6. Pomodoro Timer


7. Calender


8. Study Analytics


9. Achievements




4.1 Authentication & Security
The dashboard includes a simple, hardcoded privacy wall in `App.jsx`. It requires the user to input the specific author name (**"MOKSH DOSHI"**) and a PIN (**"1234"**) to access the dashboard. The session state is maintained in `localStorage` (`studydash_auth`).

4.2 Progressive Web App (PWA)
The application is configured as a PWA using `vite-plugin-pwa`. It includes a `manifest` inside `vite.config.js` defining the standalone display, theme colors, and application icons, allowing it to be installed natively on desktops and mobile devices.

4.3 UI Components / Cards
The dashboard operates as a Single Page Application (SPA) where navigation switches the active "Card" component:
- TodoCard: Manages daily tasks.
- TimetableCard / CalendarCard: For scheduling and planning.
- NotesCard: A rich note-taking interface that supports image uploads directly to the local server.
- PomodoroCard & CountdownCard: Time management tools to track focused study sessions.
- AnalyticsCard & StreakCard:Tracks study consistency and visualizes progress over time.
- QuoteCard: Displays motivational quotes dynamically.

4.4  Backend API & Database Schema
The Express backend (`server.js`) exposes several REST endpoints that interact with the SQLite database:

* Todos API (`/api/todos`): CRUD operations for tasks.
* Subjects & Chapters API (`/api/subjects`, `/api/chapters`): Manages hierarchical data. Subjects have multiple chapters, and progress can be tracked at a granular level.
* Notes API (`/api/notes`): CRUD operations for notes. Includes a specific endpoint (`/api/notes/upload`) using `multer` to handle image uploads, saving files to the `/uploads` directory and storing the URL in the database.
* Pomodoro API (`/api/pomodoro`): Logs Pomodoro study sessions to track focused time.

5. Conclusion
The Study Dashboard is a well-structured, monolithic full-stack application tailored for personal productivity. Its use of SQLite ensures data is kept locally and persistently without the need for an external database service. The PWA capabilities, combined with a modular React architecture, make it a robust tool for daily study management.

