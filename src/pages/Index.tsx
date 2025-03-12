
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const imagesLoaded = useRef<boolean>(false);

  useEffect(() => {
    // Simulate loading images
    if (!imagesLoaded.current) {
      const imageElements = document.querySelectorAll('img');
      let loadedCount = 0;
      
      imageElements.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === imageElements.length) {
              imagesLoaded.current = true;
            }
          });
        }
      });
      
      if (loadedCount === imageElements.length) {
        imagesLoaded.current = true;
      }
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-espresso/90 to-coffee-espresso/80" />
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Coffee beans background" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container-custom py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="subtitle text-coffee-medium mb-4">WELCOME TO BREW HAVEN</h4>
              <h1 className="heading-xl mb-6">
                Experience Coffee in Its Purest Form
              </h1>
              <p className="body-lg text-coffee-light/90 mb-8">
                A tranquil oasis where exceptional coffee, mindful spaces, and genuine connections come together to create moments of pure enjoyment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/menu" 
                  className="px-8 py-3 bg-coffee-medium text-white font-medium rounded-md transition-all duration-300 hover:bg-coffee-dark"
                >
                  Explore Our Menu
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-coffee-light/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h4 className="subtitle text-coffee-medium mb-3">OUR SPECIALTIES</h4>
            <h2 className="heading-lg text-coffee-espresso">Crafted With Passion</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Espresso Category */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80" 
                  alt="Espresso coffee being poured" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-espresso/80 to-transparent"></div>
                <h3 className="heading-md text-white absolute bottom-4 left-6">Espresso-Based</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-coffee-dark/80">
                  Rich, concentrated coffee served in small, strong shots or as the foundation for milk-based drinks.
                </p>
                <Link 
                  to="/menu" 
                  className="flex items-center gap-2 text-coffee-medium font-medium hover:text-coffee-dark transition-colors"
                >
                  View Selection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Cold Brews Category */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Cold brew coffee" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-espresso/80 to-transparent"></div>
                <h3 className="heading-md text-white absolute bottom-4 left-6">Cold Brews</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-coffee-dark/80">
                  Smooth, low-acidity coffee steeped for hours in cold water, creating a refreshing and bold flavor.
                </p>
                <Link 
                  to="/menu" 
                  className="flex items-center gap-2 text-coffee-medium font-medium hover:text-coffee-dark transition-colors"
                >
                  View Selection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Specialty Blends Category */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Coffee beans and brewing equipment" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-espresso/80 to-transparent"></div>
                <h3 className="heading-md text-white absolute bottom-4 left-6">Specialty Blends</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-coffee-dark/80">
                  Carefully crafted combinations of premium coffee beans, creating unique and complex flavor profiles.
                </p>
                <Link 
                  to="/menu" 
                  className="flex items-center gap-2 text-coffee-medium font-medium hover:text-coffee-dark transition-colors"
                >
                  View Selection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="subtitle text-coffee-medium mb-3">OUR PHILOSOPHY</h4>
              <h2 className="heading-lg text-coffee-espresso mb-6">Coffee Is More Than A Beverage</h2>
              <p className="body-lg text-coffee-dark/80 mb-6">
                At Brew Haven, we believe that coffee is an experience that should engage all the senses. From carefully sourcing the finest beans to the methodical brewing process, we're dedicated to creating moments of pure enjoyment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-3">
                    <Coffee className="h-6 w-6 text-coffee-medium" />
                  </div>
                  <h3 className="font-serif font-medium">Quality Beans</h3>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-coffee-medium" />
                  </div>
                  <h3 className="font-serif font-medium">Expert Craft</h3>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-coffee-medium" />
                  </div>
                  <h3 className="font-serif font-medium">Community</h3>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="px-8 py-3 bg-coffee-medium text-white font-medium rounded-md transition-all duration-300 hover:bg-coffee-dark inline-block"
              >
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Coffee shop interior with barista" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-48 hidden md:block">
                <p className="font-serif text-3xl font-bold text-coffee-dark">8+</p>
                <p className="text-coffee-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-medium/10 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-coffee-espresso mb-6">
                Visit Us Today
              </h2>
              <p className="body-lg text-coffee-dark/80 mb-8">
                Join us at Brew Haven for a coffee experience that goes beyond the ordinary. Whether you're a coffee connoisseur or simply looking for a cozy spot, we welcome you to our café.
              </p>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-coffee-dark text-white font-medium rounded-md transition-all duration-300 hover:bg-coffee-espresso inline-block"
              >
                Find Our Location
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
