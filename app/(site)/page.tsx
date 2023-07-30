'use client';
import About from "../components/About";
import Landing from "../components/Landing";
import Navbar from "../components/navbar/Navbar";
import Contacts from "../components/contacts/Contacts";
import Skills from "../components/skills/Skills";
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      const page = document.getElementById(hash + "page");
      if(hash === "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      })
      } else if (page) {
        page.scrollIntoView({ behavior: "smooth" });
      }
    })
  }, [])

  return (
    <div>
      <Toaster />
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Contacts />
    </div>
  )
}
