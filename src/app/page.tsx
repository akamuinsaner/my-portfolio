import Image from "next/image";
import Main from './Main';
import About from './About';
import Information from './Information';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Information />
      <Contact />
      <Footer />
    </main>
  );
}
