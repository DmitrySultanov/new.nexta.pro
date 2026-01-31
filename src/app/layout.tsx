import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.scss";
import ResponsiveAppBar from "@/components/Header";
import { Roboto, Montserrat, Nunito } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Nexta",
  description: "Система онлайн-бронирования и управления деловыми поездками",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>
              <ResponsiveAppBar />
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
