# Movie Card 🎞️  

A web application built using React.js that displays movies as cards, making it easy to browse through movie entries — a simple movie-card UI project for showcasing (and possibly favoriting) movies.

## 🧩 What it does  

- Renders a list of movies as individual “movie cards,” each showing relevant details (title, poster/image, etc.).  
- Provides a nice UI layout with navigation (e.g. home page, favorites) and card-based display.  
- Uses React components for modular structure: separate components for cards, navigation bar, homepage, favorites, etc.  
- Good for practising React fundamentals: component structure, props, state (if used), CSS styling, and UI layout.

## 📂 Project Structure  

movie_card/
├── public/ / assets/ # (if any public/static assets)
├── src/ # React source code
│ ├── App.jsx # Main app component
│ ├── Homepage.jsx # Homepage component listing movies
│ ├── MovieCard.jsx # Component for individual movie card
│ ├── Favorites.jsx # (If there is a favorites section)
│ ├── NavBar.jsx # Navigation bar component
│ ├── CSS files # Style sheets (App.css, MovieCard.css, Home.css, etc.)
│ └── main.jsx # React render entry point
└── README.md # Project description & instructions

bash
Copy code

(*If your actual file/dir names differ — update accordingly.*)

## 🛠️ Installation & Setup  

Assuming you have Node.js and npm installed:

``bash
git clone https://github.com/dhevprashath/movie_card.git
cd movie_card
npm install
npm start       # or as configured in package.json
This will start the React development server.
Open the app in your browser (e.g. http://localhost:3000) to view the movie cards UI.



![Screenshot 2025-06-13 233936](https://github.com/user-attachments/assets/efbbaec7-e584-4901-b0b9-b91acffa0097)

![Screenshot 2025-06-13 233959](https://github.com/user-attachments/assets/7744424d-d6e8-44d6-9eb5-26137fc4e088)
