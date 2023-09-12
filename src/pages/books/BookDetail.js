import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from "@mui/x-date-pickers"
import ja from "date-fns/locale/ja"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const BookDetail = ({ books, setBooks }) => {
    const params = useParams()
    const navigate = useNavigate()
    const book = books.find(book => {
        return book.id === parseInt(params.id, 10)
    })
    const [value, setValue] = useState(book.readDate)
    const [memo, setMemo] = useState(book.memo)

    const updateBookInfo = bookId => {
        const newList = books.filter( book => {
            if(book.id === bookId) {
                book.readDate = value
                book.memo = memo
                return book
            } else {
                return book
            }
        } )
        setBooks(newList)
        navigate('/')

    }

    return (<>
        <Container component="section" maxWidth="md"
            sx={{ mt: 5 }}>
            <Card sx={{ height: '100%' }}>
                <Grid container>
                    <Grid item sm={4}>
                        <CardMedia
                            component="img"
                            image={book.image}
                            alt={book.title} />
                    </Grid>
                    <Grid item sm={8}>
                        <CardContent>
                            <Typography sx={{ md: 2, fontSize: '18px' }}>
                                {book.title}
                            </Typography>
                            <Box sx={{ md: 2 }}>
                                読んだ日:
                                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}
                                dateFormats={{ monthAndYear: "yyyy年 MM月" }}>
                                    <DatePicker label="日付" value={value}
                                    maxDate={new Date()}
                                    onChange={(newValue) => {
                                        setValue(newValue)
                                    }}
                                    renderInput={(params) => <TextField {...params} /> }
                                     />
                                </LocalizationProvider>
                            </Box>
                            <Box>
                                感想：<br />
                                <TextField
                                    multiline
                                    fullWidth
                                    rows={8}
                                    value={memo}
                                    onChange={e => setMemo(e.target.value)}/>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item sm={6}>
                                    <Button component={Link} to='/'
                                        color="secondary" variant="contained">一覧に戻る</Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button color="info" variant="contained"
                                    onClick={() => updateBookInfo(book.id)}>保存する</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>

        </Container>
    </>)
}

export default BookDetail