import '../../styles/main/exclusive.css';
import { useState, useEffect } from 'react';
import type { JSX } from 'react';

function Exclusive(): JSX.Element {
  const [minutes, setMinutes] = useState(9768);

  useEffect(() => {
    if (minutes <= 0) return;

    const timerId = setInterval(() => setMinutes(prev => prev - 1), 60000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className='exclusive'>
      <div className='exclusive-container'>
        <img className='exclusive-container-img' src="/Rivo/images/exclusive.png" alt="" />
        <div className='exclusive-container-text'>
          <h3 className='exclusive-container-text-title'>Exclusive offer</h3>
          <p className='exclusive-container-text-subtitle'>Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
          <div className='exclusive-container-text-time'>
            <div className='exclusive-container-text-time-block'>
              <p className='exclusive-container-text-time-block-number'>{Math.floor(minutes / 1440)}</p>
              <p className='exclusive-container-text-time-block-string'>Days</p>
            </div>
            <div className='exclusive-container-text-time-block'>
              <p className='exclusive-container-text-time-block-number'>{Math.floor((minutes - Math.floor(minutes / 1440) * 1440) / 60)}</p>
              <p className='exclusive-container-text-time-block-string'>Hours</p>
            </div><div className='exclusive-container-text-time-block'>
              <p className='exclusive-container-text-time-block-number'>{minutes - Math.floor((minutes - Math.floor(minutes / 1440) * 1440) / 60) * 60 - Math.floor(minutes / 1440) * 1440}</p>
              <p className='exclusive-container-text-time-block-string'>Min</p>
            </div>
          </div>
          <a href="">
            <button className='exclusive-button'>BUY NOW</button>
          </a>
        </div>
        <div className='exclusive-container-dots'></div>
        <div className='exclusive-container-square'></div>
      </div>
    </section>
  )
}

export default Exclusive;