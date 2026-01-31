import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className='sectionHomeIntro'>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Box className='videoContainer'>
              <video autoPlay={true} loop={true} muted={true} poster="/poster.webp">
                <source src="/code1.mp4" type="video/mp4"/>
              </video>
            </Box>
            <Grid size={{ md: 10, lg: 8 }}>
              <Box className="sectionHomeIntroContent sectionContentTitle">
                <Typography align="center" variant="h1"><Typography className="span" component="span">Прибыльный турбизнес без напряжения</Typography></Typography>
                <Typography align="center" variant="body2"><Typography className="span" component="span">Готовые комплексные решения для онлайн-продаж и управления ресурсами компании</Typography></Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                  <Button sx={{margin: '0 .5rem'}} variant="contained" color="warning" size="large">Онлайн-продажи</Button>
                  <Button sx={{margin: '0 .5rem'}} variant="contained" color="primary" size="large">Управленческий учет</Button>
                </Box>
              </Box>
            </Grid>
          </Grid> 
        </Container>
      </section>

      <section className="sectionHomeSolutions">
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid size={{ md: 10, lg: 8 }}>
              <Box className="sectionHomeSolutionsContent">
                <Typography align="center" variant="h2">Cвоевременные решения</Typography>
                <Typography align="center" variant="body2">Успех современного тревел-агентства очень сильно зависит от операционной эффективности. Nexta помогает грамотно выстроить и автоматизировать бизнес-процессы, связанные с продажами, клиентским сервисом и управлением ресурсами компании. В результате у вас появляется возможность создавать конкурентные предложения при одновременном снижении затрат.</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" className="cards" spacing={4}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Card>
                <Box className="cardMedia">
                  <Image src="/corporate.webp" width={200} height={190} alt=""/>
                </Box>
                <CardContent>
                  <Typography variant="body1" sx={{textAlign: 'center'}}>
                    Обслуживайте компании и корпорации
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <Card>
                <Box className="cardMedia">
                  <Image src="/subagents.webp" width={200} height={190} alt=""/>
                </Box>
                <CardContent>
                  <Typography variant="body1" sx={{textAlign: 'center'}}>
                    Открывайте новые офисы без лишних затрат
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <Card>
                <Box className="cardMedia">
                  <Image src="/network.webp" width={200} height={190} alt=""/>
                </Box>
                <CardContent>
                  <Typography variant="body1" sx={{textAlign: 'center'}}>
                    Развивайте собственную субагентскую сеть
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionHomeNexta">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{textAlign: 'center'}}>NEXTA — это...</Typography>
          <Grid container sx={{marginTop: '3rem'}}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Box className="imageWrapper">
                <Image src="/start_nexta.webp" fill={true} alt=""/>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <Typography variant="h3">Легкий старт</Typography>
                <Typography variant="body1" sx={{marginTop: '1rem'}}>Nexta уже интегрирована с ключевыми поставщиками тревел-контента и имеет весь необходимый функционал для работы с корпоративными клиентами.</Typography>
                <Typography variant="body1" sx={{fontWeight: '500', marginTop: '1rem'}}>Вам остается выбрать, с какими распределительными системами, консолидаторами, поставщиками вы будете работать.</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '3rem'}} justifyContent='center'>
            <Grid>
              <Button variant="contained" color="primary">Поставщики тревел-контента</Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionHomeOpportunities">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{textAlign: 'center'}}>Впечатляющие возможности</Typography>
          <Grid container sx={{marginTop: '3rem'}}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Typography variant="body1" sx={{marginTop: '1rem'}}>В NEXTA есть все для успешной работы современного бизнес-тревел агентства</Typography>
              <Typography variant="body1" sx={{fontWeight: '500', marginTop: '1rem'}}>Nexta умеет находить, бронировать и автоматически выписывать любые тревел-услуги, управлять заказами, стоимостью и сервисными сборами, формировать первичную отчетность, архивировать документы, обмениваться данными с внешними программами и многое, многое другое.</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }} sx={{display: 'flex', justifyContent: 'center'}}>
              <Box className="imageWrapper">
                <Image src="/possibility.webp" fill={true} alt=""/>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '3rem'}} justifyContent='center'>
            <Grid>
              <Button variant="contained" color="primary"><Link href="/nexta">Изучить функционал NEXTA</Link></Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionHomeAchievements">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{textAlign: 'center'}}>Новые достижения</Typography>
          <Grid container sx={{marginTop: '3rem'}}>
            <Grid size={{ sm: 12, md: 6 }} sx={{display: 'flex', justifyContent: 'center'}}>
              <Box className="imageWrapper">
                <Image src="/gsins.webp" fill={true} alt=""/>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <Typography variant="body1" sx={{marginTop: '1rem'}}>Новые достижения Мы сделали все, чтобы вы смогли оказывать первоклассный сервис без больших вливаний</Typography>
                <Typography variant="body1" sx={{fontWeight: '500', marginTop: '1rem'}}>Nexta позволяет адаптироваться под бизнес-процессы каждого корпоративного клиента, не меняя универсальных процессов на стороне бэк-офиса агентства. У Nexta есть все, что ценят корпоративные клиенты: гибкость, прозрачность и удобство в работе.</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '3rem'}} justifyContent='center'>
            <Grid>
              {/* <Button variant="contained" color="primary"><Link href="/nexta">Изучить функционал NEXTA</Link></Button> */}
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionHomeDecisions">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{textAlign: 'center'}}>Решения, о которых не приходится жалеть</Typography>
          <Grid container sx={{marginTop: '3rem'}}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Typography variant="body1" sx={{marginTop: '1rem'}}>Nexta имеет бэкофисную компоненту, которая показывает полную картину текущей деятельности агентства</Typography>
              <Typography variant="body1" sx={{fontWeight: '500', marginTop: '1rem'}}>Решения, о которых не приходится жалеть Nexta имеет бэкофисную компоненту, которая показывает полную картину текущей деятельности агентства Finex написан на платформе 1С и отвечает специфике работы российского тревел-агентства. Система работает в тесной связке с веб-сервисами Nexta и зарекомендовала себя отличным помощником в принятии взвешенных и экономически обоснованных решений.</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }} sx={{display: 'flex', justifyContent: 'center'}}>
              <Box className="imageWrapper">
                <Image src="/good_result.webp" fill={true} alt=""/>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '3rem'}} justifyContent='center'>
            <Grid>
              <Button variant="contained" color="primary"><Link href="/nexta">Изучить функционал NEXTA</Link></Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionHomeVictories">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{textAlign: 'center', fontWeight: '600'}}>Маленькие победы каждый день</Typography>
          <Typography variant="body1" sx={{fontWeight: '600'}}>NEXTA разрабатывалась с целью оптимизировать процессы сетевого бизнес-тревел-агентства. Поэтому каждый элемент системы работает на то, чтобы ваша ежедневная работ была слаженной и эффективной.</Typography>
          <Grid container sx={{marginTop: '3rem'}} justifyContent='center'>
            <Grid size={{ sm: 12, md: 6 }}>
              <Typography variant="h6" sx={{textAlign: 'center', fontWeight: '600'}}>Оставьте заявку на ознакомление с продуктами NEXTA</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '2rem'}} justifyContent='center' alignItems='center' spacing={4}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Typography variant="body1" sx={{textAlign: 'center', fontWeight: '600'}}>Автоматизация</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
              <Typography variant="body1" sx={{fontWeight: '600'}}>Nexta автоматизирует 95% работы с услугами</Typography>
              <Typography variant="body2" className="textSecondary">Это значит, что вам не придется волноваться о невыкупленных бронях, переносить данные из терминала в онлайн-систему, а из онлайн-системы в бэк-офис. Вы можете забыть о любой необходимости вносить данные в систему более одного раза.</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '2rem'}} justifyContent='center' alignItems='center' spacing={4}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Typography variant="body1" sx={{textAlign: 'center', fontWeight: '600'}}>Разноуровневый доступ к данным</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
              <Typography variant="body1" sx={{fontWeight: '600'}}>Собственное пространство Nexta для каждого пользователя</Typography>
              <Typography variant="body2" className="textSecondary">У каждого пользователя NEXTA есть собственный защищенный личный кабинет. Администратор системы может задавать роли и соответствующие им уровни доступа к функционалу. Клиенты действуют в системе в рамках своих заказов, менеджеры имеют полноценный доступ к управлению выписками и бронями разных клиентов, выставлению счетов, выгрузке документов и так далее.</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '2rem'}} justifyContent='center' alignItems='center' spacing={4}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Typography variant="body1" sx={{textAlign: 'center', fontWeight: '600'}}>Синхронизация онлайн-системы с бэк-офисом</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
              <Typography variant="body1" sx={{fontWeight: '600'}}>Полное понимание и контроль над ситуацией</Typography>
              <Typography variant="body2" className="textSecondary">NEXTA + FINEX единственный в России программный сервис, способный решить проблему информационного разрыва в онлай-агентстве. Этот профессиональный тандем полностью автоматизирует двухсторонний обмен данными между клиентскими веб-сервисами и бэк-офисом агентства. 1С-разработка — еще один наш конёк!</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop: '2rem'}} justifyContent='center' alignItems='center' spacing={4}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Typography variant="body1" sx={{textAlign: 'center', fontWeight: '600'}}>Профессиональные инструменты для работы с корпоративными клиентами</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
              <Typography variant="body1" sx={{fontWeight: '600'}}>Первоклассный корпоративный тревел-сервис</Typography>
              <Typography variant="body2" className="textSecondary">Онлайн-система Nexta родилась внутри старейшей российской TMC, специалисты которой виртуозно владеют техниками оптимизации расходов и управления тревел-программой корпоративных клиентов. Поэтому Nexta поддерживает динамические правила поездок, отчетность, аналитики, электронный документооборот и т.д. Словом, все для организации первоклассного корпоративного тревел-сервиса.</Typography>
            </Grid>
          </Grid>

          <Grid container className="products">
            <Grid size={{ sm: 12, md: 6 }} sx={{textAlign: 'center'}} className="productsBox nexta">
              <Box className="productsBoxOverlay"></Box>
              <Box className="productsBoxContent">
                <Typography variant="h6" sx={{fontWeight: '600'}}>NEXTA</Typography>
                <Typography variant="body1">Онлайн-система бронирования и управления деловыми поездками сотрудников корпоративных клиентов</Typography>
                <Box className="productsBoxContentButtonWrapper">
                  <Button variant="contained" color="primary"><Link href="/nexta">Подробнее</Link></Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }} sx={{textAlign: 'center'}} className="productsBox finex">
              <Box className="productsBoxOverlay"></Box>
              <Box className="productsBoxContent">
                <Typography variant="h6" sx={{fontWeight: '600'}}>FINEX</Typography>
                <Typography variant="body1">Управленческий учет в тревел-агентстве: автоматизация контроля расходов, отчетность и управление денежными потоками</Typography>
                <Box className="productsBoxContentButtonWrapper">
                  <Button variant="contained" color="primary"><Link href="/finex">Подробнее</Link></Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
