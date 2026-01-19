import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent, Accordion, AccordionActions, AccordionSummary, AccordionDetails, List, ListItem } from "@mui/material";
import type { Metadata } from "next";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

export const metadata: Metadata = {
  title: "Finex",
};

interface Props {}

export default function page({}: Props) {
    return <>
        <section className="sectionFinexIntro">
            <Container maxWidth="lg">
                <Grid container justifyContent="center" textAlign="center">
                    <Box className="sectionFinexIntroContent sectionContentTitle">
                        <Typography align="center" variant="h1"><Typography className="span" component="span">Система управленческого учета для тревел-агентства</Typography></Typography>
                        <Typography align="center" variant="body2"><Typography className="span" component="span">Система Finex предназначена для ведения управленческого учета в авиа- и туристических агентствах с последующим автоматическим переносом данных в программу бухгалтерского учета.</Typography></Typography>
                        <Typography variant="body1"><Typography className="span" component="span">Весь необходимый функционал разработан с учетом специфики деятельности российского тревел-агентства. Трудозатратные процессы, связанные с внесением данных, в системе максимально автоматизированы.</Typography></Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                            <Button sx={{margin: '0 .5rem'}} variant="contained" color="warning" size="large">Подключиться</Button>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </section>
        <section className="sectionFinexAccordion">
            <Container maxWidth="lg">
                <Accordion defaultExpanded>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <Typography component="span" className="accordionTitle">Основные функциональные модули</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Ведение справочника видов услуг, оформление операций с учетом их специфических свойств и с максимальной детализацией</ListItem>
                            <ListItem>Автоматическое ценообразование, оформление первичной документации в ручном и автоматическом режиме</ListItem>
                            <ListItem>Учет минимальных тарифов на дату выписки услуги, фиксация причины выбора не минимального тарифа</ListItem>
                            <ListItem>Ведение и контроль дебиторской и кредиторской задолженности (в разрезе организации, договора, документа)</ListItem>
                            <ListItem>Возможность мультивалютного учета</ListItem>
                            <ListItem>Ведение учета в разрезе видов бизнеса, выявление наиболее рентабельных видов бизнеса</ListItem>
                            <ListItem>Ведение учета в разрезе отдельных проектов с определением рентабельности каждого проекта</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <Typography component="span" className="accordionTitle">Бюджетирование</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Планирование бюджета по доходам и расходам (в разрезе подразделений и статей бюджета)</ListItem>
                            <ListItem>Текущий контроль за выставление расходов в соответствии с запланированными суммами (система прав на создание расходных документов)</ListItem>
                            <ListItem>План-фактный анализ бюджета</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    >
                    <Typography component="span" className="accordionTitle">Управление денежными потоками</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Контроль движений и остатков денежных средств в разрезе нескольких банковских счетов и касс, мультивалютный учет</ListItem>
                            <ListItem>Учет кредитов и займов</ListItem>
                            <ListItem>Автоматизация Казначейства, двухуровневая система утверждения исходящих платежей</ListItem>
                            <ListItem>Банк-Клиент</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    >
                    <Typography component="span" className="accordionTitle">Работа с клиентами</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Ведение клиентской базы и фиксация взаимоотношений с клиентами</ListItem>
                            <ListItem>Выставление и электронная выгрузка первичных документов как по стандартным формам, так и по индивидуальным формам клиентов (реестры, пакеты документов, специальные печатные формы с аналитикой)</ListItem>
                            <ListItem>Контроль задолженности (текущей, просроченной, по форме оплаты, учет кредитных лимитов, глубина кредита)</ListItem>
                            <ListItem>Контроль договоров с клиентами, в том числе срока окончания договора, возможность автоматической пролонгации договора</ListItem>
                            <ListItem>Механизмы стоп-листов (ручная или автоматическая постановка)</ListItem>
                            <ListItem>Формирование статистических отчетов с возможностью автоматической отправки по электронной почте</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                    >
                    <Typography component="span" className="accordionTitle">Внутрихолдинговый учет</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Возможность ведения учета в разрезе нескольких организаций (как отдельных юридических лиц, так и подразделений одного юридического лица)</ListItem>
                            <ListItem>Ведение взаиморасчетов между организациями и подразделениями холдинга (отчеты с расшифровкой начислений)</ListItem>
                            <ListItem>Единое казначейство</ListItem>
                            <ListItem>Автоматическое формирование цепочек документов между организациями и подразделениями холдинга с заданными параметрами ценообразования</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6-content"
                    id="panel6-header"
                    >
                    <Typography component="span" className="accordionTitle">Формирование отчетов</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Широкие возможности по формированию отчетов как для внутренних пользователей, так и по формам клиентов, оперативный анализ информации для принятия управленческих решений</ListItem>
                            <ListItem>Контроль работы менеджеров (отчеты в количественных и суммовых показателях)</ListItem>
                            <ListItem>Формирование отчетов по расписанию, автоматическая рассылка их по электронной почте внутренним и внешним адресатам</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7-content"
                    id="panel7-header"
                    >
                    <Typography component="span" className="accordionTitle">Взаимодействие с внешними программами</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Автоматический обмен информацией с внешними программами, позволяющий значительно снизить затраты на ведение учета (системы онлайн –бронирования, бэк-офис, Банк-Клиент, программы партнеров)</ListItem>
                            <ListItem>Выгрузка данных в стандартную обновляемую конфигурацию 1С Бухгалтерия, формирование документов-аналогов и проводок по счетам бухгалтерского учета, возможность неоднократного и выборочного переноса информации</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8-content"
                    id="panel8-header"
                    >
                    <Typography component="span" className="accordionTitle">Доставка</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>Формирование документов доставки</ListItem>
                            <ListItem>Графики доставки, оптимизация работы курьеров</ListItem>
                            <ListItem>Автоматическое формирование пакетов печатных форм по заданиям курьеров</ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </section>
    </>
}
