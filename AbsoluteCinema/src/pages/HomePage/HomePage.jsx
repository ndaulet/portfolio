import { Container, Row, Col, Pagination, Spinner } from 'react-bootstrap'
import classes from './HomePage.module.css'
import CustomNavbar from '../../components/NavBar/CustomNavbar'
import MovieCard from '../../components/MovieCard/MovieCard'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router'

function HomePage(){
    const [popularMovies, setPopularMovies] = useState([])
    const [params, setParams] = useSearchParams()
    const [curentPage, setCurrentPage] = useState(false)
    const [loading, setLoading] = useState(+params.get('page')|| 1) 
    

    useEffect(() => {
        fetchPopularMovies(curentPage)
    }, [curentPage])

    async function fetchPopularMovies(page) {
        try{
            setLoading(true)
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
                headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            if(response?.data?.results?.length > 0){
                setPopularMovies(response.data.results)
            }
        }
        catch(err){
            console.log('error')
        }    
        finally{
            setLoading(false)
        }   
    }
    function changePage(number){
        setCurrentPage(number)
        setParams({ page  : number })
    }
    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => changePage(number)} active = {number === curentPage}>
            {number}
            </Pagination.Item>,
        );
    }
    return (
        <>
        <CustomNavbar/>
        <Container fluid="xl" className={classes.cardContainer}>
            <h1 className='mb-4'>Popular Movies</h1>
            {loading
                ?(
                 <div className={classes.spinnerContainer}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>   
                )
               : (
                    <Row xs={1} sm={2} md={3} xl={4} className="g-2">
                        {popularMovies.map((movie, idx) => (
                            <Col key={idx}>
                                <MovieCard
                                    id={movie.id}
                                    description={movie.overview}
                                    language={movie.original_language}
                                    title={movie.original_title}
                                    releaseDate={movie.release_date}
                                    rating={movie.vote_average}
                                    image={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                                />
                                
                            </Col>
                        ))}
                    </Row>
               ) 
            }
            

        <Pagination className='mt-4'>{items}</Pagination>
        </Container>
        </>
    )
}

export default HomePage 