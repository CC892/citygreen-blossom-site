import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users, Clock } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import verticalGarden from '@/assets/vertical-garden.jpg';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Leaf, value: '1000+', label: 'Plants Delivered' },
    { icon: Award, value: 'GAP', label: 'Certified' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
  ];

  const featuredServices = [
    {
      title: 'Landscape Designing',
      description: 'Custom landscape designs tailored to your space and vision.',
      image: verticalGarden,
    },
    {
      title: 'Vertical Gardens',
      description: 'Space-saving vertical garden solutions for modern living.',
      image: verticalGarden,
    },
    {
      title: 'Garden Maintenance',
      description: 'Professional ongoing care to keep your garden thriving.',
      image: verticalGarden,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Transforming Spaces with{' '}
              <span className="text-primary">Nature's Beauty</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              CityGreen is a leading landscaping company in Sri Lanka, based in Boralesgamuwa. 
              We offer eco-friendly, professional greenery solutions tailored to commercial and residential spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/about"
                className="btn-hero-outline inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="text-primary hover:text-primary-dark font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <span>View Our Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Featured <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From design to maintenance, we provide comprehensive landscaping solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className="nature-card overflow-hidden animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/services"
              className="btn-hero inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Let's work together to create the perfect outdoor environment for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Browse Our Plants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;