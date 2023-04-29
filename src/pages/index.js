import "aos/dist/aos.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GameSection";
import AboutSection from "@/components/AboutSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <GamesSection />
            <AboutSection />
            <DownloadSection />
            <ContactSection />
            <MapSection />
            <Footer />
        </>
    )
}