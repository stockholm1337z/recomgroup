import { motion } from 'motion/react';
import { Tile } from './Tile';

const cases = [
  {
    id: 1,
    title: 'Мебельный Торговый Центр',
    image: '/photo/furniture store.png',
    gradient: 'from-orange-500 to-purple-600',
    points: [
      'Разработка концепции ТЦ с 0',
      'Заполнение на 98% за 7 месяцев',
      'Увеличение доходности объекта на 50% за 2,5 года',
      'Окупаемость объекта за 3 года 7 месяцев',
      'Увеличение рыночной стоимости объекта в 2,5 раза за 3 года'
    ]
  },
  {
    id: 2,
    title: 'Торговый комплекс',
    image: '/photo/tk.png',
    gradient: 'from-yellow-400 to-emerald-500',
    points: [
      'Реконцепция ТК',
      'Внутренняя перепланировка',
      'Изменение матрицы арендаторов',
      'Увеличение эффективности использования торговых площадей на 15%',
      'Увеличение доходности объекта на 40%'
    ]
  },
  {
    id: 3,
    title: 'Бизнес-центр',
    image: '/photo/elite.png',
    gradient: 'from-blue-500 to-cyan-400',
    points: [
      'Операционное управление объектом',
      'Внедрение автоматизированной системы управления',
      'Оптимизация штата сотрудников, разгрузка платежной ведомости на 37%',
      'Юридически защитили БЦ от закрытия по иску МЧС в суде',
      'Решили вопросы с пожарной безопасностью'
    ]
  },
  {
    id: 4,
    title: 'Складские площади',
    image: '/photo/warehouse.png',
    gradient: 'from-pink-500 to-rose-500',
    points: [
      'Перепрофилировали неликвидный актив в складские площади',
      'Просчитали новую модель',
      'Провели переговоры с арендаторами',
      'Провели реконструкцию с минимальными вложениями',
      'Осуществили заселение арендаторами',
      'Выход на высокую доходность в течении 1,5 лет'
    ]
  },
  {
    id: 5,
    title: 'Торгово-развлекательный центр',
    image: '/photo/shopping-center.png',
    gradient: 'from-emerald-400 to-cyan-500',
    points: [
      'Элитный ТЦ попал под массовый уход западных брендов',
      'Оперативно провели переговоры по их замене на других престижных арендаторов генерирующих трафик ТЦ',
      'Создали новые уникальные зоны (такие как гастрономические, арт-зоны, закрытые клубы и т.п.)'
    ]
  },
  {
    id: 6,
    title: 'Бизнес-центр',
    image: '/photo/bissines.png',
    gradient: 'from-indigo-500 to-purple-500',
    points: [
      'Ухудшение экономической ситуации привело к убыткам по аренде и претензионной работе',
      'Оперативно провели претензионную работу',
      'Разбили арендуемую площадь на несколько более мелких',
      'Заселили по более высокой ставке в сжатые сроки',
      'Параллельно увеличили доход, уменьшили риски при съезде арендаторов'
    ]
  }
];

export function Cases() {
  return (
    <section id="cases" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center md:text-left"
        >
          Кейсы
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <Tile 
              key={item.id} 
              className="!p-0 group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 h-full min-h-[550px]"
              delay={index * 0.1}
            >
              {/* Full Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />
              
              {/* Subtle gradient for title readability in default state */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 opacity-0 lg:opacity-100 lg:group-hover:opacity-0" />
              
              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col">
                {/* Glass Background - Fades in on hover */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Colorful top border line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-100 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500 z-10`} />
                
                <div className="p-6 md:p-8 relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                  
                  {/* Points - Collapsed initially */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <ul className="space-y-3 pt-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/90 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} shrink-0 mt-1.5`} />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
}
