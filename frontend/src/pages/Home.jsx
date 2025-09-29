import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Headphones, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { productCategories, customerReviews, featuredProducts } from '../mockData';

const Home = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Premium Collection",
      description: "15+ men's clothing categories with exclusive styles",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Visit Our Store",
      description: "Experience our collection at Tuni showroom",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Premium fabrics and superior craftsmanship",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Expert Support",
      description: "Personal styling assistance and fit consultation",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const handleVisitStore = (categoryName) => {
    alert(`Interested in ${categoryName}? Visit our store in Tuni for the complete collection and expert assistance!`);
  };

  const handleViewDetails = (productName) => {
    alert(`${productName} - Visit our Tuni showroom to see, try, and purchase this premium item!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none shadow-lg animate-pulse">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Premium Men's Fashion 2024
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  All Clothing Styles
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Under One Roof
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Discover premium quality men's clothing for every occasion. From casual wear to formal attire, 
                  find your perfect style at Visakha Brand Factory.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/products">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/about">
                    Our Story
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5000+</div>
                  <div className="text-slate-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-slate-300">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center justify-center">
                    4.8
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 ml-1" />
                  </div>
                  <div className="text-slate-300">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fashion Store"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-2xl animate-bounce">
                <div className="text-3xl font-bold">{productCategories.length}+</div>
                <div className="text-sm opacity-90">Categories Available</div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 shadow-2xl animate-pulse">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our premium service and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{
                    backgroundImage: `linear-gradient(to bottom right, ${feature.gradient.replace('from-', '').replace(' to-', ', ').split('-').map(c => `var(--${c})`).join('')})`
                  }}></div>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none shadow-lg mb-4">
              Premium Collection
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our extensive collection of men's clothing categories designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productCategories.slice(0, 10).map((category) => (
              <Link
                key={category.id}
                to={`/collection/${category.id}`}
                className="group block"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-xl bg-white">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-white text-slate-900 mb-2">
                          {category.types.length} Styles
                        </Badge>
                        <p className="text-white text-sm font-medium">
                          {category.priceRange}
                        </p>
                      </div>
                    </div>
                    
                    {category.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg animate-pulse">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {category.description.slice(0, 50)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/products">
                View All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600">
              Handpicked favorites from our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button 
                        className="w-full bg-white text-slate-900 hover:bg-slate-100 shadow-lg transform hover:scale-105 transition-all duration-300"
                        onClick={() => handleViewDetails(product.name)}
                      >
                        View in Store
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                    {product.badge && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-slate-600 ml-2">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                      <span className="text-sm text-slate-500 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Real reviews from real customers who love shopping with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                    "{review.comment}"
                  </p>
                  
                  <div className="border-t pt-4 flex items-center space-x-4">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-slate-900">
                        {review.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        Purchased: {review.product}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none shadow-lg mb-6">
            Visit Us Today
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Upgrade Your Style?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Visakha Brand Factory for their fashion needs. 
            Visit our store in Tuni for personalized styling and the complete collection experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <Link to="/products">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <Link to="/contact">
                Visit Our Store
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;