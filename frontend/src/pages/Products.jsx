import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
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

  const handleAddToCart = (productName) => {
    // Mock add to cart functionality
    alert(`Added ${productName} to cart!`);
  };

  const filteredCategories = productCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-slate-600">
            Explore our complete collection of premium clothing for every occasion
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
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
              <SelectTrigger>
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
              <SelectTrigger>
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {product.inStock ? (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-green-500 text-white">
                        In Stock
                      </Badge>
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-red-500 text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
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
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleAddToCart(product.name)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            All Categories ({filteredCategories.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Price Range: {category.priceRange}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Available Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.types.slice(0, 3).map((type, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                      {category.types.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.types.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => alert(`Exploring ${category.name} collection!`)}
                  >
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-slate-300 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No products found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setPriceRange('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;