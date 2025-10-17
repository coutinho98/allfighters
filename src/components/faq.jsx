import { useState } from 'react';
import { Plus, Minus, CheckCircle, Clock, BookOpen, Mail, Star, Globe } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Os cursos têm certificado?",
    answer: "Sim. Ao finalizar o curso que você adquiriu, você receberá um certificado de conclusão do curso.",
    icon: CheckCircle
  },
  {
    question: "A quantas aulas eu terei acesso?",
    answer: `A quantidade de aulas dependerá do curso que você comprar. Cada curso tem uma quantidade de aulas:
    - Guarda fechada: 14 aulas;
    - Costas: 25 aulas;
    - Arm lock: 30 aulas;
    - Kimura: 34 aulas;
    - Defesa de finalizações: 36 aulas;
    - Triângulo: 47 aulas.`,
  },
  {
    question: "Sou iniciante, algum desses cursos é para mim?",
    answer: "A nossa metodologia é focada em ensinar de maneira progressiva; do básico ao avançado. Dessa forma, iniciamos nas posições mais básicas, onde nossos alunos vão criar uma base sólida para então aprender o que há de mais avançado dentro de cada curso. Não há a necessidade de já ter conhecimento prévio sobre as posições de cada curso. Você aprenderá tudo conosco.",
  },
  {
    question: "Como vou acessar o curso após a compra?",
    answer: "Você receberá um e-mail para criar login e senha e, após criar login e senha pelo link que recebeu no e-mail, é só baixar o App Kiwify no seu celular ou tablet e acessar o curso. Caso queira continuar acessando pelo navegador, basta acessar Kiwify.com.br",
  },
  {
    question: "Se eu perder o acesso, como faço para restaurar?",
    answer: "Entre em contato com suporte pelo e-mail allfighters.suporte@gmail.com que iremos resolver seu problema, ou pelo WhatsApp nessa página.",
  },
  {
    question: "Por quanto tempo terei acesso ao curso que eu comprar?",
    answer: "Todos os nossos cursos são acesso vitalício.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {

    const formattedAnswer = item.answer.includes('-') 
        ? item.answer.split('\n').map((line, i) => (
            line.trim().startsWith('-') 
            ? <li key={i} className="ml-5 list-disc text-slate-300">{line.replace('-', '').trim()}</li> 
            : <p key={i} className="text-slate-300 font-semibold mb-1">{line}</p>
        )) 
        : <p className="text-slate-300">{item.answer}</p>;

    return (
        <div className="border-b border-slate-700/50">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-white transition-colors hover:text-green-400 cursor-pointer"
                onClick={onClick}
            >
                <span className="flex items-center space-x-3">
                    <span className="text-lg">{item.question}</span>
                </span>
                {isOpen ? <Minus className="w-5 h-5 text-green-500" /> : <Plus className="w-5 h-5 text-slate-500" />}
            </button>
            
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-slate-800/50 p-4 rounded-lg shadow-inner">
                    {formattedAnswer}
                </div>
            </div>
        </div>
    );
};

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E28]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-2">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Tire suas dúvidas antes de começar a dominar o Grappling.
                    </p>
                </div>
                
                <div className="space-y-4 bg-slate-900/30 p-4 sm:p-8 rounded-xl border border-slate-700/50">
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;