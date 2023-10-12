import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppContainer, ListHeader } from "./globals.styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beers collection",
  description: "Beers collection app built with Next.js and Punk API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AppContainer>
            <ListHeader>
              <h1>Beers collection</h1>
            </ListHeader>
            {children}
          </AppContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
