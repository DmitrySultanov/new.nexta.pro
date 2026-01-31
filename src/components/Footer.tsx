'use client'
import { Grid, Toolbar, Box, IconButton, Typography, Button, Menu, MenuItem, Container, Slide } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";

interface Props {}

export function Footer({}: Props) {
    return <footer>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid size={{ sm: 12, xl: 3 }}>
                        <Box className="brandLogo">
                            <Image src='/logo_nexta_small_wt_gr.png' width="130" height="20" alt="Logo"/>
                        </Box>
                        <Box className="copyright">©Nexta 2008-2026</Box>
                    </Grid>
                    <Grid size={{ sm: 12, xl: 3 }}>
                        <ul className="menu">
                            <li><Link href="/about">О нас</Link></li>
                            <li><Link href="/nexta">Nexta</Link></li>
                            <li><Link href="/finex">Finex</Link></li>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/contacts">Контакты</Link></li>
                        </ul>
                    </Grid>
                    <Grid size={{ sm: 12, xl: 3 }}>
                        <ul className="contacts">
                            <li>
                                <a href="tel:88124485398">8 (812) 448 53 98</a>
                            </li>
                            <li>
                                <a href="mailto:info@nexta.pro">info@nexta.pro</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid size={{ sm: 12, xl: 3 }}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Image src="/qrcode.png" width="80" height="80" alt="" />
                            <Typography variant="body1" sx={{paddingLeft: '1rem', fontSize: '14px'}}>Наша деятельность отвечает стандартам безопасности</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
}
