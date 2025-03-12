
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="heading-md mb-6 text-coffee-dark">Get in Touch</h3>
      
      {isSubmitted ? (
        <motion.div 
          className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 my-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          Thank you for your message! We'll get back to you shortly.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-coffee-cream rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-medium/30"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-coffee-cream rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-medium/30"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-coffee-cream rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-medium/30 resize-none"
              placeholder="Your message..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-coffee-medium text-white font-medium rounded-md transition-all duration-300 
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-coffee-dark'}
              focus:outline-none focus:ring-2 focus:ring-coffee-medium focus:ring-offset-2`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
