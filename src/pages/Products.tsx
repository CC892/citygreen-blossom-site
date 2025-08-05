import { useState } from 'react';
import { Sun, Droplets, Home, Building2, Filter } from 'lucide-react';

// Import plant images
import arecaPalm from '@/assets/plants/areca-palm.jpg';
import ficus from '@/assets/plants/ficus.jpg';
import philodendron from '@/assets/plants/philodendron.jpg';
import sansevieria from '@/assets/plants/sansevieria.jpg';
import peaceLily from '@/assets/plants/peace-lily.jpg';
import moneyPlant from '@/assets/plants/money-plant.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Areca Palm',
      image: arecaPalm,
      sunlight: 'Bright Indirect',
      watering: 'Moderate',
      location: 'Indoor/Outdoor',
      category: 'palm',
      description: 'Popular indoor palm that adds tropical elegance to any space.'
    },
    {
      id: 2,
      name: 'Ficus',
      image: ficus,
      sunlight: 'Bright Light',
      watering: 'Moderate',
      location: 'Indoor/Outdoor',
      category: 'tree',
      description: 'Versatile plant perfect for both indoor decoration and outdoor landscaping.'
    },
    {
      id: 3,
      name: 'Philodendron',
      image: philodendron,
      sunlight: 'Medium Light',
      watering: 'Low-Moderate',
      location: 'Indoor',
      category: 'foliage',
      description: 'Easy-care trailing plant with beautiful heart-shaped leaves.'
    },
    {
      id: 4,
      name: 'Dracaena',
      image: ficus, // Using ficus as placeholder
      sunlight: 'Low-Medium',
      watering: 'Low',
      location: 'Indoor',
      category: 'foliage',
      description: 'Low-maintenance plant with striking striped leaves.'
    },
    {
      id: 5,
      name: 'Spider Plant',
      image: philodendron, // Using philodendron as placeholder
      sunlight: 'Bright Indirect',
      watering: 'Moderate',
      location: 'Indoor',
      category: 'foliage',
      description: 'Air-purifying plant that produces charming baby plantlets.'
    },
    {
      id: 6,
      name: 'Sansevieria (Snake Plant)',
      image: sansevieria,
      sunlight: 'Low-Bright',
      watering: 'Very Low',
      location: 'Indoor',
      category: 'succulent',
      description: 'Extremely hardy plant that thrives in almost any condition.'
    },
    {
      id: 7,
      name: 'Money Plant',
      image: moneyPlant,
      sunlight: 'Medium Light',
      watering: 'Moderate',
      location: 'Indoor',
      category: 'foliage',
      description: 'Believed to bring good fortune and prosperity to your home.'
    },
    {
      id: 8,
      name: 'Dieffenbachia',
      image: philodendron, // Using philodendron as placeholder
      sunlight: 'Medium Light',
      watering: 'Moderate',
      location: 'Indoor',
      category: 'foliage',
      description: 'Stunning variegated leaves that brighten any indoor space.'
    },
    {
      id: 9,
      name: 'Peace Lily',
      image: peaceLily,
      sunlight: 'Low-Medium',
      watering: 'Moderate',
      location: 'Indoor',
      category: 'flowering',
      description: 'Elegant flowering plant that also purifies the air.'
    },
    {
      id: 10,
      name: 'Calathea',
      image: philodendron, // Using philodendron as placeholder
      sunlight: 'Medium Light',
      watering: 'High',
      location: 'Indoor',
      category: 'foliage',
      description: 'Prayer plant with beautifully patterned leaves.'
    },
    {
      id: 11,
      name: 'Aglaonema',
      image: sansevieria, // Using sansevieria as placeholder
      sunlight: 'Low-Medium',
      watering: 'Low-Moderate',
      location: 'Indoor',
      category: 'foliage',
      description: 'Colorful foliage plant perfect for low-light areas.'
    },
    {
      id: 12,
      name: 'Croton',
      image: ficus, // Using ficus as placeholder
      sunlight: 'Bright Light',
      watering: 'Moderate',
      location: 'Indoor/Outdoor',
      category: 'foliage',
      description: 'Vibrant, colorful leaves that add drama to any setting.'
    },
    {
      id: 13,
      name: 'Zamia',
      image: arecaPalm, // Using areca palm as placeholder
      sunlight: 'Medium Light',
      watering: 'Low',
      location: 'Indoor/Outdoor',
      category: 'palm',
      description: 'Compact palm-like plant that\'s perfect for modern spaces.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plants', icon: Filter },
    { id: 'foliage', name: 'Foliage Plants', icon: Home },
    { id: 'palm', name: 'Palms', icon: Building2 },
    { id: 'flowering', name: 'Flowering', icon: Sun },
    { id: 'succulent', name: 'Succulents', icon: Droplets }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getSunlightIcon = (sunlight: string) => {
    return <Sun className="h-4 w-4 text-yellow-500" />;
  };

  const getWateringIcon = (watering: string) => {
    return <Droplets className="h-4 w-4 text-blue-500" />;
  };

  const getLocationIcon = (location: string) => {
    return location.includes('Indoor') ? 
      <Home className="h-4 w-4 text-green-600" /> : 
      <Building2 className="h-4 w-4 text-green-600" />;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary-foreground/90">Plants</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our collection of healthy, beautiful plants perfect for your home or office.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-accent text-accent-foreground hover:bg-primary/10'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="nature-card overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        {getSunlightIcon(product.sunlight)}
                        <span className="text-muted-foreground">Light:</span>
                      </div>
                      <span className="font-medium text-foreground">{product.sunlight}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        {getWateringIcon(product.watering)}
                        <span className="text-muted-foreground">Water:</span>
                      </div>
                      <span className="font-medium text-foreground">{product.watering}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        {getLocationIcon(product.location)}
                        <span className="text-muted-foreground">Use:</span>
                      </div>
                      <span className="font-medium text-foreground">{product.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Plant <span className="text-primary">Care Tips</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow these guidelines to keep your plants healthy and thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Sun className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Proper Lighting</h3>
              <p className="text-muted-foreground">
                Each plant has specific light requirements. Place them in appropriate locations for optimal growth.
              </p>
            </div>

            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Droplets className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Smart Watering</h3>
              <p className="text-muted-foreground">
                Water when the soil feels dry to touch. Overwatering is more harmful than underwatering.
              </p>
            </div>

            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Home className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Regular Care</h3>
              <p className="text-muted-foreground">
                Regular pruning, fertilizing, and monitoring help maintain plant health and appearance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;