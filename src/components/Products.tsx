import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import lionsManeImage from "../assets/products/lions-mane.png";
import reishiImage from "../assets/products/reishi.png";
import cordycepsImage from "../assets/products/cordyceps.png";
import chagaImage from "../assets/products/chaga.png";

interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: "lions-mane",
      name: "Lion's Mane",
      description: "Cognitive enhancement from nature's brain booster",
      benefits: ["Mental clarity", "Focus enhancement", "Memory support"],
      image: lionsManeImage,
    },
    {
      id: "reishi",
      name: "Reishi",
      description: "The mushroom of immortality for stress relief",
      benefits: ["Stress reduction", "Sleep quality", "Immune support"],
      image: reishiImage,
    },
    {
      id: "cordyceps",
      name: "Cordyceps",
      description: "Natural energy and athletic performance enhancer",
      benefits: ["Energy boost", "Athletic performance", "Vitality"],
      image: cordycepsImage,
    },
    {
      id: "chaga",
      name: "Chaga",
      description: "Antioxidant powerhouse from the northern forests",
      benefits: ["Immune boost", "Antioxidants", "Overall wellness"],
      image: chagaImage,
    },
  ];

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setIsModalOpen(true);

    // Analytics tracking
    if (window.gtag) {
      window.gtag("event", "product_click", {
        event_category: "engagement",
        event_label: productId,
        value: 1,
      });
    }

    // Simple analytics log for now
    console.log(`Product clicked: ${productId}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Premium Mushroom Collection</h2>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              benefits={product.benefits}
              image={product.image}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          productName={
            products.find((p) => p.id === selectedProduct)?.name || ""
          }
        />
      )}
    </section>
  );
};

export default Products;
