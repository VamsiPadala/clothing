import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { productCategories, categoryProducts } from '../mockData';

const Collection = () => {
  const { categoryId } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [favorites, setFavorites] = useState([]);
  
  const category = productCategories.find(cat => cat.id === parseInt(categoryId));
  const products = categoryProducts[categoryId] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleViewDetails = (productName) => {
    alert(`Viewing details for ${productName}. Visit our store in Tuni for more information!`);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Collection Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${category.image})`,
          }}
        ></div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link 
                to="/products" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Products
              </Link>
              
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {products.length} Items Available
                </Badge>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {category.name}
                  <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                    Collection
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center space-x-6 text-white/80">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white">{category.types.length}</span>
                    <span>Styles Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white">{category.priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Available Styles
            </h2>
            <p className="text-slate-600">
              Choose from our wide range of {category.name.toLowerCase()} styles
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {category.types.map((type, index) => (
              <div key={index} className="group">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-slate-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-all">
                      <span className="text-lg font-bold text-slate-700">
                        {type.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm group-hover:text-slate-700 transition-colors">
                      {type}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured {category.name}
            </h2>
            <p className="text-xl text-slate-600">
              Handpicked styles from our premium collection
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-white text-slate-900 hover:bg-slate-100"
                            onClick={() => handleViewDetails(product.name)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className={`border-white text-white hover:bg-white hover:text-slate-900 ${
                              favorites.includes(product.id) ? 'bg-white text-slate-900' : ''
                            }`}
                            onClick={() => handleToggleFavorite(product.id)}
                          >
                            <Heart className={`h-4 w-4 ${
                              favorites.includes(product.id) ? 'fill-current' : ''
                            }`} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900">
                        {product.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center space-x-1">
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
                          </div>
                          <span className="text-sm text-slate-600">({product.rating}) • {product.reviews} reviews</span>
                        </div>
                      </div>
                      
                      {/* Colors */}
                      {product.colors && (
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-2">Available Colors:</p>
                          <div className="flex space-x-2">
                            {product.colors.slice(0, 3).map((color, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {color}
                              </Badge>
                            ))}
                            {product.colors.length > 3 && (
                              <Badge variant="outline" className="text-xs text-slate-500">
                                +{product.colors.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Sizes */}
                      {product.sizes && (
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-2">Available Sizes:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.sizes.map((size, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Price */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-slate-900">
                            ₹{product.price}
                          </span>
                          <span className="text-lg text-slate-500 line-through">
                            ₹{product.originalPrice}
                          </span>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => alert(`Visit our store in Tuni to purchase ${product.name}!`)}
                        >
                          Visit Store
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">👕</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                More Styles Coming Soon!
              </h3>
              <p className="text-slate-600 mb-6">
                We're constantly updating our {category.name.toLowerCase()} collection.
                Visit our store in Tuni to see our complete range!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Visit Our Store
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Found Something You Like?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Visit our store in Tuni to try on and purchase your favorite {category.name.toLowerCase()}. 
            Our team is ready to help you find the perfect fit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Directions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Call Us: 9966888868
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;