import About from "../components/About";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Contacts from "../components/contacts/Contacts";
import Skills from "../components/skills/Skills";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.main}>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Contacts />
    </div>
  )
}
