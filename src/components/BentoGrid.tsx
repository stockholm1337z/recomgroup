import { Building2, MapPin, Cpu, Zap, Layers, Shield, TrendingUp, FileText } from 'lucide-react';
import { Tile } from './Tile';

export function BentoGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(240px,auto)]">
        
        {/* Tile 1: Experience (Large) - Spans 2 cols, 2 rows */}
        <Tile className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px]" delay={0.1}>
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-semibold text-white">Наш Опыт</h3>
            <Building2 className="w-10 h-10 text-[#00D4FF]" />
          </div>
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-white/80">
                <Shield className="w-5 h-5 text-[#007AFF]" />
                <span className="text-sm font-medium uppercase tracking-wider">Надёжность</span>
             </div>
             <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
               Более 15 лет превращаем квадратные метры в работающие активы.
             </p>
             <p className="text-base text-white/60">
               Берем на себя всё: от замены лампочки до оптимизации налогообложения. Вы получаете прибыль, мы решаем проблемы.
             </p>
          </div>
        </Tile>

        {/* Tile 2: Coverage (Medium) - Spans 2 cols */}
        <Tile className="md:col-span-2 flex flex-col justify-between" delay={0.2}>
           <div className="flex justify-between items-start">
            <h3 className="text-2xl font-semibold text-white">Объекты</h3>
            <MapPin className="w-8 h-8 text-[#00D4FF]" />
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2">500,000+ м²</div>
            <p className="text-white/60">в управлении по всей стране</p>
          </div>
        </Tile>

        {/* Tile 3: Tech (Small) */}
        <Tile className="md:col-span-1 flex flex-col justify-between" delay={0.3}>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">IT-Решения</h3>
            <Cpu className="w-6 h-6 text-[#00D4FF]" />
          </div>
          <div>
            <p className="text-white/80 mb-2">Мониторинг 24/7</p>
            <p className="text-xs text-white/50">
              Внедряем системы автоматизации, снижая расходы до 30%.
            </p>
          </div>
        </Tile>

        {/* Tile 4: Speed (Small) */}
        <Tile className="md:col-span-1 flex flex-col justify-between" delay={0.4}>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">Оперативность</h3>
            <Zap className="w-6 h-6 text-[#00D4FF]" />
          </div>
           <div>
            <p className="text-white/80 mb-2">Реакция до 15 мин</p>
            <p className="text-xs text-white/50">
              Мгновенное реагирование на любые инциденты.
            </p>
          </div>
        </Tile>

      </div>
    </section>
  );
}
