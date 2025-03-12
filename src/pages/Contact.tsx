
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Coffee } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* Contact Hero */}
      <section className="py-16 bg-coffee-light/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="subtitle text-coffee-medium mb-3">GET IN TOUCH</h4>
              <h1 className="heading-lg text-coffee-espresso mb-6">Contact Us</h1>
              <p className="body-lg text-coffee-dark/80 mb-8">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, reach out to us using the information below.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-coffee-espresso mb-8">Visit Our Café</h2>
              
              <div className="space-y-8">
                {/* Map with Location Pin */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369809999999!3d40.71277700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Street%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Brew Haven Location"
                    ></iframe>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Address */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-coffee-light/70 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-coffee-medium" />
                      </div>
                      <div>
                        <h3 className="font-medium text-coffee-dark mb-2">Address</h3>
                        <p className="text-coffee-dark/80">
                          123 Coffee Street<br />
                          Brew City, BC 10101
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-coffee-light/70 rounded-full p-3">
                        <Mail className="h-6 w-6 text-coffee-medium" />
                      </div>
                      <div>
                        <h3 className="font-medium text-coffee-dark mb-2">Email</h3>
                        <p className="text-coffee-dark/80">
                          <a href="mailto:hello@brewhaven.com" className="hover:text-coffee-medium transition-colors">
                            hello@brewhaven.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-coffee-light/70 rounded-full p-3">
                        <Phone className="h-6 w-6 text-coffee-medium" />
                      </div>
                      <div>
                        <h3 className="font-medium text-coffee-dark mb-2">Phone</h3>
                        <p className="text-coffee-dark/80">
                          <a href="tel:+15551234567" className="hover:text-coffee-medium transition-colors">
                            (555) 123-4567
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-coffee-light/70 rounded-full p-3">
                        <Clock className="h-6 w-6 text-coffee-medium" />
                      </div>
                      <div>
                        <h3 className="font-medium text-coffee-dark mb-2">Hours</h3>
                        <p className="text-coffee-dark/80">
                          Mon-Fri: 7:00 AM - 8:00 PM<br />
                          Sat-Sun: 8:00 AM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-coffee-light/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h4 className="subtitle text-coffee-medium mb-3">COMMON QUESTIONS</h4>
            <h2 className="heading-lg text-coffee-espresso">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="heading-sm text-coffee-dark mb-3">Do you offer coffee catering services?</h3>
                <p className="text-coffee-dark/80">
                  Yes, we offer catering services for events of all sizes. Whether you need coffee for a corporate meeting, wedding, or special event, we can customize a package to meet your needs. Please contact us at least 48 hours in advance to arrange catering services.
                </p>
              </motion.div>
              
              {/* FAQ Item 2 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="heading-sm text-coffee-dark mb-3">Can I buy your coffee beans to brew at home?</h3>
                <p className="text-coffee-dark/80">
                  Absolutely! We sell all of our coffee beans by the bag. You can purchase them in-store or through our website. We also offer brewing equipment and can provide guidance on brewing methods to help you get the best results at home.
                </p>
              </motion.div>
              
              {/* FAQ Item 3 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="heading-sm text-coffee-dark mb-3">Do you have non-dairy milk alternatives?</h3>
                <p className="text-coffee-dark/80">
                  Yes, we offer a variety of non-dairy alternatives including oat milk, almond milk, soy milk, and coconut milk. There is a small additional charge for these options.
                </p>
              </motion.div>
              
              {/* FAQ Item 4 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="heading-sm text-coffee-dark mb-3">Do you host coffee tasting events?</h3>
                <p className="text-coffee-dark/80">
                  Yes, we regularly host coffee tastings and brewing workshops. Check our events calendar on our website or follow us on social media to stay updated on upcoming events. We also offer private tasting sessions for groups upon request.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section className="py-20 bg-coffee-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <Coffee className="h-10 w-10 text-coffee-medium" />
              </div>
              <h2 className="heading-lg mb-6">Stay Connected</h2>
              <p className="body-lg text-coffee-light/90 mb-8">
                Subscribe to our newsletter for updates on new coffee arrivals, special promotions, and upcoming events.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-medium bg-coffee-espresso/70 text-white placeholder:text-white/50 flex-grow"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-coffee-medium text-white font-medium rounded-md transition-all duration-300 hover:bg-coffee-light hover:text-coffee-dark whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-coffee-light/60 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
