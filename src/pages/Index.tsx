import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-black">
            BusinessPro
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">О нас</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            <a href="#contacts" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            Консультация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl font-bold text-black mb-6 leading-tight">
            Стратегии роста
            <br />
            <span className="text-gray-400">для вашего бизнеса</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Помогаем компаниям достичь амбициозных целей через аналитику данных и проверенные стратегии развития
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Начать проект
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
              Изучить кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">О компании</h2>
            <p className="text-xl text-gray-600">
              15 лет опыта в бизнес-консалтинге. Помогли более 200 компаниям увеличить прибыль на 40-150%
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Стратегический анализ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Глубокая аналитика рынка и конкурентов для принятия обоснованных решений
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="BarChart3" size={48} className="mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Оптимизация процессов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Повышение эффективности бизнес-процессов и снижение операционных затрат
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Target" size={48} className="mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Достижение KPI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Постановка измеримых целей и контроль их выполнения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Услуги</h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для роста и развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200 p-8">
              <CardHeader>
                <Icon name="Briefcase" size={32} className="mb-4 text-black" />
                <CardTitle className="text-2xl mb-4">Бизнес-стратегия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Разработка долгосрочной стратегии развития компании</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Анализ рынка и конкурентов
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    SWOT-анализ компании
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Roadmap развития на 3-5 лет
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 p-8">
              <CardHeader>
                <Icon name="LineChart" size={32} className="mb-4 text-black" />
                <CardTitle className="text-2xl mb-4">Аналитика данных</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Превращение данных в инсайты для бизнеса</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Настройка систем аналитики
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Создание дашбордов
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Прогнозирование трендов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 p-8">
              <CardHeader>
                <Icon name="Users" size={32} className="mb-4 text-black" />
                <CardTitle className="text-2xl mb-4">Управление изменениями</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Сопровождение трансформации бизнес-процессов</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Обучение команды
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Внедрение новых процессов
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Контроль результатов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 p-8">
              <CardHeader>
                <Icon name="Zap" size={32} className="mb-4 text-black" />
                <CardTitle className="text-2xl mb-4">Экстренная помощь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Быстрые решения для критических ситуаций</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Антикризисное управление
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Финансовое оздоровление
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Реструктуризация бизнеса
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Портфолио</h2>
            <p className="text-xl text-gray-600">
              Результаты наших клиентов говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200">
              <CardHeader>
                <img 
                  src="/img/ac7a5145-ad98-4e7d-be97-0e9bcd10d2d9.jpg" 
                  alt="Проект 1" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">ТехноМедиа</CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  Увеличение прибыли на 120% за 18 месяцев через оптимизацию логистики
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold">+120%</span>
                  <span className="text-gray-500">прибыль</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <img 
                  src="/img/09b1ea18-40a0-4202-bec9-e94b6ee3058a.jpg" 
                  alt="Проект 2" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">АгроИмпорт</CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  Выход на новые рынки и масштабирование бизнеса в 3 регионах
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold">3x</span>
                  <span className="text-gray-500">рост рынков</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <img 
                  src="/img/e90f0143-56a4-49e5-a901-64a775c5828b.jpg" 
                  alt="Проект 3" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">ФинтехСтарт</CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  Цифровая трансформация и автоматизация процессов сократили затраты на 45%
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold">-45%</span>
                  <span className="text-gray-500">затраты</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Посмотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">200+</div>
              <p className="text-gray-600">Успешных проектов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">15</div>
              <p className="text-gray-600">Лет на рынке</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">95%</div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="px-6 py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-black" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-600">info@businesspro.ru</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-black" />
                <div>
                  <h3 className="font-semibold text-black">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={24} className="text-black" />
                <div>
                  <h3 className="font-semibold text-black">Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Тверская, 10</p>
                </div>
              </div>
            </div>

            <Card className="border border-gray-200 p-6">
              <CardHeader>
                <CardTitle className="text-xl text-black">Написать нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Тема сообщения" />
                <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-black mb-4">BusinessPro</div>
              <p className="text-gray-600 text-sm">
                Стратегический консалтинг для роста вашего бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Бизнес-стратегия</li>
                <li>Аналитика данных</li>
                <li>Управление изменениями</li>
                <li>Экстренная помощь</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-4">Связь</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@businesspro.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Тверская, 10</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 BusinessPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}