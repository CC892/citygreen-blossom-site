import { 
  PenTool, 
  Wrench, 
  Scissors, 
  Building, 
  Droplets, 
  TreePine, 
  Home, 
  Briefcase 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Landscape Designing',
      description: 'Custom landscape designs that transform your vision into reality. Our expert designers create beautiful, functional outdoor spaces tailored to your specific needs and preferences.',
      features: ['Site Analysis', 'Custom Design Plans', '3D Visualization', 'Plant Selection']
    },
    {
      icon: Wrench,
      title: 'Garden Renovation',
      description: 'Breathe new life into existing gardens with our comprehensive renovation services. We transform tired landscapes into vibrant, thriving outdoor spaces.',
      features: ['Complete Makeovers', 'Soil Improvement', 'New Plant Installation', 'Hardscape Updates']
    },
    {
      icon: Scissors,
      title: 'Landscape Maintenance',
      description: 'Keep your garden looking its best year-round with our professional maintenance services. Regular care ensures healthy, beautiful landscapes.',
      features: ['Regular Pruning', 'Fertilization', 'Pest Control', 'Seasonal Care']
    },
    {
      icon: Building,
      title: 'Vertical Gardens',
      description: 'Maximize your green space with innovative vertical garden solutions. Perfect for urban environments and small spaces.',
      features: ['Living Walls', 'Modular Systems', 'Automated Irrigation', 'Custom Designs']
    },
    {
      icon: TreePine,
      title: 'Turf and Lawn Installation',
      description: 'Professional lawn installation services using high-quality turf. Create the perfect green carpet for your outdoor space.',
      features: ['Soil Preparation', 'Premium Turf', 'Drainage Systems', 'Post-Installation Care']
    },
    {
      icon: Droplets,
      title: 'Irrigation Systems',
      description: 'Efficient watering solutions that ensure your plants receive optimal hydration while conserving water resources.',
      features: ['Drip Irrigation', 'Sprinkler Systems', 'Smart Controllers', 'Water Conservation']
    },
    {
      icon: Building,
      title: 'Green Walls',
      description: 'Transform bare walls into living masterpieces with our green wall installations. Improve air quality and aesthetics simultaneously.',
      features: ['Modular Panels', 'Plant Selection', 'Maintenance Plans', 'Custom Sizing']
    },
    {
      icon: Home,
      title: 'Residential Landscaping',
      description: 'Complete landscaping solutions for homes, creating outdoor spaces that enhance your property value and quality of life.',
      features: ['Garden Design', 'Plant Installation', 'Outdoor Living Areas', 'Privacy Screening']
    }
  ];

  const additionalServices = [
    { icon: Briefcase, title: 'Commercial Landscaping', description: 'Professional landscaping for businesses and commercial properties.' },
    { icon: TreePine, title: 'Tree Care Services', description: 'Expert tree maintenance, pruning, and health assessments.' },
    { icon: Droplets, title: 'Water Feature Installation', description: 'Beautiful fountains, ponds, and water elements for your landscape.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary-foreground/90">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive landscaping solutions from design to maintenance, tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Landscaping Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial design concepts to ongoing maintenance, we provide complete landscaping solutions that bring your outdoor vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="nature-card p-8 space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-primary rounded-xl shadow-medium flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional <span className="text-primary">Specialties</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We also offer specialized services to meet all your landscaping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="nature-card p-6 text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Contact us today for a free consultation and let's discuss how we can transform your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/projects"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;