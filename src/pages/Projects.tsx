import { useState } from 'react';
import { Filter, MapPin, Calendar, ExternalLink } from 'lucide-react';
import verticalGarden from '@/assets/vertical-garden.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Vertical Garden Installation – Colombo',
      category: 'vertical',
      location: 'Colombo, Sri Lanka',
      date: '2024',
      image: verticalGarden,
      description: 'Modern vertical garden installation for a corporate office building, featuring automated irrigation and diverse tropical plants.'
    },
    {
      id: 2,
      title: 'Residential Turf Lawn – Dehiwala',
      category: 'residential',
      location: 'Dehiwala, Sri Lanka',
      date: '2024',
      image: heroBackground,
      description: 'Complete lawn transformation with premium turf installation, including soil preparation and drainage systems.'
    },
    {
      id: 3,
      title: 'Green Wall Project – Galle',
      category: 'commercial',
      location: 'Galle, Sri Lanka',
      date: '2023',
      image: verticalGarden,
      description: 'Large-scale green wall installation for a luxury hotel, enhancing the lobby area with natural beauty.'
    },
    {
      id: 4,
      title: 'Corporate Garden Renovation – Mount Lavinia',
      category: 'commercial',
      location: 'Mount Lavinia, Sri Lanka',
      date: '2023',
      image: heroBackground,
      description: 'Complete renovation of corporate headquarters garden with modern landscape design and sustainable practices.'
    },
    {
      id: 5,
      title: 'Rooftop Garden – Nugegoda',
      category: 'residential',
      location: 'Nugegoda, Sri Lanka',
      date: '2023',
      image: verticalGarden,
      description: 'Urban rooftop garden design with space-efficient vertical growing systems and weather-resistant plants.'
    },
    {
      id: 6,
      title: 'Commercial Landscaping – Kandy',
      category: 'commercial',
      location: 'Kandy, Sri Lanka',
      date: '2022',
      image: heroBackground,
      description: 'Comprehensive landscaping for a shopping complex, including outdoor seating areas and decorative plant displays.'
    },
    {
      id: 7,
      title: 'Private Villa Garden – Negombo',
      category: 'residential',
      location: 'Negombo, Sri Lanka',
      date: '2022',
      image: heroBackground,
      description: 'Luxury villa garden with tropical landscaping, water features, and entertainment area integration.'
    },
    {
      id: 8,
      title: 'Vertical Garden Wall – Panadura',
      category: 'vertical',
      location: 'Panadura, Sri Lanka',
      date: '2022',
      image: verticalGarden,
      description: 'Innovative vertical garden solution for a residential complex, maximizing green space in limited areas.'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'vertical', name: 'Vertical Gardens' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary-foreground/90">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our portfolio of successful landscaping projects across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-accent text-accent-foreground hover:bg-primary/10'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="nature-card overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.category === 'commercial' ? 'bg-blue-500' :
                      project.category === 'residential' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Project <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Locations Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Start Your Project Today
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Ready to transform your space? Let's discuss your landscaping vision and bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+94777575521"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;