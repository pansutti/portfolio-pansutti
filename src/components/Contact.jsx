import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 7000);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_xtti5kr",
        "template_i6bc0m5",
        templateParams,
        "zxphJl8fCSHalk7U9"
      )
      .then(
        (response) => {
          console.log("Email enviado!", response.status, response.text);
          alert("Email enviado!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro ", err);
        }
      );
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Ficou interessado?
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Envie uma <br /> Mensagem
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button
              onClick={sendEmail}
              disabled={isDisabled}
              className="btn btn-lg"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
