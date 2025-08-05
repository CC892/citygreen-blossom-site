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
      icon: Building,
      title: 'Greenhouse Construction',
      description: 'Custom greenhouse solutions for all scales, from small tropical tunnels to advanced climate control systems. Built to withstand extreme weather conditions with 5-year guarantee.',
      features: ['Custom Structural Design', 'Climate Control Systems', 'Soil/Hydroponic Adaptable', '5-Year Guarantee']
    },
    {
      icon: Droplets,
      title: 'Irrigation & Automation',
      description: 'Complete irrigation solutions including design, installation, and maintenance. Advanced automation systems for remote monitoring and control.',
      features: ['Drip Irrigation', 'Fertigation Systems', 'Remote Monitoring', 'Water Conservation']
    },
    {
      icon: PenTool,
      title: 'Training Programs',
      description: 'Comprehensive agricultural training programs from beginner to advanced levels. Group and individual programs designed to create young entrepreneurs.',
      features: ['1-Day Awareness', '3-Day Basic Program', 'Advanced Training', 'Individual Coaching']
    },
    {
      icon: TreePine,
      title: 'Farm Management',
      description: 'Professional farm management services with over 50 acres under our care. Complete solutions including technology integration and modern machinery.',
      features: ['Land Management', 'Technology Integration', 'Crop Planning', 'Harvest Optimization']
    },
    {
      icon: Wrench,
      title: 'System Maintenance',
      description: 'Regular maintenance services for greenhouse and irrigation systems to ensure optimal performance and longevity.',
      features: ['Preventive Maintenance', 'System Upgrades', 'Emergency Repairs', '24/7 Support']
    },
    {
      icon: Scissors,
      title: 'Crop Consulting',
      description: 'Expert agricultural consulting services to maximize crop yields and implement best practices for sustainable farming.',
      features: ['Crop Selection', 'Yield Optimization', 'Disease Management', 'Organic Practices']
    }
  ];

  const additionalServices = [
    { icon: Briefcase, title: 'Export Support', description: 'Assistance with agricultural export processes and international market access.' },
    { icon: TreePine, title: 'Certification Support', description: 'Guidance for obtaining SL-GAP and other agricultural certifications.' },
    { icon: Droplets, title: 'Solar Solutions', description: 'Solar-powered irrigation systems for sustainable farming operations.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary-foreground/90">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive agricultural technology solutions from greenhouse construction to farm management.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced <span className="text-primary">Agricultural Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From greenhouse construction to automation systems, we provide complete agricultural technology solutions that transform traditional farming.
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
              Additional <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized services to support your complete agricultural journey.
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
            Ready to Modernize Your Farm?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Contact us today for a consultation and discover how we can transform your agricultural operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Get Consultation
            </Link>
            <Link
              to="/projects"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;