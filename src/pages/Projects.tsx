import { useState } from 'react';
import { Filter, MapPin, Calendar, ExternalLink } from 'lucide-react';
import verticalGarden from '@/assets/vertical-garden.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Commercial Greenhouse Complex – Colombo',
      category: 'commercial',
      location: 'Colombo, Sri Lanka',
      date: '2024',
      image: verticalGarden,
      description: 'Large-scale greenhouse facility with automated climate control and hydroponic systems for year-round vegetable production.'
    },
    {
      id: 2,
      title: 'Smart Farm Automation – Kandy',
      category: 'automation',
      location: 'Kandy, Sri Lanka',
      date: '2024',
      image: heroBackground,
      description: 'Complete farm automation system with remote monitoring, automated irrigation, and climate control for optimal crop yields.'
    },
    {
      id: 3,
      title: 'Hydroponic Training Center – Galle',
      category: 'training',
      location: 'Galle, Sri Lanka',
      date: '2023',
      image: verticalGarden,
      description: 'Educational greenhouse facility designed for training programs with demonstration hydroponic and traditional growing systems.'
    },
    {
      id: 4,
      title: 'Export Quality Greenhouse – Ratnapura',
      category: 'commercial',
      location: 'Ratnapura, Sri Lanka',
      date: '2023',
      image: heroBackground,
      description: 'High-tech greenhouse facility specialized for export-quality vegetable production with international certification standards.'
    },
    {
      id: 5,
      title: 'Solar-Powered Farm – Kurunegala',
      category: 'automation',
      location: 'Kurunegala, Sri Lanka',
      date: '2023',
      image: verticalGarden,
      description: 'Sustainable farm operation with solar-powered irrigation systems and energy-efficient greenhouse technology.'
    },
    {
      id: 6,
      title: 'Organic Certification Project – Matale',
      category: 'training',
      location: 'Matale, Sri Lanka',
      date: '2022',
      image: heroBackground,
      description: 'Complete farm transformation to achieve organic certification with training programs for sustainable farming practices.'
    },
    {
      id: 7,
      title: 'Multi-Crop Greenhouse – Anuradhapura',
      category: 'commercial',
      location: 'Anuradhapura, Sri Lanka',
      date: '2022',
      image: heroBackground,
      description: 'Versatile greenhouse design supporting multiple crop varieties with adaptive climate zones and irrigation systems.'
    },
    {
      id: 8,
      title: 'Research & Development Facility – Peradeniya',
      category: 'training',
      location: 'Peradeniya, Sri Lanka',
      date: '2022',
      image: verticalGarden,
      description: 'Advanced research greenhouse for agricultural innovation and variety development with university partnership.'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Greenhouse Construction' },
    { id: 'automation', name: 'Automation Systems' },
    { id: 'training', name: 'Training & Certification' }
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
            Showcasing our successful greenhouse installations and agricultural technology projects.
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
                      project.category === 'automation' ? 'bg-green-500' :
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
              { value: '50+', label: 'Greenhouses Built' },
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Acres Managed' },
              { value: '20K', label: 'Sq Ft Facilities' }
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
            Start Your Agricultural Project
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Ready to modernize your farming operation? Let's discuss your agricultural technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
              >
                Get Consultation
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