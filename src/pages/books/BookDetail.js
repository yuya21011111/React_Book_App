import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const BookDetail = ({ books }) => {
    const params = useParams()
    const book = books.find(book => {
        return book.id === parseInt(params.id, 10)
    })

    return(<>
      <Container component="section" maxWidth="md" 
      sx={{mt:5}}>
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
                        <Typography sx={{ md:2, fontSize: '18px' }}>
                            {book.title}
                        </Typography>
                        <Box sx={{md:2}}>
                            読んだ日
                        </Box>
                        <Box>
                            感想：<br/>
                            <TextField
                            multiline
                            fullWidth
                            rows={8} />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Grid container>
                            <Grid item sm={6}>
                                <Button component={Link} to='/'
                                color="secondary" variant="contained">一覧に戻る</Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button color="info" variant="contained">保存する</Button>
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