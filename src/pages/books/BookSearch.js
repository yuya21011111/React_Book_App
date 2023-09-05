import { useRef, useState } from "react"
import { Button, Container, Fab, TextField, Typography, Box, } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

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
                Image: img ? img.thumbnail : 'images/no_image.jpeg',
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
    </>)
}

export default BookSearch