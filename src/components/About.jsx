import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CvButton from "./CvButton";

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
            Minha trajetória no desenvolvimento de software começou em 2021, quando iniciei projetos freelance para ONGs e outros projetos independentes, o que me permitiu aplicar e expandir meus conhecimentos na prática.

Em 2022, conquistei minha primeira oportunidade de trabalho na Trentim, onde ganhei uma vasta experiência na área de programação e aperfeiçoei minhas habilidades técnicas. Em 2023, finalizei minha formação em Análise e Desenvolvimento de Sistemas e, atualmente, atuo como Front-End Developer na Cyrela, onde continuo a desenvolver e aprimorar minha expertise em tecnologias de ponta.

Estou sempre em busca de novos desafios que me permitam evoluir como profissional e contribuir para soluções inovadoras no desenvolvimento de software.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={5} /> : null}+
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
              <CvButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
