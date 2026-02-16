import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Guide } from "@/components/landing/Guide";
import { Companies } from "@/components/landing/Companies";
import { CTA } from "@/components/landing/CTA";
import { Contact } from "@/components/landing/Contact";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { MoreSections } from "@/components/landing/MoreSections";
import { GuideCards } from "@/components/landing/GuideCards";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Navbar />
            <Hero />
            <Features />
            <MoreSections />
            <Guide />
            <GuideCards />
            <Testimonials />
            <Companies />
            <CTA />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
