import MovieCard from "../Component/MovieCard";
import { useState } from "react";
import "../Css/Home.css"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "shajahan", release_date: "2001" },
        { id: 2, title: "heyram", release_date: "2000" },
        { id: 3, title: "master", release_date: "2021" },
        { id: 4, title: "billa", release_date: "2007" }
    ];

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("----")

        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="Movies-grid">
                {filteredMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
