import '../../styles/main/products.css';
import type { Product } from '../../types/main';
import type { JSX } from 'react';
import { useState } from 'react';

function Products(): JSX.Element {
  const items: Product[] = [
    {name: 'Spread Collar Shirt', price: 48.99, rating: 5.0},
    {name: 'White Solid Formal Shirt', price: 39.00, rating: 4.9},
    {name: 'Shine On Me Blouse', price: 42.99, rating: 4.8},
    {name: 'Gray Solid Padded Jacket', price: 32.99, rating: 4.7},
    {name: 'Printed Loose T-shirt', price: 39.99, rating: 5.0},
    {name: 'Summer Wind Crop Shirt', price: 39.95, rating: 4.7},
    {name: 'Tailored Jacket', price: 46.00, rating: 4.9},
    {name: 'Solid Round Neck T-shirt', price: 36.00, rating: 5.0},
  ];

  const categories: string[] = ['Sale', 'HOT', 'New Arrivals', 'Accessories'];
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const startItems: Product[] = items.slice(0, activeCategory);

  return (
    <section className='products'>
      <h2 className='products-title'>Our products</h2>
      <div className='products-categories'>
        {categories.map((category, index) => {
          return (
            <p className={`products-categories-category ${activeCategory === index ? 'products-categories-category-active' : ''}`} onClick={() => setActiveCategory(() => index)} key={category}>{category}</p>
          )
        })}
      </div>
      <div className='products-cards'>
        {
          items.slice(activeCategory).concat(startItems).map((card, index) => {
            return (
              <a className='products-cards-card' key={card.name} href=''>
                <img className='products-cards-card-img' src={`../../images/products/${(index + activeCategory) % items.length + 1}.png`} alt="" />
                <h6 className='products-cards-card-title'>{card.name}</h6>
                <div className='products-cards-card-numbers'>
                  <span className='products-cards-card-numbers-price'>${card.price.toFixed(2)}</span>
                  <div className='line'></div>
                  <span className='products-cards-card-numbers-rating'>
                    {card.rating.toFixed(1)}
                    <img src="../../images/icons/star.svg" alt="" />
                  </span>
                </div>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}

export default Products;