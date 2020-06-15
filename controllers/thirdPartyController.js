module.exports = {
    random: (req, res) => {
        const url = 'https://randomuser.me/api/?results=20'
        const fetch = require('node-fetch')
        fetch(url)
        .then(val => {
            return val.json()
        }).then(val => {
            const users = val.results
            users.sort((a,b) => {
                return a.name.last < b.name.last ? -1 : 1
            })
            res.render('main/random', {users})
        })
    },

    movies: (req, res) => {
        const apiKey = process.env.MOVIES_API_KEY
        const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey
        const posterBasePath = 'https://image.tmdb.org/t/p/w200'
        const fetch = require('node-fetch')
        fetch(url)
        .then(val => {
            return val.json()
        }).then(val => {
            const movies = val.results
            res.render('main/movies', {movies, posterBasePath})
        })
    }
}