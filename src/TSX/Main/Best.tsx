import '../../styles/main/best.css';
import type { Product } from '../../types/main';
import type { JSX } from 'react';

function Best(): JSX.Element {
  const items: Product[] = [
    {name: 'Regular Fit Long Sleeve Top', price: 38.99, rating: 5.0},
    {name: 'Black Crop Tailored Jacket', price: 62.99, rating: 4.9},
    {name: 'Textured Sunset Shirtt', price: 49.99, rating: 5.0}
  ];

  return (
    <section className='best'>
      <h2 className='best-title'>Best selling</h2>
      <p className='best-subtitle'>Get in on the trend with our curated selection of best-selling styles.</p>
      <div className='best-cards'>
        {
          items.map((card, index) => {
            return (
              <a className='best-cards-card' key={card.name} href=''>
                <img className='best-cards-card-img' src={`../../images/best/${index + 1}.png`} alt="" />
                <h6 className='best-cards-card-title'>{card.name}</h6>
                <div className='best-cards-card-numbers'>
                  <span className='best-cards-card-numbers-price'>${card.price}</span>
                  <div className='line'></div>
                  <span className='best-cards-card-numbers-rating'>
                    {card.rating === Math.floor(card.rating) ? card.rating.toString() + '.0' : card.rating}
                    <img src="../../images/icons/star.svg" alt="" />
                  </span>
                </div>
              </a>
            )
          })
        }
      </div>
      <button className='selling-button'>See all &rarr;</button>
    </section>
  )
}

export default Best;