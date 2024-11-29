import { Metadata } from "next";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionHero from "../components/SectionHero";
import SectionPortfolio from "../components/SectionPortfolio";
import SectionTestomonial from "../components/SectionTestomonial";

export const metadata: Metadata = {
  title: "Abinash Rai",
  description: "Portfolio of Abinash Rai",
};
export default function Home() {
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionPortfolio />
      <SectionTestomonial />
      <SectionContact />
      <Footer />
    </div>
  );
}
