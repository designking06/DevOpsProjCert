import About from "../components/about"
import Contact from "../components/ContactForm/ContactForm";
import Footer from "../components/footer"
import Hero from "../components/hero"
import Projects from "../components/projects"

export default function Home() {

    return (
        <div>
            <Hero pageTitle="Building Scalable Web Platforms" />

            < Projects />

            < About />

            < Contact />
        </div>
    );
}
