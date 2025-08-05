import { Award, MapPin, Users, Leaf, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'We prioritize sustainable practices and environmentally safe solutions in all our projects.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'GAP certified with strict quality control measures ensuring the best results for our clients.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of expertise in landscaping and plant care.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About <span className="text-primary-foreground/90">CityGreen</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted landscaping partner, bringing nature's beauty to Sri Lankan homes and businesses since 2008.
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
                  CityGreen is a leading landscaping company in Sri Lanka, based in the heart of Boralesgamuwa. 
                  Founded with a vision to transform urban spaces into green sanctuaries, we have been serving 
                  the community for over 15 years.
                </p>
                <p>
                  We specialize in providing eco-friendly, professional greenery solutions that are carefully 
                  tailored to both commercial and residential spaces. Our commitment to sustainability and 
                  quality has made us a trusted partner for hundreds of satisfied clients across Sri Lanka.
                </p>
                <p>
                  As a GAP (Good Agricultural Practices) certified company, we ensure that every plant, 
                  every design, and every service meets the highest standards of quality and environmental safety.
                </p>
              </div>
              <Link
                to="/services"
                className="btn-hero inline-flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
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
                    <h3 className="text-2xl font-bold text-primary-foreground">GAP Certified</h3>
                    <p className="text-primary-foreground/80">Good Agricultural Practices</p>
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  CityGreen follows Good Agricultural Practices (GAP), ensuring quality, 
                  sustainable, and environmentally safe plant production. This certification 
                  guarantees that our processes meet international standards for agricultural excellence.
                </p>
                
                <div className="mt-6 space-y-2">
                  {['Quality Plant Production', 'Environmental Safety', 'Sustainable Practices', 'International Standards'].map((item) => (
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