import { Trophy, Zap } from 'lucide-react';
import GuardaFechada from '../assets/image/guardafechada.avif'
import Costas from '../assets/image/costas.avif'
import ArmLock from '../assets/image/armlock.avif'
import Kimura from '../assets/image/kimura.avif'
import DefesasFinalizacoes from '../assets/image/defesasasdefinalizacoes.avif'
import Triangulo from '../assets/image/triangulo.avif'
import PassagemGurda from '../assets/image/passagensdeguarda.avif'
import Heelhook from '../assets/image/heelhook.avif'
import QuedasHabilidades from '../assets/image/quedas.avif'
import Guarda from '../assets/image/guarda.avif'
import Sankaku from '../assets/image/sankaku.avif'
import SegredosHeel from '../assets/image/segredosheel.avif'
import Quedas2 from '../assets/image/quedas2.avif'
import AtacandoMontada from '../assets/image/atacandodamontada.avif'

const courses = [
  {
    id: 1,
    title: 'Guarda Fechada',
    instructor: 'Marco Aurellio de Queiroz',
    price: 97,
    image: GuardaFechada,
    description: 'Aprenda a atacar e finalizar o oponente a partir da guarda fechada, cobrindo finalizações clássicas e ajustes para quando o adversário se defende ou se levanta.',
    highlights: ['Guarda', 'Ataque', 'Finalização', 'Variações']
  },
  {
    id: 2,
    title: 'Costas',
    price: 249,
    image: Costas,
    description: 'Aprenda a manter, ajustar e finalizar a partir da pegada de costas, dominando variações de estrangulamento, chaves de braço e perna, e o uso estratégico do crucifixo e do ushiro sankaku.',
    highlights: ['Costas', 'Crucifixo', 'Finalização', 'Chaves']
  },
  {
    id: 3,
    title: 'Arm Lock',
    price: 147,
    image: ArmLock,
    description: 'Aprenda a aplicar a chave de braço em todas as posições, dominando ataques de alta velocidade da guarda, da montada e do 100 quilos, além de desenvolver ajustes técnicos para isolar o braço, anular a defesa e fazer transições de ataque.',
    highlights: ['Armlock', 'Velocidade', 'Controle', 'Transição']
  },
  {
    id: 4,
    title: 'Kimura',
    price: 197,
    image: Kimura,
    description: 'Domine a Kimura em todas as suas formas (dorsal, lateral, Trimura), aprendendo transições essenciais para chaves de braço, Mata Leão e ataques de perna. O curso cobre aplicações em pé, meia guarda, norte-sul e quatro apoios, transformando a Kimura na base de seu ataque versátil.',
    highlights: ['Kimura', 'Transições', 'Variações', 'Tarikoplata']
  },
  {
    id: 5,
    title: 'Defesas de Finalizações',
    price: 197,
    image: DefesasFinalizacoes,
    description: 'Domine a defesa contra todas as finalizações essenciais, focando em escapar da Guilhotina, rodar e posturar contra o Armlock e Triângulo, e desarmar a mecânica da Kimura.',
    highlights: ['Calcanhar (Heel Hook)', 'Defesa', 'Escape', 'Guilhotina',]
  },
  {
    id: 6,
    title: 'Triângulo',
    price: 197,
    image: Triangulo,
    description: 'Domine o Triângulo em suas formas frontal (Omote), lateral (Yoko) e traseira (Ushiro), a partir da guarda fechada, sentada, 100 quilos e montada. Aprenda exercícios fundamentais, transições para o Heel Hook e Kimura, e estratégias avançadas para usar o Triângulo na defesa de quedas e em situações de dog fight, tornando-o sua finalização mais versátil.',
    highlights: ['Triângulo', 'Sankaku', 'Transição', 'Treinamento',]
  },
  {
    id: 7,
    title: 'Passagens de Guarda',
    price: 297,
    image: PassagemGurda,
    description: 'Domine as três principais estratégias de passagem (Toreada, Flutuação e Bodylock). Aprenda os fundamentos do footwork e os métodos ideais para abrir a guarda fechada, neutralizar desequilíbrios e quebrar as defesas mais resistentes, como o knee shield, garantindo a estabilização e a transição para posições de domínio.',
    highlights: ['Passagem', 'Toreada', 'Bodylock', 'Footwork', 'Anulação']
  },
  {
    id: 8,
    title: 'Hellhook',
    price: 247,
    image: Heelhook,
    description: 'Domine o sistema completo de Retenção e Reposição de Guarda, utilizando movimentos de fuga de quadril e o controle das "Leis" do corpo. Construa transições avançadas a partir da Guarda X e De La Riva Reversa, focando na finalização imediata com um vasto arsenal de ataques de perna, incluindo heel hooks da guarda fechada.',
    highlights: ['Retenção', 'Reposição', 'Leglocks', 'Guarda X', 'Transição']
  },
  {
    id: 9,
    title: 'Quedas e Habilidades',
    price: 297,
    image: QuedasHabilidades,
    description: 'Domine o Wrestling e o Judô para Grappling. Aprenda a executar as quedas Double Leg e Single Leg em diversas variações, conectando-as a finalizações em pé (Ankle Pick, Knee Pick) e ao controle estratégico via Body Lock. Desenvolva sua postura, distância e a habilidade de pontuar no combate em pé.',
    highlights: ['Quedas', 'Wrestling', 'Bodylock', 'Snapdown', 'Combate Em Pé']
  },
  {
    id: 10,
    title: 'Guarda',
    price: 197,
    image: Guarda,
    description: 'Aprenda o sistema de ataque da guarda focado em desequilíbrio e dilemas. Domine reversões de Wrestle-up, Tripé e Sumi Gaeshi, e utilize a Guarda X como plataforma principal. O curso ensina a converter a elevação de quadril em finalizações (Triângulo, Headlocks) e pegadas de costas instantâneas.',
    highlights: ['Reversão', 'Guarda X', 'Dilemas', 'WrestleUp', 'Finalização']
  },
  {
    id: 11,
    title: 'Sankaku',
    price: 197,
    image: Sankaku,
    description: 'Falta essa página',
    highlights: []
  },
  {
    id: 12,
    title: 'Segredos do Heel Hook',
    price: 137,
    image: SegredosHeel,
    description: 'Aprenda o sistema completo da Guarda One Leg X, desde os conceitos básicos e drills de fluidez até a evolução direta para o Cross Ashi Garami. Domine o ataque de Heel Hook e desenvolva defesas e passagens específicas para anular essa guarda.',
    highlights: ['OneLegX', 'CrossAshi', 'Heelhook', 'Drills', 'Defesas']
  },
  {
    id: 13,
    title: 'Quedas e Habilidades em Pé',
    price: 137,
    image: Quedas2,
    description: 'Domine a luta em pé e a transição para o solo. Aprenda a conectar ataques de Arm Drag e 2-em-1, finalizar com Headlocks (Guilhotina, Darce, Anaconda) e garantir as costas no 4 apoios. O curso também oferece defesas essenciais de quedas (Sprawl, Limp Leg) para anular a ofensiva do oponente.',
    highlights: ['Wrestling', 'Transição', 'Headlocks', 'Apoios', 'Quedas']
  },
  {
    id: 14,
    title: 'Atacando na Montada',
    price: 129,
    image: AtacandoMontada,
    description: 'Domine as posições superiores, focando em estabilizar a Montada e o 100 quilos usando o Underhook e o Knee Drive. O curso ensina a encadear finalizações de alto percentual, como Kata Gatame, Juji Gatame e Triângulo, com transições diretas para a Pegada de Costas (Ushiro Sankaku).',
    highlights: ['Montada', 'Estabilização', 'KataGatame', 'JujiGatame', 'Costas']
  },
];

