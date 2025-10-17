import { MessageSquare } from 'lucide-react';

function ContactCTA() {
    const whatsappLink = "https://wa.me/SEUNUMERO?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20cursos%20All%20Fighters.";

    return (
        <section id="contact-cta" className="py-16 not-first-of-type:px-4 sm:px-6 lg:px-8 bg-[#1E1E28]">
            <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl font-bold text-white mb-4">
                    FALE CONOSCO
                </h2>
                
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                    Se você tiver qualquer dúvida, nossa equipe estará à sua disposição para resolver seu problema e te ajudar a decidir qual será o melhor curso para o seu caso!
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 cursor-pointer 
                                 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                                 px-10 py-4 rounded-lg font-bold text-lg 
                                 hover:from-green-600 hover:to-emerald-700 
                                 shadow-xl shadow-green-500/30 transition-all duration-300 transform hover:scale-[1.05]"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-7 h-7"
                    />
                    <span>ATENDIMENTO VIA WHATSAPP</span>
                </a>
            </div>
        </section>
    );
}

export default ContactCTA;