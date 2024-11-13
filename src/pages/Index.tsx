import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Search } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "AI-Powered Eye Care",
    description: "Revolutionary technology for better vision health",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Advanced Diagnostics",
    description: "Early detection for better treatment outcomes",
  },
  {
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    title: "24/7 AI Assistant",
    description: "Get instant answers to your eye care questions",
  },
];

const features = [
  {
    title: "Chat With AI Assistant",
    description: "Get instant answers about your eye health concerns",
    icon: "💬",
  },
  {
    title: "Medical History Search",
    description: "Access and search your complete ocular health records",
    icon: "🔍",
  },
  {
    title: "AI Diagnostics",
    description: "Advanced AI-powered eye condition detection",
    icon: "🤖",
  },
  {
    title: "Retina & Iris Scanning",
    description: "Cutting-edge scanning technology for early detection",
    icon: "👁️",
  },
];

const stats = [
  { value: "50K+", label: "Analyses Performed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "24/7", label: "Availability" },
  { value: "100+", label: "Countries Reached" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGetSourceCode = () => {
    window.open("https://wa.me/233552425969", "_blank");
  };

  const handleSeeLive = () => {
    window.open("https://wa.me/233552425969", "_blank");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold hover:text-primary transition-colors">EyeCare AI</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border bg-background hover:border-primary focus:border-primary transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16">
        <div className="slide-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                <div className="text-center space-y-4 animate-fade-in">
                  <h2 className="text-5xl font-bold hover:scale-105 transition-transform">{slide.title}</h2>
                  <p className="text-xl hover:text-primary transition-colors">{slide.description}</p>
                  <div className="flex gap-4 justify-center mt-8">
                    <button
                      onClick={handleGetSourceCode}
                      className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 transition-all"
                    >
                      Get Source Code
                    </button>
                    <button
                      onClick={handleSeeLive}
                      className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 hover:scale-105 transition-all"
                    >
                      See Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 hover:text-primary transition-colors">Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:scale-105 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Making a Difference Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors">Making a Difference</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-muted-foreground">
            Our AI-powered eye care solution has helped thousands of people identify potential eye health issues early,
            leading to better treatment outcomes and improved quality of life.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:scale-105 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold hover:text-primary transition-colors">EyeCare AI</h3>
              <p className="text-muted-foreground">
                Revolutionizing eye care with artificial intelligence
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold hover:text-primary transition-colors">Contact</h4>
              <p className="text-muted-foreground">WhatsApp: +233552425969</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold hover:text-primary transition-colors">Legal</h4>
              <p className="text-muted-foreground">© 2024 EyeCare AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;