import { Link } from "react-router-dom";
import "../components/MovieCard.css";

export default function MovieCard({ movie }) {
  const { title } = movie;

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className="movieCard">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="movieImage"
          alt={title}
          src={imageUrl}
          width={230}
          height={345}
        />
      </Link>

      <div>{title}</div>
    </li>
  );
}
