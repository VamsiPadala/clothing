import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { productCategories, customerReviews, featuredProducts } from '../mockData';

const Home = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Wide Selection",
      description: "15+ clothing categories with multiple styles"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick delivery across Andhra Pradesh"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assured",
      description: "Premium fabrics and excellent craftsmanship"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Always here to help with your queries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  New Collection 2024
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  All Clothing Styles
                  <span className="block bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                    Under One Roof
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Discover premium quality clothing for every occasion. From casual wear to formal attire, find your perfect style at Visakha Brand Factory.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-slate-900">5000+</span>
                  <span>Happy Customers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-slate-900">15+</span>
                  <span>Categories</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-slate-900">4.8</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fashion Store"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Categories Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl text-slate-700 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our extensive collection of clothing categories designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productCategories.slice(0, 10).map((category) => (
              <Link
                key={category.id}
                to="/products"
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {category.priceRange}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600">
              Best sellers and trending items this season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1 mb-2">
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
                    <span className="text-sm text-slate-600">({product.rating})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-slate-900">₹{product.price}</span>
                    <span className="text-sm text-slate-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Real reviews from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "{review.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {review.product}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Visakha Brand Factory for their fashion needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;