import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import SyncIcon from '@mui/icons-material/Sync';
import Masonry from '@mui/lab/Masonry';
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
import Link from "next/link";

interface Props {}

export default function page({}: Props) {

    const Testimonials = [
        {
            id: 1,
            author: 'Ольга Азанова',
            position: 'Генеральный директор ООО "Инкорс"',
            text: 'Мы используем NEXTA для обслуживания субагентов, а также в этой программе самостоятельно обслуживаются наши корпоративные клиенты. Поскольку я работаю в Канаде, а офис обслуживания в Москве, быть в курсе всех дел и событий было сложно, а с Nexta я всегда в курсе всех событий и проектов. Это очень удобно для контроля. Мы довольны данной системой и не жалеем, что ее приобрели. А еще важно, что система нравится и нашим клиентам. Nexta - хороший проект и наше будущее. Также хочется поблагодарить коллектив NEXTA за помощь во внедрении и настройке функционала системы оперучета FINEX. В момент внедрения казалось что все программисты NEXTA (как программисты 1С так и web- программисты) работают над внедрением системы на нашей фирме. Была проделана большая работа по внедрению, которая сейчас не дает сбоя."'
        },
        {
            id: 2,
            author: 'Татьяна Сухорукова',
            position: 'Генеральный директор, ООО "Альбион"',
            text: 'В последние годы клиенты все чаще спрашивают у агентства наличие онлайн-системы. А в крупных компаниях наличие онлайн-системы стало одним из обязательных пунктов запросов на тендер. Мы понимали, что онлайн онлайну рознь, поэтому уделили выбору программы значительное время. В итоге мы выбрали Nexta, потому, что в этой системе работать просто и удобно нам, а значит, просто и удобно будет и нашим клиентам. С помощью Nexta мы привлекли новых клиентов и почувствовали себя высокотехнологичной компанией. А в 2015 году мы расширили сотрудничество и получили дополнительно автоматическую выгрузку документов. Надеемся продолжать плодотворное сотрудничество с NEXTA.'
        }
    ]

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
        <section className="sectionNextaProviders">
            <Container maxWidth="lg">
                <Grid>
                    <Box className="titleWrapper">
                        <Typography variant="body1" sx={{fontSize: '.8rem', fontWeight: '600'}}>ПАРТНЕРЫ NEXTA</Typography>
                        <Typography variant="h2" className="title">Поставщики контента</Typography>
                        <Typography variant="body1">Nexta — сертифицированный разработчик и авторизованный партнёр глобальных систем бронирования, отельных консолидаторов и поставщиков других тревел-услуг</Typography>
                    </Box>
                    <Grid container className="list" alignItems="center" sx={{marginTop: '3rem'}}>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/amadeus.jpg" width="160" height="72" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/Mixvel.png" width="160" height="22" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/S7.png" width="160" height="72" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/travelport.png" width="160" height="120" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/aeroflot.png" width="160" height="46" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/hotelbook.png" width="160" height="120" alt="" />
                        </Grid>

                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/CB.png" width="160" height="28" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/rzd.png" width="160" height="78" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/aampa_logo.png" width="160" height="78" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/Ostrovok.png" width="160" height="66" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/acasse.jpg" width="160" height="130" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/rcr.jpg" width="160" height="68" alt="" />
                        </Grid>

                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/Multireisen.png" width="160" height="140" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/alfa.png" width="160" height="50" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/iway.png" width="160" height="70" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/U6.png" width="160" height="90" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/Bronevik.jpg" width="160" height="140" alt="" />
                        </Grid>
                        <Grid size={{ sm: 12, md: 4, lg: 2 }}>
                            <Image src="/myagent.png" width="160" height="22" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
        <section className="sectionNextaFunctional">
            <Container maxWidth="lg">
                <Grid container justifyContent="center" textAlign="center">
                    <Grid size={{ md: 12, lg: 8 }}>
                        <Typography variant="h2" className="title">Функционал NEXTA</Typography>
                        <Typography variant="body1">Обладателям NEXTA-технологий не страшны экономические перипетии. Добро пожаловать на NEXTA уровень.</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                            <Link href="/"><Button variant="contained" color="warning" size="large">ИЗУЧИТЬ ФУНКЦИОНАЛ NEXTA</Button></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
        <section className="sectionNextaTestimonials">
            <Container maxWidth="lg">
                <Grid textAlign="center">
                    <Typography variant="h2">Впечатления наших клиентов</Typography>
                    <Masonry columns={2} spacing={4} className="masonry">
                        {Testimonials.map((item, index) => (
                            <Box key={index} className="masonryItem">
                                {item.text}
                                <Box className="d-flex justify-center text-center" sx={{marginTop: '1rem'}}>
                                    <Typography variant="body1">{item.author}</Typography>
                                    <Typography variant="body2">{item.position}</Typography>
                                </Box>
                            </Box>
                            ))}
                    </Masonry>
                </Grid>
            </Container>
        </section>
    </>
}
