
/*
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmów'),
        React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
*/

// OD NOWA

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'harrypotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'lionking.jpg'
    },
    {
        id: 3,
        title: 'Gra o tron',
        desc: 'Serial fantasy z motywem walki o władze zwaśnionych rodów',
        img: 'gameofthrones.jpg'
    },
    {
        id: 4,
        title: 'Avengers: Infinity War',
        desc: 'film o zmaganiach superbohaterów',
        img: 'avengers.jpg'
    },
    {
        id: 5,
        title: 'Deadpool 2',
        desc: 'Superbohater... trochę inaczej niż zwykle.',
        img: 'deadpool2.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.table.isRequired,
      },

    render: function() {
            return React.createElement('li', {key: this.props.movies.id},
                React.createElement('h2', {}, this.props.movies.title),
                React.createElement('p', {}, this.props.movies.desc),
                React.createElement('img', {src: this.props.movies.img})
            );
    },
}); 

/*
var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmów'),
        React.createElement('ul', {}, movie)
);
*/


var element = React.createElement(Movie, {key: movies.id, title: movies, desc: movies, src: movies.img});
ReactDOM.render(element, document.getElementById('app'));
