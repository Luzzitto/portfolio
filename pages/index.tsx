import type { NextPage } from "next";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Container title="Home">
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
