import { useRef, useState } from "react"
import { Button, Container, Fab, TextField, Typography, Box, Grid, CardMedia, CardContent, CardActions, Card, } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AddIcon from '@mui/icons-material/Add'

const BookSearch = () => {
    const keyword = useRef('')
    const [searchResult, setSearchResult] = useState([])
    const search = async (keyword, e) => {
        e.preventDefault()
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
        const params = { q: `intitle:${keyword.current.value}`, maxResults: 40, }
        const queryParams = new URLSearchParams(params)

        const jsonUrl = baseUrl + queryParams

        const response = await fetch(jsonUrl)
            .then(response => response.json())
        console.log(response.items)

        const newList = [] // 空の配列
        response.items.map(book => {
            const title = book.volumeInfo.title
            const img = book.volumeInfo.imageLinks
            const description = book.volumeInfo.description
            newList.push({
                title: title ? title : 'タイトルはありません。',
                image: img ? img.thumbnail : 'images/no_image.jpeg',
                description: description ? description.slice(0, 40) : '無し'
            })
            console.log(newList)
            setSearchResult(newList)
        })
    }
    return (<>
        <Container component="section" maxWidth="xl">
            <Fab size="medium"
              component={Link}
              to={'/'}
              sx={{ mt:1, ml:1 }}>
            <ArrowBackIcon />
            </Fab>
        </Container>
        <Container component="section" maxWidth="lg">
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
                <Typography component="h1" variant="h5">本を検索</Typography>
                <Box component="form" onSubmit={ e => search(keyword, e) }
                  sx={{ mt: 1 }}>
                    <TextField
                      required
                      fullWidth
                      label="book search"
                      name="search"
                      inputRef={keyword} />
                      <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ my: 2 }}>
                        検索する
                      </Button>
                </Box>
            </Box>
        </Container>
        <Container component="section" maxWidth="lg">
            <Grid container spacing={4}>
                {searchResult.map((card, index) =>(
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%' }}>
                            <Grid container>
                                <Grid item sm={4}>
                                    <CardMedia
                                    component="img"
                                    image={card.image}
                                    alt={card.title}>
                                    </CardMedia>
                                </Grid>
                                <Grid item sm={8}>
                                    <CardContent>
                                        <Typography sx={{fontSize: '16px' }}>
                                            {card.title}
                                            <Typography sx={{fontSize: '14px', md: 1.5 }}
                                            color="text.secondary"
                                            >{card.description}</Typography>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Fab color="primary">
                                            <AddIcon />
                                        </Fab>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>)
}

export default BookSearch