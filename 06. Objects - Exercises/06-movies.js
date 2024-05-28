function movies(commands) {
    let movies = [];

    commands.forEach((x) => {
        if (x.includes('addMovie')) {
            addMovie(x, movies);
        } else if (x.includes('directedBy')) {
            addDirector(x, movies);
        } else if (x.includes('onDate')) {
            addDate(x, movies);
        }
    });

    movies.forEach((x) => {
        if (
            x.hasOwnProperty('name') &&
            x.hasOwnProperty('director') &&
            x.hasOwnProperty('date')
        ) {
            console.log(JSON.stringify(x));
        }
    });
}

function addMovie(movie, movies) {
    let movieName = movie.split('addMovie ')[1];
    let movieObj = {
        name: movieName,
    };
    movies.push(movieObj);
}

function addDirector(movie, movies) {
    let [movieName, movieDirector] = movie.split('directedBy');
    movies.forEach((x) => {
        if (x.hasOwnProperty('name')) {
            if (x.name == movieName.trim()) {
                x.director = movieDirector.trim();
            }
        }
    });
}

function addDate(movie, movies) {
    let [movieName, movieDate] = movie.split('onDate');
    movies.forEach((x) => {
        if (x.hasOwnProperty('name')) {
            if (x.name == movieName.trim()) {
                x.date = movieDate.trim();
            }
        }
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );
