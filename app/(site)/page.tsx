import About from "../components/About";
import Landing from "../components/Landing";
import Navbar from "../components/navbar/Navbar";
import Contacts from "../components/contacts/Contacts";
import Skills from "../components/skills/Skills";
import styles from './page.module.css';
import { Toaster } from "react-hot-toast";

export default function Home() {

  return (
    <div className={styles.main}>
      <Toaster />
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Contacts />
    </div>
  )
}
