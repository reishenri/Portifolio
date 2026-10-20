
import { Server, Code, Database, Cpu } from "lucide-react";

const About = () => {
  return (

    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Backend focado em Java e Spring Boot.
            </h3>

            <p className="text-muted-foreground">
              Tenho em foco construção de APIs REST, autenticação JWT, integração com bancos de dados e desenvolvimento de sistemas escaláveis.</p>

            <p className="text-muted-foreground">
              Também desenvolvo soluções IoT utilizando ESP32 e Firebase, conectando dispositivos físicos a aplicações web para monitoramento em tempo real.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entrar em Contato
              </a>

              <a
                href="/Curriculo_Henrique_Reis.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Curriculo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Java</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de APIs REST, autenticação JWT, Spring Boot, integração entre sistemas e arquitetura escalável.                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">

                  <Database className="h-6 w-6 text-primary" />

                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Banco de Dados</h4>
                  <p className="text-muted-foreground">
                    Modelagem, MySQL, PostgreSQL, Firebase Firestore e Realtime Database para aplicações modernas.                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">

                  <Cpu className="h-6 w-6 text-primary" />

                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">IoT & Sistemas Inteligentes</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de soluções utilizando ESP32, sensores inteligentes, comunicação em tempo real e dashboards para monitoramento remoto.                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
