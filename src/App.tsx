import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  BarChart3,
  Rocket,
  Link,
  TrendingUp,
  MessageCircle,
  Newspaper,
  GraduationCap,
  Megaphone,
  Palette,
  BrainCircuit,
  Users,
  Copyright,
  Paintbrush,
  Music,
  Instagram
} from 'lucide-react';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Impulsione seus lançamentos",
      description: "Chega de postar sem estratégia e esperar milagres! Maximize seu alcance no YouTube e Instagram."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Analytics Centralizado",
      description: "Dados de desempenho de todas as plataformas em um só lugar. Tome decisões baseadas em dados reais."
    },
    {
      icon: <Link className="w-8 h-8 text-blue-500" />,
      title: "Páginas Personalizadas",
      description: "Crie landing pages profissionais para divulgar sua música e pré-saves."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Análise de Performance",
      description: "Entenda o desempenho dos seus posts e descubra o que mais engaja."
    },
    {
      icon: <Instagram className="w-8 h-8 text-blue-500" />,
      title: "Saúde da Carreira",
      description: "Monitore seu crescimento nas redes sociais e streaming."
    },
    {
      icon: <Newspaper className="w-8 h-8 text-blue-500" />,
      title: "Tendências do Mercado",
      description: "Fique por dentro das novidades e aplique primeiro que todos."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Cursos Certificados",
      description: "Aprenda estratégias comprovadas para crescer sua carreira."
    }
  ];

  const painPoints = [
    "Você se dedica, lança sua música e... nada acontece?",
    "Gasta dinheiro em tráfego pago e não vê retorno?",
    "Não sabe como analisar seus números ou onde melhorar?",
    "Sente que está sempre correndo atrás, sem planejamento?"
  ];

  const wrongWay = [
    "Postar sua música e esperar plays caírem do céu",
    "Jogar dinheiro em divulgação sem estratégia",
    "Acreditar que viralizar depende só de sorte",
    "Sentir-se perdido, sem saber quais passos dar"
  ];

  const rightWay = [
    "Ter um plano estratégico e saber onde investir",
    "Entender seu público e o que funciona para ele",
    "Usar dados reais para tomar decisões inteligentes",
    "Ter clareza no caminho para crescer e monetizar sua arte"
  ];

  const courses = [
    {
      title: "Planejamento de marketing para lançamentos",
      icon: <Megaphone className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Como desenvolver seu projeto artístico",
      icon: <Palette className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Gestão de carreira",
      icon: <BrainCircuit className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Criatividade na música",
      icon: <Paintbrush className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Marketing de comunidades",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Descomplicando direitos autorais",
      icon: <Copyright className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Branding para artistas",
      icon: <Star className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Descomplicando Spotify for Artists",
      icon: <Music className="w-8 h-8 text-blue-500" />
    }
  ];

  const carouselImages = [
    "https://amplifyus.app/wp-content/uploads/2025/02/1.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/2.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/3.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/4.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/5.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/6.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/7.jpg",
    "https://amplifyus.app/wp-content/uploads/2025/02/8.jpg"
  ];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => setIsVideoPlaying(false);
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://amplifyus.app/wp-content/uploads/2025/02/AmplifyUs_LogoCores_Branca.png" 
            alt="AmplifyUs Logo" 
            className="h-16"
          />
         <a href="https://amplifyus.app/plano/"> 
          <button className="bg-green-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Começar Agora
          </button></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tenha Ouvintes, Atraia Fãs e Faça Sua Música Ser Ouvida!
          </h1>
          
          {/* Main Video */}
          <div className="relative w-1/3 mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full aspect-[9/16] object-cover rounded-xl"
              poster="https://amplifyus.app/wp-content/uploads/2025/02/amplifyus_promocional1080p.jpg"
            >
              <source src="https://storage-amplifyus.s3.us-east-1.amazonaws.com/videos-landing-page/amplifyus_promocional+(1080p).mp4" type="video/mp4" />
            </video>
            {!isVideoPlaying && (
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-all group"
              >
                <Play className="w-20 h-20 text-white group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>

          {/* Pain Points */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Você já sentiu que sua música merecia mais reconhecimento, mas não sabia como fazer isso acontecer?
            </h2>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-gray-800/50 p-4 rounded-lg">
                  <span className="text-2xl">
                    {["😩", "📉", "🔍", "🌀"][index]}
                  </span>
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Statement */}
          <div className="bg-blue-600/20 p-8 rounded-2xl mb-12">
            <p className="text-xl mb-6">
              O AmplifyUs resolve tudo isso com ferramentas inteligentes de marketing e gestão de carreira para crescer sem depender de gravadoras ou grandes investidores.
            </p>
            <p className="text-lg mb-6">
              🎯 Descubra como atrair ouvintes, transformar fãs em seguidores fiéis e criar oportunidades reais na música.
            </p>
            <a href="https://amplifyus.app/plano/">
            <button className="bg-green-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
            
              QUERO ME DESTACAR NA MÚSICA!
            </button></a>
          </div>

  {/*  CTA 1 */}
<section className="py-20">
  <div className="max-w-3xl mx-auto px-4 text-center border-2 border-blue-500 p-6">
    <h2 className="text-4xl font-bold mb-6">
      🎯 Teste Grátis por 7 Dias – Amplifique Sua Música Sem Riscos! 🎶🚀
    </h2>
    <p className="text-xl mb-8">
      Já gastou dinheiro com impulsionamento e não viu retorno?<br />
      Agora você pode testar tudo gratuitamente e ver na prática como o AmplifyUs pode transformar sua carreira!
    </p>
    <ul className="space-y-4 text-left mb-12">
      <li className="flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
        <span>Acesse ferramentas exclusivas para planejamento, marketing e análise de desempenho.</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
        <span>Experimente estratégias testadas por artistas independentes de sucesso.</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
        <span>Explore o AmplifyUs PRO sem compromisso – se não for para você, é só cancelar dentro do período de teste, sem cobranças!</span>
      </li>
    </ul>
    <a href="https://ampfy.us/r/lp-a-anual">
    <button className="bg-green-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
   
      QUERO TESTAR GRATUITAMENTE!
    </button></a>
  </div>
</section>

          

          {/* Right vs Wrong Way */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Como ter uma carreira rentável?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                  <XCircle className="w-8 h-8 text-red-500" />
                  O Jeito Errado
                </h3>
                <ul className="space-y-4">
                  {wrongWay.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-left">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  O Jeito Certo
                </h3>
                <ul className="space-y-4">
                  {rightWay.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-left">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
<div className="w-full md:w-3/4 lg:w-1/2 mx-auto mb-20">
  <div className="relative overflow-hidden">
    <div 
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {carouselImages.map((image, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {carouselImages.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            currentSlide === index ? 'bg-blue-500 w-4' : 'bg-white/50'
          }`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            💡 O Que o AmplifyUs Faz por Você?
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Muitos artistas desistem porque não têm tempo, dinheiro ou conhecimento para gerenciar a própria carreira. 
            O AmplifyUs faz esse trabalho por você, sem burocracia e com ferramentas fáceis de usar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Last feature centered */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 max-w-md">
              <div className="mb-4">
                {features[6].icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{features[6].title}</h3>
              <p className="text-gray-400">{features[6].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Histórias de Sucesso
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden">
              <video className="w-full" controls poster="https://amplifyus.app/wp-content/uploads/2025/02/depoimento1.jpg">
                <source src="https://storage-amplifyus.s3.us-east-1.amazonaws.com/videos-landing-page/depoimento-samuel-palmeira.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <video className="w-full" controls poster="https://amplifyus.app/wp-content/uploads/2025/02/depoimento2.jpg">
                <source src="https://storage-amplifyus.s3.us-east-1.amazonaws.com/videos-landing-page/depoimento-august.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="mt-12">
         <a href="https://amplifyus.app/plano/">
          <button className="bg-green-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
          
            QUERO COMEÇAR
          </button></a></div>
      </section>

   {/* Courses Section */}
<section className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-6">
      🎥 Cursos Exclusivos do AmplifyUs
    </h2>
    <p className="text-xl text-center mb-16 max-w-2xl mx-auto">
      📚 Já sentiu que ninguém ensina como crescer na música sem gastar fortunas?<br />
      🎓 Nossos cursos são direto ao ponto e feitos para artistas independentes!
    </p>
    
    <div className="mb-16">
      <video 
        className="w-full max-w-4xl mx-auto rounded-xl" 
        controls
        poster="https://amplifyus.app/wp-content/uploads/2025/02/cover-curso.jpg"
      >
        <source 
          src="https://storage-amplifyus.s3.us-east-1.amazonaws.com/projeto-artistico/CursoAnaDalfeor-Aula1-003.mp4" 
          type="video/mp4" 
        />
      </video>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <div 
          key={index} 
          className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all"
        >
          {course.icon}
          <p className="font-semibold mt-4">{course.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            💰 Quanto Custa?
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-8">
                🎯 PARE DE PERDER DINHEIRO EM DIVULGAÇÃO SEM RESULTADO!
              </h3>
              <div className="space-y-4 text-left mb-8">
                <p className="text-xl">💸 Quanto você gasta tentando crescer?</p>
                <ul className="space-y-2">
                  <li>📢 Um gestor de tráfego cobra entre R$1.000 e R$3.000 para campanhas no Instagram ou YouTube.</li>
                  <li>📢 Um social media custa de R$800 a R$3.500 para analisar sua performance.</li>
                  <li>📢 Cursos de capacitação para músicos saem entre R$100 e R$300 cada.</li>
                </ul>
              </div>
            </div>
           <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
           O AmplifyUs faz tudo isso, e mais, por apenas:
          </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4">💳 Plano Mensal</h4>
                <div className="mb-4">
                  <span className="text-gray-400 line-through">R$34,99</span>
                  <p className="text-3xl font-bold">R$27,97<span className="text-sm font-normal">/mês</span></p>
                </div>
                <a href="https://ampfy.us/r/lp-a-mensal">
                <button className="w-full bg-green-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                  Começar Agora
                </button></a>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border-2 border-blue-500 relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-sm font-semibold px-4 py-1 rounded-full">
                  Mais Vantajoso
                </span>
                <h4 className="text-xl font-bold mb-4">💳 Plano Anual</h4>
                <div className="mb-4">
                  <p className="text-3xl font-bold">R$19,97<span className="text-sm font-normal">/mês</span></p>
                  <p className="text-sm text-gray-400">Total: R$239,64/ano</p>
                </div>
                <a href="https://ampfy.us/r/lp-a-anual">
                <button className="w-full bg-green-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                  Economizar Agora
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            🎁 BÔNUS EXCLUSIVO!
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              🔥 Baixando o AmplifyUs agora, você ganha dois guias essenciais para sua carreira:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">📘 Guia de Lançamento para Artistas</h3>
                <p>Aprenda a estruturar seu lançamento de forma estratégica e eficiente!</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">📗 Guia de Carreira</h3>
                <p>"De Paixão a Profissão – O Caminho para a Autonomia Artística"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🎯 Teste Grátis por 7 Dias – Amplifique Sua Música Sem Riscos! 🎶🚀
          </h2>
          <p className="text-xl mb-8">
            Já gastou dinheiro com impulsionamento e não viu retorno?<br />
            Agora você pode testar tudo gratuitamente e ver na prática como o AmplifyUs pode transformar sua carreira!
          </p>
          <ul className="space-y-4 text-left mb-12">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span>Acesse ferramentas exclusivas para planejamento, marketing e análise de desempenho.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span>Experimente estratégias testadas por artistas independentes de sucesso.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span>Explore o AmplifyUs PRO sem compromisso – se não for para você, é só cancelar dentro do período de teste, sem cobranças!</span>
            </li>
          </ul>
          <a href="https://amplifyus.app/plano/">
          <button className="bg-green-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
          
            QUERO TESTAR GRATUITAMENTE!
          </button></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://amplifyus.app/wp-content/uploads/2025/02/AmplifyUs_LogoCores_Branca.png" 
              alt="AmplifyUs Logo" 
              className="h-16"
            />
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2025 AmplifyUs. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;