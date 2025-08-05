import { useState } from 'react';
import { Leaf, Package, Droplets, Truck, Filter } from 'lucide-react';

// Import images for agriculture products
import arecaPalm from '@/assets/plants/areca-palm.jpg';
import ficus from '@/assets/plants/ficus.jpg';
import philodendron from '@/assets/plants/philodendron.jpg';
import sansevieria from '@/assets/plants/sansevieria.jpg';
import peaceLily from '@/assets/plants/peace-lily.jpg';
import moneyPlant from '@/assets/plants/money-plant.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Fruits & Vegetables
    {
      id: 1,
      name: 'Organic Tomatoes',
      image: arecaPalm,
      category: 'fruits-vegetables',
      type: 'Export Quality',
      availability: 'Year-round',
      description: 'Premium greenhouse-grown tomatoes with superior taste and shelf life.'
    },
    {
      id: 2,
      name: 'Bell Peppers',
      image: ficus,
      category: 'fruits-vegetables',
      type: 'Domestic & Export',
      availability: 'Year-round',
      description: 'Vibrant, crisp bell peppers grown in controlled environment greenhouses.'
    },
    {
      id: 3,
      name: 'Lettuce Varieties',
      image: philodendron,
      category: 'fruits-vegetables',
      type: 'Hydroponic',
      availability: 'Year-round',
      description: 'Fresh, pesticide-free lettuce grown using advanced hydroponic systems.'
    },
    {
      id: 4,
      name: 'Cucumbers',
      image: peaceLily,
      category: 'fruits-vegetables',
      type: 'Greenhouse',
      availability: 'Year-round',
      description: 'Long English cucumbers with excellent quality and yield.'
    },
    // Plants & Seeds
    {
      id: 5,
      name: 'Vegetable Seedlings',
      image: sansevieria,
      category: 'plants-seeds',
      type: 'Various Species',
      availability: 'Seasonal',
      description: 'High-quality vegetable seedlings for home gardens and commercial farms.'
    },
    {
      id: 6,
      name: 'Hybrid Seeds',
      image: moneyPlant,
      category: 'plants-seeds',
      type: 'Imported',
      availability: 'Year-round',
      description: 'Premium hybrid seeds with high germination rates and disease resistance.'
    },
    {
      id: 7,
      name: 'Local Varieties',
      image: ficus,
      category: 'plants-seeds',
      type: 'Traditional',
      availability: 'Seasonal',
      description: 'Native Sri Lankan plant varieties adapted to local climate conditions.'
    },
    // Fertilizers & Grow Media
    {
      id: 8,
      name: 'Organic Fertilizers',
      image: arecaPalm,
      category: 'fertilizers',
      type: 'Certified Organic',
      availability: 'Year-round',
      description: 'Environmentally friendly fertilizers for sustainable agriculture.'
    },
    {
      id: 9,
      name: 'Hydroponic Nutrients',
      image: philodendron,
      category: 'fertilizers',
      type: 'Specialized',
      availability: 'Year-round',
      description: 'Complete nutrient solutions for hydroponic growing systems.'
    },
    {
      id: 10,
      name: 'Growing Media',
      image: sansevieria,
      category: 'fertilizers',
      type: 'Soilless',
      availability: 'Year-round',
      description: 'Premium growing substrates for greenhouse and hydroponic cultivation.'
    },
    // Greenhouse Accessories
    {
      id: 11,
      name: 'Climate Control Systems',
      image: peaceLily,
      category: 'accessories',
      type: 'Automated',
      availability: 'Year-round',
      description: 'Advanced climate control equipment for optimal growing conditions.'
    },
    {
      id: 12,
      name: 'Irrigation Equipment',
      image: moneyPlant,
      category: 'accessories',
      type: 'Professional',
      availability: 'Year-round',
      description: 'Complete irrigation systems and components for greenhouse operations.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Filter },
    { id: 'fruits-vegetables', name: 'Fruits & Vegetables', icon: Leaf },
    { id: 'plants-seeds', name: 'Plants & Seeds', icon: Package },
    { id: 'fertilizers', name: 'Fertilizers & Media', icon: Droplets },
    { id: 'accessories', name: 'Greenhouse Accessories', icon: Truck }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary-foreground/90">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Fresh agricultural products and farming supplies from our certified facilities.
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
                        <Package className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Type:</span>
                      </div>
                      <span className="font-medium text-foreground">{product.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-green-600" />
                        <span className="text-muted-foreground">Available:</span>
                      </div>
                      <span className="font-medium text-foreground">{product.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="section-padding bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Quality <span className="text-primary">Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence in every product we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">SL-GAP Certified</h3>
              <p className="text-muted-foreground">
                All our products meet Sri Lanka Good Agricultural Practices standards for quality and safety.
              </p>
            </div>

            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Droplets className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sustainable Growing</h3>
              <p className="text-muted-foreground">
                Water-efficient irrigation and sustainable farming practices in all our operations.
              </p>
            </div>

            <div className="nature-card p-8 text-center space-y-4">
              <div className="mx-auto p-4 bg-gradient-primary rounded-xl shadow-medium w-fit">
                <Package className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Fresh Delivery</h3>
              <p className="text-muted-foreground">
                Direct from farm to table with maintained cold chain for maximum freshness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;