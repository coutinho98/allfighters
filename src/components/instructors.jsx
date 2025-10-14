import { useState } from 'react';
import ReactCountryFlag from "react-country-flag"; 
import { Globe, Instagram, Trophy, ChevronRight, X, User, Star, MapPin } from "lucide-react";

const marcoData = {
    bio: 'Faixa preta desde 2014, diplomado e reconhecido pelo principal órgão de Jiu Jitsu (IBJJF). Líder e proprietário da equipe Pirâmide Grappling Association (reconhecida pela IBJJF).',
    patrocinadores: [
        'Arquitetarte', 'Instituto Fisio Azevedo', 'Black Barber', 'Estasa Seguros', 
        'Nutropia', 'Estasa', 'Voük'
    ],
    objetivo: 'Atleta de alto rendimento de destaque no cenário internacional, busca patrocínios e parcerias visando melhorar seu desempenho em treinamentos e competições, aumentando a visibilidade de seus parceiros.',
    historico: [
        '🥇 Campeão Brasileiro Sem Kimono (2019)',
        '🥇 Campeão Sul Brasileiro Nogi (2023)',
        '🥇 Campeão peso e absoluto AJP Grand Prix NO-GI Curitiba (2022)',
        '🥇 Campeão Betim Open Nogi (2022)',
        '🥇 Campeão Rio Winter Open Nogi (2022)',
        '🥈 Vice campeão brasileiro nogi (2022)',
        '🥉 3º lugar Sul-americano Sem Kimono (2021)',
    ],
    seminariosInternacionais: [
        { nome: 'Oslo, Noruega', codigo: 'NO' },
        { nome: 'Stavanger, Noruega', codigo: 'NO' }, 
        { nome: 'Munique, Alemanha', codigo: 'DE' }, 
        { nome: 'Graz, Áustria', codigo: 'AT' }, 
        { nome: 'Viena, Áustria', codigo: 'AT' }, 
        { nome: 'Antofagasta, Chile', codigo: 'CL' }, 
        { nome: 'Dudelange, Luxemburgo', codigo: 'LU' }, 
        { nome: 'Santiago, Chile', codigo: 'CL' }, 
        { nome: 'Dubai, EAU', codigo: 'AE' }
    ],
    cardHighlights: [
        'Campeão Brasileiro Sem Kimono (2019)',
        'Campeão Sul Brasileiro Nogi (2023)',
        'Múltiplos títulos IBJJF Opens',
        'Seminários internacionais em 12+ países'
    ],
    instagram: "https://instagram.com/piramidebjj",
    lideranca: 'Líder - Pirâmide Grappling Association'
};

const lucasData = {
    bio: 'Faixa preta desde 2019. Atleta com múltiplos títulos internacionais e estaduais.',
    patrocinadores: [],
    objetivo: null,
    historico: [
        '🥇 Campeão Honor Submission Challenge 🇮🇹',
        '🥇 Múltiplos IBJJF Opens',
        '🥇 Campeonatos Estaduais',
    ],
    seminariosInternacionais: [],
    cardHighlights: [
        'Campeão Honor Submission Challenge 🇮🇹',
        'Múltiplos IBJJF Opens',
        'Campeonatos Estaduais',
    ],
    instagram: "#", 
    lideranca: 'IBJJF Certified'
};

const instructorsData = [
    {
        name: 'Marco Aurellio de Queiroz',
        rank: 'Faixa Preta desde 2014',
        ...marcoData,
    },
    {
        name: 'Lucas Alexandre de Queiroz',
        rank: 'Faixa Preta desde 2019',
        ...lucasData,
    },
];

