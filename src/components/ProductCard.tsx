import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  benefits: string[];
  image: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, benefits, image, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <div className="mushroom-icon">{image}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <ul className="product-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <button className="product-button">Learn More</button>
      </div>
    </div>
  );
};

export default ProductCard;