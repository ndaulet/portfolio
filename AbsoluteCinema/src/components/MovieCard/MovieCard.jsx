import classes from './MovieCard.module.css'
import { Button, Badge, Stack} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import placeholder from '../../assets/images/placeholder.png'
import { StarFillIcon } from '../../shared/Icons';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function MovieCard({language, title, description, releaseDate, rating, image}) {
  const [imageLoading, setImageLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    testImage(image)
  }, [image])

  function testImage(someImage) {
    setImageLoading(true)
    const img = new Image()
    img.src = someImage
    img.onload = () => {
      setImageLoading(false)
    }
  }

  function goToMoviePage() {
    navigate('/movie')
  }

    return(
        <>
            <Card >
      <Card.Img variant="top" src={imageLoading ? placeholder : image} className = {classes.cardPoster}/>
      <Card.Body>
      <Card.Text>
        <Badge bg="light" text="dark" className={classes.language}>{language}</Badge>
      </Card.Text>     
      <div className='mb-2'>
      <Stack direction="horizontal" gap={1}>
        <Badge pill bg="info">Action</Badge>       
        <Badge pill bg="info">Comedy</Badge>  
        </Stack>
        </div>    
        <Card.Title className={classes.title}>{title}</Card.Title>
        <Card.Text className={classes.description}>
          {description}
        </Card.Text>
        <Card.Text>
          <b>Release date:{releaseDate}</b> 2025
        </Card.Text>
        <div className= ' mb-3 '>
            <Stack direction='horizontal'gap={1}>
                <StarFillIcon/>{rating}/10
            </Stack>
        </div>
        <Button variant="primary" onClick={goToMoviePage}>See more</Button>
      </Card.Body>
    </Card>
        </>
    )
    
}

export default MovieCard