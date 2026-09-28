import '../../styles/main/designer.css';
import type { JSX } from 'react';

function Designer(): JSX.Element {
  return (
    <section className='designer'>
      <h2 className='designer-title'>Designer Clothes For You</h2>
      <p className='designer-subtitle'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
      <div className='designer-blocks'>
        <a className='designer-blocks-block' href=''>
          <img className='designer-blocks-block-img' src="/Rivo/images/designer/1.png" alt="" />
          <h5 className='designer-blocks-block-title'>Accessories</h5>
          <p className='designer-blocks-block-subtitle'>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
        </a>
        {/* <!--Фотографии в Dresses и Outerwear перепутаны в дизайне--> */}
        <a className='designer-blocks-block' href=''>
          <img className='designer-blocks-block-img' src="/Rivo/images/designer/2.png" alt="" />
          <h5 className='designer-blocks-block-title'>Dresses</h5>
          <p className='designer-blocks-block-subtitle'>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
        </a>
        <a className='designer-blocks-block' href=''>
          <img className='designer-blocks-block-img' src="/Rivo/images/designer/3.png" alt="" />
          <h5 className='designer-blocks-block-title'>Outerwear</h5>
          <p className='designer-blocks-block-subtitle'>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
        </a>
      </div>
    </section>
  )
}

export default Designer;