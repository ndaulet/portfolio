import classes from './MovieDetails.module.css'
import { Badge, Button, Container, Stack } from 'react-bootstrap'


function MovieDetails({
    title,
    description,
    tagline,
    homepage,
    originalLanguage,
    releaseDate,
    averageVote,
    status,
    image,
    genres
}   
    ) {
    return (
        <>
        <Container fluid="xl"/>
        <div className={classes.movieContainer}>
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <div className={classes.movieDetails}>
            <div className='mb-2'>
                <Stack direction="horizontal" gap={1}>
                    <Badge pill bg="info">Action</Badge>       
                    <Badge pill bg="info">Comedy</Badge>  
                </Stack>
            </div>    
            <h1>{title}</h1>
            <h2>{tagline}</h2>
            <p>{description}</p>
            <p className={classes.homepage}><b>HomePage: </b> <Button className={classes.homePageLink} variant='link'>{homepage}</Button></p>
            <p><b>Original language: </b><span className={classes.originalLanguage}>{originalLanguage}</span> </p>
            <p><b>Realese date: </b>{releaseDate}</p>
            <p><b>Vote Average:</b> /10 {averageVote}</p>
            <p className={classes.status}><b>Status: <Badge pill bg="success"></Badge> </b>{status}</p>                
            </div>

        </div>
        </>
    )
}

export default MovieDetails
