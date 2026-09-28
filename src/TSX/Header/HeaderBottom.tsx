import '../../styles/header/header_bottom.css';

import type { JSX } from 'react';

function HeaderBottom(): JSX.Element {
  return (
    <section className='header-bottom'>
      <div>
        <h1 className='header-bottom-title'>Discover and Find Your Own Fashion!</h1>
        <p className='header-bottom-subtitle'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
        <a href="">
          <button className='header-bottom-button'>Explore Now</button>
        </a>
      </div>
      <img className='header-bottom-img' src="/Rivo/images/titlephoto.png" alt="" />
    </section>
  )
}

export default HeaderBottom;