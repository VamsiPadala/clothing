import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Eye, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { productCategories, featuredProducts } from '../mockData';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleViewDetails = (productName) => {
    alert(`${productName} - Visit our store in Tuni for detailed viewing and purchase!`);
  };

  const filteredCategories = productCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center text-white">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Premium Men's Collection
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Explore our complete collection of premium men's clothing. From casual to formal, we have everything for the modern gentleman.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{productCategories.length}+</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-slate-300 focus:border-slate-500"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-slate-300">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {productCategories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="border-slate-300">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1000">Under ₹1,000</SelectItem>
                <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
                <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                <SelectItem value="above-5000">Above ₹5,000</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-slate-300">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-slate-600">Handpicked favorites from our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <Button 
                        size="sm" 
                        className="w-full bg-white text-slate-900 hover:bg-slate-100 shadow-lg"
                        onClick={() => handleViewDetails(product.name)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg mb-2">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                    {product.badge && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={`rounded-full w-10 h-10 p-0 bg-white/90 border-white shadow-lg hover:bg-white ${
                        favorites.includes(product.id) ? 'text-red-500' : 'text-slate-600'
                      }`}
                      onClick={() => handleToggleFavorite(product.id)}
                    >
                      <Heart className={`h-4 w-4 ${
                        favorites.includes(product.id) ? 'fill-current' : ''
                      }`} />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
                  
                  {product.colors && (
                    <div className="mb-3">
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                            style={{
                              backgroundColor: 
                                color.toLowerCase() === 'white' ? '#f8f9fa' :
                                color.toLowerCase() === 'black' ? '#000' :
                                color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#6b7280' :
                                color.toLowerCase() === 'dark blue' ? '#1e40af' :
                                color.toLowerCase() === 'light blue' ? '#3b82f6' :
                                '#6b7280'
                            }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-slate-900">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore All Categories
            </h2>
            <p className="text-slate-600">
              Discover our complete collection ({filteredCategories.length} categories)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/collection/${category.id}`}
                className="group block"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-slate-200 text-sm mb-3 line-clamp-2">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-white/20 text-white border-white/30">
                            {category.types.length} Styles
                          </Badge>
                          <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    {category.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-slate-700">
                        Price Range:
                      </span>
                      <span className="font-bold text-slate-900">
                        {category.priceRange}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">Available Types:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.types.slice(0, 3).map((type, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                        {category.types.length > 3 && (
                          <Badge variant="outline" className="text-xs text-slate-500">
                            +{category.types.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button className="w-full group-hover:bg-slate-800 transition-colors">
                      View Collection
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              No categories found
            </h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We couldn't find any categories matching your search. Try adjusting your filters or search terms.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              size="lg"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Visit Our Store in Tuni
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience our premium collection in person. Our expert team will help you find the perfect fit and style!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Directions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Call: 9966888868
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;