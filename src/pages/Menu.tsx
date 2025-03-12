
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CoffeeCard, { CoffeeItem } from "../components/CoffeeCard";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredCoffees, setFilteredCoffees] = useState<CoffeeItem[]>([]);
  
  // Coffee menu data
  const coffees: CoffeeItem[] = [
    // Espresso-Based
    {
      id: 1,
      name: "Classic Espresso",
      description: "A rich, concentrated coffee served in a small cup with a layer of crema on top.",
      price: "$3.50",
      imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "espresso"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam, creating a perfectly balanced coffee.",
      price: "$4.25",
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "espresso"
    },
    {
      id: 3,
      name: "Latte",
      description: "Espresso with a larger amount of steamed milk and a light layer of foam on top.",
      price: "$4.50",
      imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "espresso"
    },
    {
      id: 4,
      name: "Flat White",
      description: "Espresso with microfoam (steamed milk with small, fine bubbles) for a velvety texture.",
      price: "$4.75",
      imageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "espresso"
    },
    
    // Cold Brews
    {
      id: 5,
      name: "Classic Cold Brew",
      description: "Coffee steeped in cold water for 12+ hours, creating a smooth, low-acid flavor profile.",
      price: "$4.75",
      imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "cold"
    },
    {
      id: 6,
      name: "Nitro Cold Brew",
      description: "Cold brew infused with nitrogen for a creamy, stout-like texture with a cascading effect.",
      price: "$5.25",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
      category: "cold"
    },
    {
      id: 7,
      name: "Vanilla Sweet Cream Cold Brew",
      description: "Cold brew topped with house-made vanilla sweet cream for a subtle sweetness.",
      price: "$5.50",
      imageUrl: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "cold"
    },
    {
      id: 8,
      name: "Coconut Cold Brew",
      description: "Cold brew coffee with coconut milk and a hint of natural sweetness.",
      price: "$5.75",
      imageUrl: "https://images.unsplash.com/photo-1571658734946-7159988414cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "cold"
    },
    
    // Specialty Blends
    {
      id: 9,
      name: "Ethiopian Yirgacheffe",
      description: "A light-bodied coffee with bright acidity, featuring floral and citrus notes.",
      price: "$5.25",
      imageUrl: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "specialty"
    },
    {
      id: 10,
      name: "Guatemalan Antigua",
      description: "Medium-bodied with a smooth texture, featuring chocolate and spice notes.",
      price: "$5.50",
      imageUrl: "https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "specialty"
    },
    {
      id: 11,
      name: "Sumatra Mandheling",
      description: "Full-bodied, earthy coffee with low acidity and notes of chocolate and cedar.",
      price: "$5.75",
      imageUrl: "https://images.unsplash.com/photo-1520903920243-514f11de3962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "specialty"
    },
    {
      id: 12,
      name: "Brew Haven Signature Blend",
      description: "Our house blend featuring notes of caramel, berry, and a smooth chocolate finish.",
      price: "$6.00",
      imageUrl: "https://images.unsplash.com/photo-1515283709260-32f195104368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "specialty"
    }
  ];

  // Filter coffees when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCoffees(coffees);
    } else {
      setFilteredCoffees(coffees.filter(coffee => coffee.category === selectedCategory));
    }
    
    // Scroll to top when changing categories
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  // Initial load - show all coffees
  useEffect(() => {
    setFilteredCoffees(coffees);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* Menu Hero */}
      <section className="py-16 bg-coffee-light/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="subtitle text-coffee-medium mb-3">EXPLORE OUR OFFERINGS</h4>
              <h1 className="heading-lg text-coffee-espresso mb-6">Our Coffee Menu</h1>
              <p className="body-lg text-coffee-dark/80 mb-8">
                Browse our carefully curated selection of premium coffees, each crafted with passion and expertise to bring out the unique character of the beans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-coffee-cream/50 sticky top-16 bg-white z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-coffee-medium text-white"
                  : "bg-coffee-light/50 text-coffee-dark hover:bg-coffee-light"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Coffees
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === "espresso"
                  ? "bg-coffee-medium text-white"
                  : "bg-coffee-light/50 text-coffee-dark hover:bg-coffee-light"
              }`}
              onClick={() => setSelectedCategory("espresso")}
            >
              Espresso-Based
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === "cold"
                  ? "bg-coffee-medium text-white"
                  : "bg-coffee-light/50 text-coffee-dark hover:bg-coffee-light"
              }`}
              onClick={() => setSelectedCategory("cold")}
            >
              Cold Brews
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === "specialty"
                  ? "bg-coffee-medium text-white"
                  : "bg-coffee-light/50 text-coffee-dark hover:bg-coffee-light"
              }`}
              onClick={() => setSelectedCategory("specialty")}
            >
              Specialty Blends
            </button>
          </div>
        </div>
      </section>

      {/* Coffee Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoffees.map((coffee, index) => (
              <CoffeeCard key={coffee.id} coffee={coffee} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
