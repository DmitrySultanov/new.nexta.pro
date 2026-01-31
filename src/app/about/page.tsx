import { Container, Grid, Box, Typography, Button, List, ListItem } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
};

interface Props {}

export default function page({}: Props) {
    return <>
        <section className="sectionAboutIntro">
            <Container maxWidth="lg">
                <Grid container justifyContent="center" textAlign="center">
                    <Box className="sectionAboutIntroContent sectionContentTitle">
                        <Typography align="center" variant="h1"><Typography className="span" component="span">dream team</Typography></Typography>
                    </Box>
                </Grid>
            </Container>
        </section>
        <section className="sectionAboutDescr">
            <Container maxWidth="lg">
                <Grid container>
                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>Наша команда собралась в 2008 году с целью разработать оптимальную систему автоматизации для крупного бизнес-тревел агентства.</Typography>
                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>За 8 лет непрерывного совершенствования программа по автоматизации эволюционировала в интегрированную IT-платформу для управления всеми бизнес-тревел процессами и оказалась востребованной многими российскими агентствами делового и индивидуального туризма.</Typography>
                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>Сегодня мы совершенствуем и поддерживаем два IT-продукта:</Typography>
                    <List sx={{marginBottom: '1rem'}}>
                        <ListItem>Nexta — система онлайн-бронирования и управления деловыми поездками</ListItem>
                        <ListItem>Finex — система управленческого учета для тревел-агентства</ListItem>
                    </List>
                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>Решения предлагаются как в коробочном варианте, так и в виде индивидуальных проектов на базе Nexta-технологий, со всеми сопутствующими услугами по back-end и front-end кастомизации, разработке и интеграции учетных систем на базе 1C, консультированию в области IT-интеграции в турагентствах.</Typography>
                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>У нас большие планы по созданию IT-экосистем для бизнес-тревел индустрии. Поэтому мы всегда рады услышать ваши комментарии, мысли и пожелания к технологиям, с которыми вам было бы удобно жить и работать.</Typography>
                </Grid>
            </Container>
        </section>
    </>
}
