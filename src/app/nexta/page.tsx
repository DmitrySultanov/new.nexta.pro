import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";

interface Props {}

export default function page({}: Props) {
    return <>
        <section className="sectionNextaIntro">
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                    <Box className='videoContainer'>
                        <video autoPlay={true} loop={true} muted={true} poster="/videoframe_5906.png">
                            <source src="/techno.mp4" type="video/mp4"/>
                        </video>
                    </Box>
                    <Grid size={{ md: 12, lg: 10 }} sx={{position: 'relative'}}>
                        <Box className="sectionNextaIntroContent sectionContentTitle">
                            <Typography align="center" variant="h1"><Typography className="span" component="span">Готовая онлайн-система бронирования и управления заказами</Typography></Typography>
                            <Typography align="center" variant="body2"><Typography className="span" component="span">Стартуйте за 20 дней. Наслаждайтесь победой.</Typography></Typography>
                            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                                <Button sx={{margin: '0 .5rem'}} variant="contained" color="warning" size="large">Подключиться</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Box className="picture">
                        <Image src="/MacBookAir.webp" fill={true} alt=""/>
                    </Box>
                </Grid>
            </Container>
        </section>
    </>
}
