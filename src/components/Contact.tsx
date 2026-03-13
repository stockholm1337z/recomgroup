import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    objectType: 'Бизнес-центр',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus('Отправка...');

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: 'Новая заявка с сайта ReCom Group',
      from_name: 'ReCom Group Website',
      name: formData.name,
      phone: formData.phone,
      objectType: formData.objectType,
      message: formData.message,
      botcheck: '',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Заявка успешно отправлена');
        setFormData({
          name: '',
          phone: '',
          objectType: 'Бизнес-центр',
          message: '',
        });
      } else {
        setStatus('Не удалось отправить заявку');
      }
    } catch (error) {
      setStatus('Ошибка соединения. Попробуйте позже');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Готовы обсудить ваш объект?
          </motion.h2>
          <p className="text-xl text-white/60 mb-12">
            Оставьте заявку, и мы подготовим предварительный расчет эффективности управления вашим зданием.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="w-5 h-5 text-[#007AFF]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Офис</div>
                <div className="text-lg">г. Москва ул. Василисы Кожиной 1</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Phone className="w-5 h-5 text-[#007AFF]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Телефон</div>
                <div className="text-lg">+7(969)344-22-77</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-[#007AFF]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Email</div>
                <div className="text-lg">recomgroup@mail.ru</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#007AFF] focus:bg-white/10 transition-all"
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#007AFF] focus:bg-white/10 transition-all"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-2">Тип объекта</label>
              <select
                name="objectType"
                value={formData.objectType}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#007AFF] focus:bg-white/10 transition-all appearance-none"
              >
                <option className="bg-[#05050b]" value="Бизнес-центр">Бизнес-центр</option>
                <option className="bg-[#05050b]" value="Торговый центр">Торговый центр</option>
                <option className="bg-[#05050b]" value="Складской комплекс">Складской комплекс</option>
                <option className="bg-[#05050b]" value="Другое">Другое</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-2">Сообщение</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#007AFF] focus:bg-white/10 transition-all resize-none"
                placeholder="Расскажите о вашей задаче..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#007AFF] hover:bg-[#0066CC] text-white font-medium py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>

            {status && (
              <p className="text-sm text-white/60 text-center">
                {status}
              </p>
            )}

            <p className="text-xs text-white/30 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
