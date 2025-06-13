import "../Css/MovieCard.css"
export function MovieCard({ movie }) {
    function favonclick() {
      alert("clicked");
    }
  
    return (
      <div className="Movie-Card">
        <div className="Movie-poster">
          <img src={movie.url} alt={movie.title} />
          <div className="Movie-overlay"></div>
          <button className="favorite-btn" onClick={favonclick}>❤</button>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  