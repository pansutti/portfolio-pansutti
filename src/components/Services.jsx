import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { 
  FaBriefcase, 
  FaCode, 
  FaGraduationCap, 
  FaLaptopCode,
  FaBuilding 
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const services = [
  {
    name: "Frontend Developer",
    company: "Cyrela",
    period: "mar 2024 - Atualmente",
    description:
      "Trabalho em projetos com uso de ReactJS, ReactNative, Typescript, MUI, API REST e outras ferramentas.",
    year: "2024",
    icon: FaCode,
    isCurrent: true,
    type: "work",
  },
  {
    name: "Frontend Developer",
    company: "Supera",
    period: "abr 2025 - ago 2025",
    description:
      "Experiência em React, Typescript, HTML, CSS, JavaScript, Chakra UI, Jest, entre outros frameworks e Libraries.",
    year: "2025",
    icon: FaCode,
    type: "work",
  },
  {
    name: "Freelancer",
    company: "Projetos Independentes",
    period: "ago 2023 - fev 2024",
    description:
      "Trabalho em sistemas Dashboards e landing pages, com uso de React, Typescript, HTML, VueJS, Tailwind, Material UI entre outros frameworks e Libraries.",
    year: "2023",
    icon: FaLaptopCode,
    type: "freelance",
  },
  {
    name: "Full Stack Developer",
    company: "Witec",
    period: "abr 2023 - jul 2023",
    description:
      "Experiência em React, Typescript, AzureDevOps, Power Automate, Sharepoint e outras ferramentas Microsoft.",
    year: "2023",
    icon: FaBriefcase,
    type: "work",
  },
  {
    name: "Full Stack Developer",
    company: "Trentim",
    period: "jul 2022 - jul 2023",
    description:
      "Experiência em React, Typescript, AzureDevOps, Power Automate, Sharepoint e outras ferramentas Microsoft.",
    year: "2022",
    icon: FaBuilding,
    type: "work",
  },
  {
    name: "Análise e Desenvolvimento de Sistemas",
    company: "Universidade Paulista",
    period: "2021 - 2023",
    description: "Formação em desenvolvimento de sistemas e tecnologias da informação.",
    year: "2021",
    icon: FaGraduationCap,
    type: "education",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Experiências</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Minha trajetória profissional e acadêmica.
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 relative"
          >
            {/* Linha temporal vertical - apenas mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 md:hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ originY: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent via-accent/70 to-transparent"
              />
            </div>

            {/* Grid: 1 coluna no mobile, 2 colunas em telas médias/grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative md:pl-0 pl-8">
              {services.map((service, index) => {
                const { name, company, period, description, year, icon: Icon, isCurrent, type } = service;
                const isNewYear = index === 0 || services[index - 1].year !== year;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative group"
                  >
                    {/* Ponto na linha temporal - apenas mobile */}
                    <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-primary shadow-lg shadow-accent/50 flex items-center justify-center md:hidden">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    </div>

                    {/* Badge do ano - apenas mobile */}
                    {isNewYear && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.15, type: "spring" }}
                        className="absolute -left-[60px] top-0 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 md:hidden"
                      >
                        <span className="text-accent text-sm font-bold">{year}</span>
                      </motion.div>
                    )}

                    {/* Card da experiência */}
                    <div className="relative bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 h-full overflow-hidden">
                      {/* Gradiente de fundo animado */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/0 transition-all duration-500 rounded-xl" />

                      {/* Linha decorativa no topo */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Badge do ano - desktop */}
                        {isNewYear && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.15, type: "spring" }}
                            className="hidden md:flex items-center gap-2 mb-4"
                          >
                            <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 text-accent text-sm font-bold">
                              {year}
                            </span>
                            {isCurrent && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-accent/30 to-accent/20 backdrop-blur-sm rounded-full border border-accent/40 text-accent text-xs font-semibold"
                              >
                                <BsStars className="text-accent" />
                                Atual
                              </motion.span>
                            )}
                          </motion.div>
                        )}

                        {/* Header do card com ícone */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                            type === "education" 
                              ? "bg-blue-500/20 border border-blue-500/30" 
                              : type === "freelance"
                              ? "bg-purple-500/20 border border-purple-500/30"
                              : "bg-accent/20 border border-accent/30"
                          } group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`text-xl ${
                              type === "education" 
                                ? "text-blue-400" 
                                : type === "freelance"
                                ? "text-purple-400"
                                : "text-accent"
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg md:text-xl tracking-wider font-primary font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                              {name}
                            </h4>
                            <p className="text-white/60 text-sm font-secondary font-medium truncate">
                              {company}
                            </p>
                          </div>
                        </div>

                        {/* Período */}
                        <div className="mb-4 pb-4 border-b border-white/10">
                          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            {period}
                          </span>
                        </div>

                        {/* Descrição */}
                        <p className="font-secondary leading-relaxed text-white/70 text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                          {description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
