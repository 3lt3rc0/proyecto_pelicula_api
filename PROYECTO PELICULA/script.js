function showMovieDetails(title) {
    alert("Detalles de la película: " + title);
}

// Datos de películas reales
const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://pics.filmaffinity.com/Cadena_perpetua-576140557-large.jpg"
    },
    {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        poster: "images/el_padrino.jpg"
    },
    {
        title: "Avatar",
        year: 1972,
        director: "Francis Ford Coppola",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        poster: "images/avatar.jpg"
    },
    {
        title: "Spìderman",
        year: 1972,
        director: "Francis Ford Coppola",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        poster: "images/spiderman.jpg"
    },
    {
        title: "Transformer",
        year: 1972,
        director: "Francis Ford Coppola",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        poster: "images/transformer.jpg"
    }
    // Agrega más películas si lo deseas
];

// Función para renderizar películas en la página
function renderMovies() {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = ''; // Limpiar la lista antes de renderizar

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="Poster de ${movie.title}">
            <h2>${movie.title}</h2>
            <p>Año: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Descripción: ${movie.description}</p>
        `;
        moviesList.appendChild(movieDiv);
    });
}

// Llamar a la función para renderizar las películas al cargar la página
document.addEventListener('DOMContentLoaded', renderMovies);