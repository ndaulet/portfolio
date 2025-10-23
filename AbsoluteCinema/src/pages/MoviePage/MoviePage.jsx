import {React, useEffect, useState }from 'react'
import classes from './MoviePage.module.css'
import CustomNavbar from '../../components/NavBar/CustomNavbar'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import axios from 'axios'
import {useParams} from 'react-router'

function MoviePage() {
    const [movie, setMovie] = useState()
    const params = useParams()
    console.log(params)

    useEffect(() => {
        if(params?.id) {
            fetchMovieById(params.id)
        }
    }, [params])
    async function fetchMovieById(id) {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            if(response?.status === 200 && response?.data) {
                setMovie(response.data)
            }
        }
        catch(err){
            console.log('error')
        }
    }
    return (
        <>
        <CustomNavbar/>
        {movie &&
            <MovieDetails
                title={movie.title}
                description={movie.overview}
                releaseDate={movie.release_date}
                image={movie.poster_path}
                averageVote={movie.vote_average}
                homepage={movie.homepage}
                originalLanguage={movie.original_language}
                status={movie.status}
                tagline={movie.tagline}
                genres={movie.genres}
            />    
        }
        
        
        </>
    )
}

export default MoviePage
