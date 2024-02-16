import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a repudiandae explicabo alias debitis magni vero at eum! Fuga ex impedit obcaecati animi distinctio, similique itaque est porro cumque mollitia?",
    link: "Veja mais",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a repudiandae explicabo alias debitis magni vero at eum! Fuga ex impedit obcaecati animi distinctio, similique itaque est porro cumque mollitia?",
    link: "Veja mais",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a repudiandae explicabo alias debitis magni vero at eum! Fuga ex impedit obcaecati animi distinctio, similique itaque est porro cumque mollitia?",
    link: "Veja mais",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
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
              Minhas experiências e certificações.
            </h3>
            <button className="btn btn-sm">Meu Portfólio</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[156px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
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
