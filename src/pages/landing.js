import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GameSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";

export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <GamesSection />
            <AboutSection />
            {/* <NewsSection /> */}
            <DownloadSection />
            <ContactSection />
        </>
    )
}