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
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
            return React.createElement('li', {key: this.props.movie.id},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.img})
            );
    },
}); 

var moviesList = movies.map(function(dupa) {
    return React.createElement(Movie, {movie: dupa, key: dupa.id});
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmów'),
        React.createElement('ul', {}, moviesList)
);