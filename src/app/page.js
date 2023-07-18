import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}