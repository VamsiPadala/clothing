import React from 'react';
import { Star, Users, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality First",
      description: "We source only the finest fabrics and materials to ensure every piece meets our high standards of quality and durability."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description: "Our customers are at the heart of everything we do. We listen, learn, and continuously improve to serve you better."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Style & Comfort",
      description: "We believe that great fashion should never compromise on comfort. Every design balances style with wearability."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "From design to delivery, we strive for excellence in every aspect of our business to exceed your expectations."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "15+", label: "Product Categories" },
    { number: "10+", label: "Years of Trust" },
    { number: "4.8/5", label: "Customer Rating" }
  ];

  const team = [
    {
      name: "Rajesh Visakha",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Passionate about bringing quality fashion to everyone"
    },
    {
      name: "Priya Sharma",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616c28ca2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "15+ years of experience in fashion design"
    },
    {
      name: "Vikram Singh",
      role: "Quality Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Ensuring every product meets our standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-slate-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                Est. 2014
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Our Story of
                <span className="block bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                  Fashion Excellence
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                For over a decade, Visakha Brand Factory has been the trusted destination for quality clothing in Tuni and beyond. We started with a simple vision: to make premium fashion accessible to everyone.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fashion Store Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-600">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                The Visakha Journey
              </h2>
              <p className="text-xl text-slate-600">
                From humble beginnings to becoming a trusted fashion destination
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Where It All Began
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Founded in 2014 in the heart of Tuni, Visakha Brand Factory started as a small family business with big dreams. Our founder, Rajesh Visakha, noticed a gap in the market for quality clothing at affordable prices in the region.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  What began as a single store has now grown into a comprehensive fashion destination, serving thousands of customers across Andhra Pradesh and beyond. Our commitment to quality, variety, and customer satisfaction has remained unchanged throughout our journey.
                </p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Store History"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Our Mission
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
                "To democratize fashion by providing high-quality, stylish clothing that fits every budget and lifestyle. We believe that great fashion should be accessible to all, regardless of economic background. Our mission is to ensure that every customer leaves our store feeling confident, comfortable, and well-dressed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl text-slate-700 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600">
              The passionate people behind Visakha Brand Factory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-700 text-sm">
                    {member.description}
                  </p>
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
            Join Our Fashion Family
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the Visakha Brand Factory difference. Quality clothing, exceptional service, and unbeatable value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Visit Our Store
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;