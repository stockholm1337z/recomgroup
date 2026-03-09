import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Settings, 
  Key, 
  Search, 
  ArrowRight, 
  Briefcase, 
  Layers, 
  Scale, 
  Cpu, 
  Megaphone 
} from 'lucide-react';

const services = [
  {
    id: 'consulting',
    title: 'Консалтинг',
    icon: Briefcase,
    description: '',
    details: [
      'Комплексный аудит объекта',
      'Быстрая диагностика проблем и способов их решений',
      'Формирование уникальной концепции',
      'Финансовое моделирование и планирование'
    ],
    colorClass: 'liquid-grey'
  },
  {
    id: 'management',
    title: 'Управление',
    icon: Layers,
    description: '',
    details: [
      'Взаимодействие с арендаторами',
      'Контроль платежей',
      'Отчетность',
      'Формирование арендной матрицы',
      'Формирование якорных резидентов'
    ],
    colorClass: 'liquid-blue'
  },
  {
    id: 'exploitation',
    title: 'Эксплуатация',
    icon: Settings,
    description: '',
    details: [
      'Охрана',
      'Инженерия объекта',
      'Полный контроль и организация бесперебойной работы инженерных систем',
      'Оперативное устранение ЧC',
      'Работа с заявками арендаторов',
      'Сокращение расходов на содержание объекта',
      'Автоматизация объекта'
    ],
    colorClass: 'liquid-green'
  },
  {
    id: 'brokerage',
    title: 'Брокеридж',
    icon: Key,
    description: 'Поиск арендаторов и сопровождение сделок. Заполняем объекты качественными арендаторами.',
    details: ['Маркетинг', 'Показы', 'Переговоры'],
    colorClass: 'liquid-purple'
  },
  {
    id: 'legal',
    title: 'Юридическое сопровождение',
    icon: Scale,
    description: '',
    details: [
      'Претензионная работа',
      'Разработка договоров',
      'Исковые заявления',
      'Юридическая экспертиза сделок',
      'Защита интересов собственника объекта'
    ],
    colorClass: 'liquid-purple'
  },
  {
    id: 'audit',
    title: 'Аудит',
    icon: Search,
    description: 'Проверка:',
    details: [
      'Технического состояния объекта',
      'Финансового положения',
      'Арендных доходов',
      'Максимально эффективного использования площадей',
      'Расходов',
      'Эффективного возмещения затрат'
    ],
    colorClass: 'liquid-grey'
  },
  {
    id: 'automation',
    title: 'Автоматизация',
    icon: Cpu,
    description: '',
    details: [
      'Внедрение современных инструментов и технологий',
      'Онлайн контроль качества',
      'Прозрачный непрерывный контроль всех процессов на объекте',
      'Отслеживание выставленных счетов и платежей'
    ],
    colorClass: 'liquid-blue'
  },
  {
    id: 'marketing',
    title: 'Маркетинг',
    icon: Megaphone,
    description: '',
    details: [
      'Выгодное позиционирование и продвижение объекта',
      'Дизайн-навигация',
      'Внешняя реклама',
      'Внедрение программ лояльности',
      'Партнерские акции',
      'Организация мероприятий'
    ],
    colorClass: 'liquid-green'
  }
];

export function Services() {
  const [activeId, setActiveId] = useState<string>('consulting');

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
      >
        Услуги
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:h-[600px] w-full">
        {services.map((service, index) => {
          const isActive = activeId === service.id;
          
          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => setActiveId(service.id)}
              style={{ '--i': index } as React.CSSProperties}
              className={`
                relative overflow-hidden cursor-pointer shrink-0 lg:shrink
                liquid-card ${service.colorClass}
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                ${isActive 
                  ? 'h-[380px] sm:h-[350px] lg:h-auto lg:flex-[3] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10' 
                  : 'h-[72px] lg:h-auto lg:flex-[1] opacity-90 hover:opacity-100'
                }
              `}
            >
              {/* Background Gradient for Active State - Subtle overlay */}
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/10 pointer-events-none"
                />
              )}

              <div className={`absolute inset-0 flex ${isActive ? 'flex-col p-6 md:p-8' : 'flex-row lg:flex-col p-4 items-center justify-between lg:justify-start'}`}>
                
                {/* Mobile Collapsed: Icon on the left */}
                {!isActive && (
                  <div className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white/70 backdrop-blur-md border border-white/10 shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                )}

                {/* Content Container */}
                <div className={`flex-1 relative ${isActive ? 'w-full' : 'ml-4 lg:ml-0 w-full'}`}>
                  
                  {/* Collapsed Vertical Title - Only visible on desktop when collapsed */}
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden lg:flex absolute inset-0 justify-center items-start"
                    >
                      <h3 
                        className="text-xl font-bold text-white whitespace-nowrap tracking-wide drop-shadow-md"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                      >
                        {service.title}
                      </h3>
                    </motion.div>
                  )}
                  
                  {/* Collapsed Horizontal Title - Visible on mobile when collapsed */}
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="lg:hidden flex items-center h-full"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-md">{service.title}</h3>
                    </motion.div>
                  )}

                  {/* Expanded Content */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="h-full flex flex-col justify-end pb-4 lg:pb-6"
                    >
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-6 drop-shadow-lg">{service.title}</h3>
                      
                      {service.description && (
                        <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6 max-w-xl leading-relaxed drop-shadow-md font-medium">
                          {service.description}
                        </p>
                      )}
                      
                      {service.details.length > 0 && (
                        <div className="grid grid-cols-1 gap-2 md:gap-4">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-white/90">
                              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white] shrink-0" />
                              <span className="text-xs md:text-sm font-semibold tracking-wide drop-shadow-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Footer Section (Icons) */}
                <div className={`flex ${isActive ? 'justify-between w-full items-end' : 'flex-col gap-4 items-center'} mt-auto lg:mt-auto`}>
                  {/* Desktop Collapsed or Any Expanded: Icon */}
                  <div className={`
                    ${!isActive ? 'hidden lg:flex' : 'flex'}
                    w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center
                    transition-colors duration-300
                    ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'}
                    backdrop-blur-md border border-white/10
                  `}>
                    <service.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  
                  {/* Arrow Icon that rotates */}
                  <div className={`
                    w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0
                    transition-all duration-500 backdrop-blur-md
                    ${isActive ? 'rotate-0 bg-white/20 text-white' : '-rotate-45 bg-transparent text-white/50'}
                  `}>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
