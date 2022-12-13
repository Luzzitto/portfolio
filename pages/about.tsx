import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
  return (
    <>
      <Container title="About">
        <Navbar />
        <div className="p-6 w-1/2 mx-auto mb-6">
          <h1 className="text-4xl font-semibold mb-6">About Me</h1>
          <div className="flex justify-center">
            <div className="float-left text-xl">
              <p>
                My name is Luzzitto Tupaz. I am a Cybersecurity Undergraduate at
                Old Dominion University. I'm looking for an internship/part-time
                job for experience. I enjoy learning about computers and will
                continue to learn while earning my degree. I love making
                websites and programs using Python and tinkering with
                mechatronics using C/C++.{" "}
              </p>
              <br />
              <p>
                I learned programming through an online course, Codecademy. I
                knew the basics of learning how to make websites with HTML, CSS,
                and JS. From then on, I explore new languages and frameworks. I
                learned PHP as a backend and used WAMPP as my engine to host
                websites locally. I continued with design with Bootstrap and
                progressed to TailwindCSS. Currently, I am learning Nextjs as a
                framework for this portfolio.
              </p>
              <br />
              <p>
                I, too, am a human; I tend to make mistakes. For example, in the
                fall of 2021, I took an introduction to criminology. At the end
                of the term, I ended up with a D minus because I failed to keep
                up with my classes. However, from then on, I balanced and
                organized my time to give my best for each course. From failure
                to strength, it will always be my most outstanding value.
              </p>
            </div>
            <Image
              alt="Luzzitto Tupaz full"
              src="/images/full_luzzitto_tupaz.jpg"
              className="w-72 float-right aspect-[9/16] rounded [clip-path:polygon(10%_0,100%_0,_100%_100%,_0_100%)] [shape-outside:polygon(10%_0,100%_0,_100%_100%,_0_100%)]"
              width={1611}
              height={2864}
            />
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default About;
