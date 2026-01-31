import { Container, Grid, Box, Typography, Button, List, ListItem } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Контакты",
};

interface Props {}

export default function page({}: Props) {
    return <>
        <section className="sectionContacts">
            <Grid container sx={{width: '100%'}}>
                <Grid size={{ md: 12, lg: 6 }}>
                    <Container>
                        <Box className="sectionContactsContent">
                            <Typography variant="h1" sx={{marginBottom: '1rem'}}>NEXTA SYSTEMS</Typography>
                            <Typography variant="body1">Санкт-Петербург, Достоевского 44Е</Typography>
                            <Typography variant="body1">Телефон: <a href="tel:88124485398">8 (812) 448 53 98</a></Typography>
                            <Typography variant="body1">E-mail: <a href="mailto:info@nexta.pro">info@nexta.pro</a></Typography>
                            <Typography variant="body1">ООО "Некста", ИНН 7840021577</Typography>
                            <Typography variant="body1" sx={{marginTop: '2rem'}}>Всегда рады встретиться и пообщаться на тему технологий NEXTA.</Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                    <Box id="map"><Image src='/map.png' fill={true} alt=""/></Box>
                </Grid>
            </Grid>
        </section>
    </>
}
