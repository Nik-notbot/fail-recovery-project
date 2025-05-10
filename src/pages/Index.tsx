
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7f9] to-[#e5deff]">
      {/* Навигация */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#1A1F2C]">Поехали!</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Возможности</a>
          <a href="#about" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">О нас</a>
          <a href="#contact" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Контакты</a>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Начать
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="w-6 h-6" />
        </Button>
      </nav>

      {/* Героический блок */}
      <section className="px-8 md:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F2C] mb-6 leading-tight animate-fade-in">
            Новый уровень<br />
            <span className="text-[#9b87f5]">веб-разработки</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Создавайте впечатляющие веб-приложения быстрее и качественнее с нашей инновационной платформой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
              <Icon name="Play" className="mr-2 h-4 w-4" />
              Посмотреть демо
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#FFDEE2] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#9b87f5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Dashboard" 
              className="relative z-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section id="features" className="px-8 md:px-16 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Передовые технологии и инновационные решения для создания современных веб-приложений</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-[#9b87f5]/20">
              <CardContent className="p-6">
                <div className="bg-[#e5deff] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="px-8 md:px-16 py-20 bg-[#f7f7f9]">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#9b87f5] rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Our Team" 
                className="relative z-10 rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-6">О нашей миссии</h2>
            <p className="text-gray-600 mb-6">
              Мы команда увлеченных разработчиков и дизайнеров, объединенных общей целью — сделать веб-разработку доступной, эффективной и приятной для всех.
            </p>
            <p className="text-gray-600 mb-6">
              Наша платформа создана для того, чтобы устранить технические барьеры и позволить вам сосредоточиться на творчестве и инновациях.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#e5deff] rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon name="Check" className="w-4 h-4 text-[#9b87f5]" />
                </div>
                <span className="text-gray-700">Более 5 лет опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#e5deff] rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon name="Users" className="w-4 h-4 text-[#9b87f5]" />
                </div>
                <span className="text-gray-700">10,000+ пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#e5deff] rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon name="Star" className="w-4 h-4 text-[#9b87f5]" />
                </div>
                <span className="text-gray-700">Рейтинг 4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты и футер */}
      <section id="contact" className="px-8 md:px-16 py-20 bg-[#1A1F2C] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Поехали!</h3>
              <p className="text-gray-300 mb-6">
                Современная платформа для быстрой и эффективной веб-разработки.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Icon name="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Icon name="Github" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Icon name="Linkedin" className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Ссылки</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
                <li><a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-gray-300 hover:text-white transition-colors">Сообщество</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Подпишитесь</h3>
              <p className="text-gray-300 mb-4">Получайте обновления и новости о новых функциях</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] text-white w-full"
                />
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] rounded-l-none">
                  <Icon name="Send" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Поехали! Все права защищены.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Данные для блока преимуществ
const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    description: "Оптимизированная производительность для мгновенной загрузки и плавной работы приложений."
  },
  {
    icon: "Layout",
    title: "Адаптивный дизайн",
    description: "Создавайте интерфейсы, которые идеально выглядят на всех устройствах и экранах."
  },
  {
    icon: "ShieldCheck",
    title: "Безопасность",
    description: "Встроенные механизмы защиты для обеспечения безопасности ваших данных и пользователей."
  },
  {
    icon: "Puzzle",
    title: "Модульная структура",
    description: "Используйте компоненты, которые легко комбинировать для создания сложных интерфейсов."
  },
  {
    icon: "Palette",
    title: "Настраиваемый стиль",
    description: "Полная гибкость в настройке внешнего вида вашего приложения под любой бренд."
  },
  {
    icon: "Code",
    title: "Чистый код",
    description: "Профессиональная архитектура кода для легкого поддержания и масштабирования."
  }
];

export default Index;
