

//This contains the navbar , hero section , about section and the contact details

import NavigationBar from "../components/navigationBar.jsx";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Footer from "../components/footer.jsx";
import { motion } from 'framer-motion';


export default function OnboardingPage() {



    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
        >
        <div>
            <NavigationBar/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
        </motion.div>
    )
}
