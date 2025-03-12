
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Award, Leaf, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* About Hero */}
      <section className="py-16 bg-coffee-light/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="subtitle text-coffee-medium mb-3">OUR STORY</h4>
              <h1 className="heading-lg text-coffee-espresso mb-6">About Brew Haven</h1>
              <p className="body-lg text-coffee-dark/80 mb-8">
                Discover our journey from a small passion project to a beloved community café dedicated to brewing exceptional coffee experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-coffee-espresso mb-6">A Passion for Perfect Coffee</h2>
              <p className="body mb-4 text-coffee-dark/80">
                Brew Haven began in 2015 with a simple mission: to create a space where coffee is treated as an art form, where every cup tells a story, and where community comes together.
              </p>
              <p className="body mb-4 text-coffee-dark/80">
                Founded by two friends with a shared passion for exceptional coffee, our café quickly became known for our attention to detail, commitment to quality, and warm atmosphere.
              </p>
              <p className="body text-coffee-dark/80">
                Today, we continue to pursue coffee excellence while fostering genuine connections with our customers and community. Every bean we source, every drink we craft, and every person we serve is part of our ongoing story.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Barista carefully preparing coffee" 
                className="rounded-lg shadow-xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-coffee-light/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h4 className="subtitle text-coffee-medium mb-3">WHAT DRIVES US</h4>
            <h2 className="heading-lg text-coffee-espresso">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-coffee-medium" />
              </div>
              <h3 className="heading-sm text-coffee-dark mb-4">Quality</h3>
              <p className="text-coffee-dark/80">
                We source the finest beans and maintain exacting standards throughout our brewing process.
              </p>
            </motion.div>
            
            {/* Craft */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-coffee-medium" />
              </div>
              <h3 className="heading-sm text-coffee-dark mb-4">Craft</h3>
              <p className="text-coffee-dark/80">
                We approach coffee-making as an art form, honing our skills and techniques with dedication.
              </p>
            </motion.div>
            
            {/* Sustainability */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-coffee-medium" />
              </div>
              <h3 className="heading-sm text-coffee-dark mb-4">Sustainability</h3>
              <p className="text-coffee-dark/80">
                We prioritize ethical sourcing and environmentally conscious practices throughout our operations.
              </p>
            </motion.div>
            
            {/* Community */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-coffee-medium" />
              </div>
              <h3 className="heading-sm text-coffee-dark mb-4">Community</h3>
              <p className="text-coffee-dark/80">
                We create spaces where people connect, collaborate, and feel a sense of belonging.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h4 className="subtitle text-coffee-medium mb-3">OUR JOURNEY</h4>
            <h2 className="heading-lg text-coffee-espresso">From Bean to Cup</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* 2015 - Founding */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="md:w-1/3">
                <div className="bg-coffee-light p-6 rounded-lg">
                  <h3 className="heading-sm text-coffee-dark mb-2">2015</h3>
                  <h4 className="font-medium text-coffee-medium">The Beginning</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="body text-coffee-dark/80">
                  Brew Haven opened its doors as a small coffee cart in the local farmers' market. Armed with a single espresso machine and a passion for great coffee, founders Elena and Marcus began sharing their carefully crafted brews with the community.
                </p>
              </div>
            </motion.div>
            
            {/* 2017 - First Store */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="md:w-1/3">
                <div className="bg-coffee-light p-6 rounded-lg">
                  <h3 className="heading-sm text-coffee-dark mb-2">2017</h3>
                  <h4 className="font-medium text-coffee-medium">First Store</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="body text-coffee-dark/80">
                  After gaining a loyal following, we opened our first permanent location. The cozy space quickly became a neighborhood favorite, known for its inviting atmosphere and exceptional coffee. This is where we began developing our signature roasting technique.
                </p>
              </div>
            </motion.div>
            
            {/* 2019 - Direct Trade */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="md:w-1/3">
                <div className="bg-coffee-light p-6 rounded-lg">
                  <h3 className="heading-sm text-coffee-dark mb-2">2019</h3>
                  <h4 className="font-medium text-coffee-medium">Direct Trade</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="body text-coffee-dark/80">
                  We established direct relationships with coffee farmers in Ethiopia, Guatemala, and Colombia. These partnerships allowed us to ensure fair compensation for growers while securing the highest quality beans for our customers.
                </p>
              </div>
            </motion.div>
            
            {/* 2021 - Expansion */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="md:w-1/3">
                <div className="bg-coffee-light p-6 rounded-lg">
                  <h3 className="heading-sm text-coffee-dark mb-2">2021</h3>
                  <h4 className="font-medium text-coffee-medium">Expansion</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="body text-coffee-dark/80">
                  Brew Haven expanded to a larger flagship location, incorporating a roastery and barista training center. This space allowed us to experiment with new brewing methods and share our knowledge through public workshops.
                </p>
              </div>
            </motion.div>
            
            {/* Today */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="md:w-1/3">
                <div className="bg-coffee-medium p-6 rounded-lg">
                  <h3 className="heading-sm text-white mb-2">Today</h3>
                  <h4 className="font-medium text-coffee-light">Growing Together</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="body text-coffee-dark/80">
                  Today, Brew Haven continues to evolve while staying true to our core values. We're proud to be a gathering place for coffee lovers, a supportive employer, and a responsible business committed to sustainable practices and community engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-coffee-light/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h4 className="subtitle text-coffee-medium mb-3">THE FACES BEHIND THE BREW</h4>
            <h2 className="heading-lg text-coffee-espresso">Meet Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                alt="Elena Thompson - Co-Founder" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="heading-sm text-coffee-dark mb-1">Elena Thompson</h3>
                <p className="text-coffee-medium mb-4">Co-Founder & Head Roaster</p>
                <p className="text-coffee-dark/80">
                  With 15 years of experience in specialty coffee, Elena leads our roasting program with precision and passion.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Marcus Chen - Co-Founder" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="heading-sm text-coffee-dark mb-1">Marcus Chen</h3>
                <p className="text-coffee-medium mb-4">Co-Founder & Operations</p>
                <p className="text-coffee-dark/80">
                  Marcus ensures every aspect of Brew Haven runs smoothly while maintaining our commitment to quality and service.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80" 
                alt="Sophie Laurent - Head Barista" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="heading-sm text-coffee-dark mb-1">Sophie Laurent</h3>
                <p className="text-coffee-medium mb-4">Head Barista</p>
                <p className="text-coffee-dark/80">
                  A championship-winning barista, Sophie trains our team and creates seasonal drink specials that delight our customers.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="James Rodriguez - Sustainability Director" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="heading-sm text-coffee-dark mb-1">James Rodriguez</h3>
                <p className="text-coffee-medium mb-4">Sustainability Director</p>
                <p className="text-coffee-dark/80">
                  James oversees our environmental initiatives and direct trade relationships with coffee farmers around the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
