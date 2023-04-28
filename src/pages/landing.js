import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GameSection";

export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <GamesSection />
        </>
    )
}