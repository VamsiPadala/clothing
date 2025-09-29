import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Mail, Send, Clock, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Tuni, Andhra Pradesh", "India"],
      action: () => window.open('https://maps.google.com/?q=Tuni,Andhra+Pradesh', '_blank')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 9966888868"],
      action: () => window.open('tel:+919966888868')
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["Chat with us instantly"],
      action: () => window.open('https://wa.me/919966888868', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@visakhabrandfactory.com"],
      action: () => window.open('mailto:info@visakhabrandfactory.com')
    }
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "10:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://wa.me/919966888868",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/visakhabrandfactory",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/visakhabrandfactory",
      color: "bg-pink-500 hover:bg-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help with all your fashion needs. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={info.action}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-slate-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-600">{schedule.day}</span>
                    <span className="font-medium text-slate-900">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    className={`${social.color} text-white p-3`}
                    onClick={() => window.open(social.url, '_blank')}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Send us a Message
                </CardTitle>
                <p className="text-slate-600">
                  Have a question or feedback? We'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-sm text-slate-600">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, please call us directly or message us on WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-xl text-slate-600">
              Come experience our collection in person at our Tuni location
            </p>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  Visakha Brand Factory
                </h3>
                <p className="text-slate-600 mb-4">
                  Tuni, Andhra Pradesh
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=Tuni,Andhra+Pradesh', '_blank')}
                >
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are your store hours?",
                answer: "We're open Monday-Saturday 10:00 AM - 8:00 PM and Sunday 10:00 AM - 6:00 PM."
              },
              {
                question: "Do you offer online shopping?",
                answer: "Currently, we operate primarily as a physical store, but we're working on launching online shopping soon!"
              },
              {
                question: "What's your return policy?",
                answer: "We offer exchanges within 7 days of purchase with original receipt and tags intact."
              },
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes! We offer special pricing for bulk orders. Contact us for more details."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;