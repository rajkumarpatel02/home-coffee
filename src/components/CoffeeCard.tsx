
import { motion } from 'framer-motion';

export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'espresso' | 'cold' | 'specialty';
}

interface CoffeeCardProps {
  coffee: CoffeeItem;
  index: number;
}

const CoffeeCard = ({ coffee, index }: CoffeeCardProps) => {
  return (
    <motion.div 
      className="coffee-card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md">
        <img 
          src={coffee.imageUrl} 
          alt={coffee.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="heading-sm text-coffee-dark">
          {coffee.name}
        </h3>
        <span className="font-medium text-coffee-medium">
          {coffee.price}
        </span>
      </div>
      
      <p className="text-coffee-espresso/70">
        {coffee.description}
      </p>
    </motion.div>
  );
};

export default CoffeeCard;
