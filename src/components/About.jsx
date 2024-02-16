import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mim.</h2>
            <h3 className="h3 mb-4">
              Comunicativo e Organizado
              <br />
              Sempre estudando.
            </h3>
            <p className="mb-6">
              Comecei a atuar profissionalmente com Software Developer em 2021,
              realizando Freelances para ONG's e Projetos avulsos. Adquiri meu
              primeiro trabalho em 2022 na Trentim, produzindo e adquirindo
              vasta experiência na área de programação. Me formei em Análise e
              Desenvolvimento de Sistemas em 2023 onde atualmente estou como
              Freelancer Developer.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Anos de <br />
                  Experiência
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={25} duration={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos <br />
                  Completos
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a
                href="https://wa.me/5512974120790"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-lg flex items-center">
                  Meu Contato
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/18ITsXry0dtOeEveHqehOYJkrZZQV06jI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                Meu CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
