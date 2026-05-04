import { Server, Code, User } from "lucide-react";

const About = () => {
  return (
    
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Full Stack focado em Java e aplicações web.
            </h3>

            <p className="text-muted-foreground">
  Desenvolvedor Full stack com foco em Java e Spring Boot, com experiência prática no desenvolvimento de APIs REST, integração com banco de dados e construção de aplicações completas, incluindo sistemas de e-commerce e soluções financeiras.
</p>

<p className="text-muted-foreground">
  Busco criar aplicações bem estruturadas, escaláveis e de alta qualidade, aplicando boas práticas de desenvolvimento e aprimorando constantemente minhas habilidades para resolver problemas reais de forma eficiente.
</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entrar em Contato
              </a>

              <a
                href="/Curriculo_Henrique_Reis.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar CV
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
                  <h4 className="font-semibold text-lg"> Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                    Construção de aplicações web responsivas utilizando frameworks modernos e arquitetura eficiente.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de interfaces com foco em usabilidade, acessibilidade e experiência do usuário.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Backend</h4>
                  <p className="text-muted-foreground">
                    Construindo APIs e sistemas com Java e Spring Boot, focados em desempenho e escalabilidade.
                  </p>
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
