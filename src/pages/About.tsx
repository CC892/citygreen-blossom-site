import { Award, MapPin, Users, Leaf, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Innovation',
      description: 'Cutting-edge agricultural technology and modern farming methods for sustainable agriculture.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'SL-GAP certified with rigorous quality standards ensuring superior agricultural products and services.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Over 50 completed greenhouse projects and decades of agricultural innovation experience.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About <span className="text-primary-foreground/90">CityGreen Agro</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Pioneering agricultural technology in Sri Lanka since 2015, transforming traditional farming with modern solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CityGreen Agro (Pvt) Ltd is a pioneering agricultural technology company established in 2015 and 
                  officially registered in 2018. Based in Boralesgamuwa, we specialize in greenhouse construction, 
                  modern farming solutions, and agricultural innovation across Sri Lanka.
                </p>
                <p>
                  With 8 large greenhouses spanning 20,000 square feet and over 50 completed greenhouse projects 
                  nationwide, we have revolutionized farming practices. Our expertise includes greenhouse construction, 
                  irrigation systems, automation technology, and comprehensive farm management services.
                </p>
                <p>
                  We manage over 50 acres of farmland and are SL-GAP certified, ensuring our agricultural practices 
                  meet international standards. Our mission is to connect urban living with modern farming, improving 
                  quality of life through sustainable, high-quality organic products.
                </p>
              </div>
              <Link
                to="/services"
                className="btn-hero inline-flex items-center space-x-2"
              >
                <span>Explore Our Solutions</span>
              </Link>
            </div>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-medium flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Find <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit our location or get in touch with our friendly team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-medium">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      29, G.H.Perera Mawatha<br />
                      Boralesgamuwa, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a href="mailto:citygreen.lk@gmail.com" className="text-primary hover:text-primary-dark transition-colors">
                      citygreen.lk@gmail.com
                    </a>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-muted-foreground">
                      (+94) 777 575 521<br />
                      (+94) 773 311 000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* GAP Certification */}
                <div className="bg-gradient-primary p-8 rounded-2xl shadow-large">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-foreground/20 rounded-xl">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground">SL-GAP Certified</h3>
                    <p className="text-primary-foreground/80">Sri Lanka Good Agricultural Practices</p>
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  CityGreen Agro is SL-GAP certified, ensuring our agricultural operations meet the highest 
                  standards for quality, sustainability, and safety. This certification validates our commitment 
                  to modern farming excellence and environmental responsibility.
                </p>
                
                <div className="mt-6 space-y-2">
                  {['Certified Organic Production', 'Environmental Safety', 'Sustainable Agriculture', 'International Standards'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      <span className="text-primary-foreground/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;