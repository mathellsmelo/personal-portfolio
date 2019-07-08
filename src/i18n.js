import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            "HomeTitle" : "Hello, my name is Matheus Melo.",
            "HomeSubTitle" : "I am a Full Stack Developer. :-)",
            "AboutMe" : "ABOUT ME",
            "AboutMeText" : "Hello, my name is Matheus Melo, I'm Brazilian, I'm 21 years old and I'm a Web/Mobile Developer. My first contact with programming happened when I started study Computer Science at the University of Brasilia. I have always had a desire to create beyond what the academic universe offered me, so I started learning all by myself about mobile development using React Native and JavaScript, and later I started developing personal Web projects using React.js library, and in that environment I've been for a more than a year. If you have been interested in any of my work and want me in your project or in your company, feel free to contact me.",
            "Contacts" : "CONTACT",
            "Resume" : "RESUME",
            "Front-end Developer" : "Front-end Developer",
            "Skills" : "SKILLS",
            "SkillsText" : "I can build hybrid Mobile, Web and Desktop applications using the following tools." ,
            "ContactForm" : "Contact Form",
            "ContactSubTitle" : "If you have any questions or a job offer that you think I'm perfect for, send me an email below:",
            "FirstName" : "First Name",
            "LastName" : "Last Name",
            "Subject" : "Subject",
            "Country" : "Country",
            "Message" : "Message",
            "Home" : "HOME",
            "Submit" : "Submit",
            "EndBar" : "Designed and developed by ",
            "Projects" : "PROJECTS",
            "ViewAll" : "View All",
            "InstaClone" : "Built using React Native + NodeJS + MongoDB + Firebase",
            "Plataform" : "Plataform",
            "Hybrid" : "Hybrid",
            "Database" : "Database",
            "NotAvaliable" : "Unavaliable",
            "ContactAlert" : "Your message was sent, I'll return soon. Thanks :-)",
            "Code" : "Code",
            "Demo" : "Demo",
            "FlappyText" : "Flappy Bird Clone With Japanese Theme and my good friend's face (@ghkronos), built using Godot Engine",
            "Input": "Required Field",
            "NameError": "Your name must be composed only with letters",
            "EmailError": "Invalid Email",
            "CountryErro": "Your coutry name must have at least 2 characters"
        }
      },
      pt: {
        translations: {
            "HomeTitle" : "Olá, meu nome é Matheus Melo.",
            "HomeSubTitle" : "Sou um Desenvolvedor Full Stack :-)",
            "AboutMe" : "SOBRE MIM",
            "AboutMeText" : "Olá, meu nome é Matheus Melo, sou brasileiro, tenho 21 anos de idade e sou um desenvolvedor Web/Mobile. Meu primeiro contato com programação aconteceu quando comecei o curso de Ciência da Computação na Universidade de Brasília. Sempre tive um desejo por criar além do que o universo acadêmico me oferecia, por isso comecei a aprender sozinho sobre desenvolvimento mobile usando React Native e JavaScript, e posteriormente comecei a desenvolver projetos pessoais para Web usando também a biblioteca React.js, e neste meio estou faz 1 ano. Se você se interessou por algum de meus trabalhos e me quer no seu projeto ou na sua empresa, sinta-se a vontade para entrar em contato comigo." ,
            "Contacts" : "CONTATO",
            "Resume" : "CURRÍCULUM",
            "Front-end Developer" : "Desenvolvedor Front-end",
            "Skills" : "HABILIDADES",
            "SkillsText" : "Posso construir aplicações híbridas Mobile, Web e Desktop usando as seguintes ferramentas." ,
            "ContactForm" : "Formulário de Contato",
            "ContactSubTitle" : "Caso tenha alguma dúvida ou tenha uma oferta de trabalho em que eu me encaixo perfeitamente, me mande um email abaixo:",
            "FirstName" : "Primeiro Nome",
            "LastName" : "Sobrenome",
            "Subject" : "Assunto",
            "Country" : "País",
            "Message" : "Mensagem",
            "Home" : "INÍCIO",
            "Submit" : "Enviar",
            "EndBar" : "Desenhado e desenvolvido por ",
            "Projects" : "PROJETOS",
            "ViewAll" : "Ver Todos",
            "InstaClone" : "Feito usando React Native + NodeJS + MongoDB + Firebase",
            "Plataform" : "Plataforma",
            "Hybrid" : "Hibrido",
            "Database" : "Banco de dados",
            "NotAvaliable" : "Indisponível",
            "ContactAlert" : "Sua mensagem foi envíada, irei retornar em breve. Obrigado :-)",
            "Code" : "Código",
            "Demo" : "Demostração",
            "FlappyText": "Clone de Flappy Bird com Tema Japonês e o rosto do meu grande amigo @ghkronos, feito usando Godot Engine",
            "Input": "Campo Obrigatório",
            "NameError": "Seu nome deve conter somente letras",
            "EmailError": "Email Inválido"
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    
 
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, // we use content as keys
 
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
 
    react: {
      wait: true
    },
  });
 
export default i18n;