function Course() {
  return (
    <div className="min-h-screen bg-[#1E1E28]">
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Cursos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 h-full flex flex-col hover:border-green-500 transition-all duration-300 ease-in-out hover:shadow-green-500/10 shadow-lg hover:scale-[1.02] cursor-default hover:ring-2 hover:ring-green-500/50 hover:ring-offset-2 hover:ring-offset-[#1E1E28]"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2">{course.title}</h4>

                  <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-4">{course.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {course.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700 mt-auto">
                    <div>
                      <p className="text-slate-400 text-xs">Instructor</p>
                      <p className="text-white font-semibold">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-500">R${course.price}</p>
                      <button className="cursor-pointer mt-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2">
                        <span>Comprar</span>
                        <Zap className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-slate-800/70 border border-slate-700/50 rounded-xl max-w-4xl mx-auto shadow-2xl">
            <p className="text-green-400 text-lg font-semibold">
              Tenha acesso às aulas em tempo real na Pirâmide Grappling.
            </p>
            <h4 className="text-white text-3xl font-bold mt-2 mb-6">
              Mais de 600 aulas disponíveis.
            </h4>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="flex items-center justify-center space-x-2 cursor-pointer 
                                     bg-slate-700/50 text-slate-200 px-8 py-3 rounded-lg font-semibold 
                                     hover:bg-green-500/10 hover:text-green-400 border border-slate-700 
                                     hover:border-green-500 transition-all duration-200">
                <span>ASSINAR CONTEÚDO MENSAL</span>
              </button>

              <button className="flex items-center justify-center space-x-2 cursor-pointer 
                                     bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                                     px-8 py-3 rounded-lg font-bold 
                                     hover:from-green-600 hover:to-emerald-700 
                                     shadow-lg shadow-green-500/30 transition-all duration-200">
                <span>ASSINAR CONTEÚDO ANUAL</span>
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/40 backdrop-blur-md border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Trophy className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold text-white">All Fighters</h2>
          </div>
          <p className="text-slate-400 mb-6">Transform your grappling skills with expert instruction</p>
          <p className="text-slate-500 text-sm">&copy; 2025 All Fighters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Course;