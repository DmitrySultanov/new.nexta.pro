import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import SyncIcon from '@mui/icons-material/Sync';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import HotelIcon from '@mui/icons-material/Hotel';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import TuneIcon from '@mui/icons-material/Tune';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import StorageIcon from '@mui/icons-material/Storage';
import ArchiveIcon from '@mui/icons-material/Archive';
import PieChartIcon from '@mui/icons-material/PieChart';

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
        <section className="sectionNextaAdvantages">
            <Container maxWidth="lg">
                <Grid container alignItems="center">
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box>
                            <Typography variant="h2">Легкий старт и удовольствие в пути</Typography>
                            <Typography variant="body1">Nexta уже интегрирована со всеми основными поставщиками и имеет весь необходимый функционал для работы с корпоративными клиентами. Вам остается только выбрать, с какими распределительными системами, консолидаторами и поставщиками вы хотите работать.</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box className="imageAdvF">
                            <Image src="/shema_bright.webp" fill={true} alt=""/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{marginTop: '3rem'}}>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box className="imageAdvB">
                            <Image src="/nadezhnost_bright.webp" fill={true} alt=""/>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box>
                            <Typography variant="h2">Надежный тыл</Typography>
                            <Typography variant="body1">Nexta родилась внутри крупного сетевого бизнес-тревел-агентства и эволюционировала в самостоятельный проект, надежность которого увеличивается с подключением каждого нового клиента. 25 веб-программистов, тестировщиков и специалистов поддержки Nexta внимательно следят за тем, чтобы работа доставляла вам удовольствие. Наш технологический стек: PHP, Go, Java, javascript, Linux, Nginx, Mysql, MongoDB, Redis, Docker, ElasticSearch</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
        <section className="sectionNextaDevelopment">
            <Container maxWidth="lg">
                <Grid>
                    <Typography className="title" variant="h2"><Typography component="strong" sx={{fontWeight: 'bold', fontSize: 'inherit'}}>NEXTA ПОСТОЯННО СОВЕРШЕНСТВУЕТСЯ</Typography> С УЧЕТОМ ПОТРЕБНОСТЕЙ КАК ВНУТРЕННИХ, ТАК И КОНЕЧНЫХ КЛИЕНТОВ АГЕНТСТВ. ПОЭТОМУ В ЛЮБОЙ МОМЕНТ ВАМ БУДУТ ДОСТУПНЫ  <Typography component="strong" sx={{fontWeight: 'bold', fontSize: 'inherit'}}>ЛУЧШИЕ РЕШЕНИЯ</Typography>.</Typography>
                    <Grid container className="list">
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <SyncIcon />
                            </Box>
                            <Typography variant="body1">Multi GDS и мульти PCC</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <FlightTakeoffIcon />
                                <DirectionsRailwayIcon />
                                <HotelIcon />
                            </Box>
                            <Typography variant="body1">Максимум тревел-услуг</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <GroupAddIcon />
                            </Box>
                            <Typography variant="body1">Тревел-политика и авторизация</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <BarChartIcon />
                            </Box>
                            <Typography variant="body1">График поездок и SOS alert</Typography>
                        </Grid>

                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <CloudSyncIcon />
                            </Box>
                            <Typography variant="body1">Тесная синхронизация с терминалами GDS</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <TuneIcon />
                            </Box>
                            <Typography variant="body1">Управление наценками и комиссиями</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <ManageAccountsIcon />
                            </Box>
                            <Typography variant="body1">Управление правами доступа сотрудников</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <AccountTreeIcon />
                                <CurrencyRubleIcon />
                                <CurrencyRubleIcon />
                            </Box>
                            <Typography variant="body1">Автоматическое разнесение расходов</Typography>
                        </Grid>

                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <StorageIcon />
                            </Box>
                            <Typography variant="body1">Хранение профайлов</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <AccountTreeIcon />
                            </Box>
                            <Typography variant="body1">API интеграция</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <ArchiveIcon />
                            </Box>
                            <Typography variant="body1">Электронный архив документов</Typography>
                        </Grid>
                        <Grid size={{ md: 4, lg: 3 }} className="listItem">
                            <Box className="listPicture">
                                <PieChartIcon />
                            </Box>
                            <Typography variant="body1">Статистика и аналитика</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
}