const InstructorModal = ({ show, onClose, instructor }) => {
    if (!show || !instructor) return null;

    const data = instructor;
    const getCountryName = (str) => str.split(', ').pop(); 

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800/95 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-slate-700/50 transform transition-all p-6 sm:p-8 animate-in zoom-in-50 duration-300"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start border-b border-slate-700 pb-3 mb-6">
                    <div>
                        <h3 className="text-3xl font-extrabold text-green-400">{data.name}</h3>
                        <p className="text-slate-400 font-semibold">{data.rank} - {data.role}</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 rounded-full bg-slate-700/50">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-8 text-left">
                    
                    <div className="bg-slate-700/30 p-4 rounded-lg">
                        <h4 className="text-xl font-bold text-white mb-2 flex items-center space-x-2"><User className="w-5 h-5 text-green-500"/> <span>Sobre</span></h4>
                        <p className="text-slate-300">{data.bio}</p>
                    </div>

                    {data.objetivo && (
                         <div className="bg-slate-700/30 p-4 rounded-lg">
                            <h4 className="text-xl font-bold text-white mb-2 flex items-center space-x-2"><Star className="w-5 h-5 text-green-500"/> <span>Objetivo</span></h4>
                            <p className="text-slate-300">{data.objetivo}</p>
                        </div>
                    )}

                    {data.historico.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2"><Trophy className="w-5 h-5 text-green-500"/> <span>Histórico de Títulos</span></h4>
                            <ul className="space-y-2 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                {data.historico.map((t, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-slate-300 text-sm">
                                        <span>{t.trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data.seminariosInternacionais && data.seminariosInternacionais.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                                <Globe className="w-5 h-5 text-green-500"/> 
                                <span>Experiência Internacional</span>
                            </h4>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-slate-300 text-sm">
                                {data.seminariosInternacionais.map((s, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <ReactCountryFlag 
                                            countryCode={s.codigo} 
                                            svg 
                                            style={{ 
                                                width: '1.25em', 
                                                height: '1.25em', 
                                            }}
                                            className="rounded-sm shadow-md flex-shrink-0"
                                        />
                                        <span>{getCountryName(s.nome)}</span> 
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data.patrocinadores && data.patrocinadores.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2"><Star className="w-5 h-5 text-green-500"/> <span>Parceiros Atuais</span></h4>
                            <ul className="grid grid-cols-2 gap-2 text-slate-300 text-sm list-disc pl-4">
                                {data.patrocinadores.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

function Instructors() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const openModal = (instructor) => {
        setSelectedInstructor(instructor);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInstructor(null);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E1E28] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
                    
                    <h3 className="text-5xl font-extrabold mb-2 tracking-tight 
                                   bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                        Instrutores
                    </h3>
                    
                    <p className="text-slate-300 text-lg">
                        Lendas do Jiu-Jitsu dedicadas à sua evolução.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {instructorsData.map((instructor, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 
                                       hover:border-green-500 transition-all duration-300 ease-in-out 
                                       hover:shadow-green-500/10 shadow-lg hover:scale-[1.02] cursor-default 
                                       hover:ring-2 hover:ring-green-500/50 hover:ring-offset-2 hover:ring-offset-[#1E1E28]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-1">{instructor.name}</h4>
                                    <p className="text-green-400 font-semibold">{instructor.rank}</p>
                                    <p className="text-slate-400 text-sm mt-1">{instructor.role}</p>
                                </div>
                            </div>

                            <div className="space-y-3 mt-6">
                                <h5 className="text-sm font-bold text-green-400 border-b border-green-500/30 pb-1 mb-2">Destaques</h5>
                                {instructor.cardHighlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start space-x-2 text-slate-300 text-sm">
                                        {/* Ícones: Verde */}
                                        {highlight.includes('Seminários') ? (
                                            <Globe className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <Trophy className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        )}
                                        <p>{highlight}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-700/50 flex items-center justify-between">
                                <button
                                    onClick={() => openModal(instructor)}
                                    className="flex items-center text-sm cursor-pointer font-semibold text-green-400 hover:text-green-300 transition-colors group"
                                >
                                    Ver Currículo Completo
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <a
                                    href={instructor.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-white hover:scale-110 transition-all duration-200"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Renderiza o Modal */}
            <InstructorModal 
                show={isModalOpen} 
                onClose={closeModal} 
                instructor={selectedInstructor}
            />
        </section>
    );
}

export default Instructors;