import '../../styles/main/feedback.css';
import { useRef } from 'react';
import type { JSX } from 'react';

type FeedbackBlock = {
  title: string,
  subtitle: string,
}

function Feedback(): JSX.Element {
  const blocks: FeedbackBlock[] = [
    {title: 'Emily Wilson', subtitle: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"},
    {title: 'Sarah Thompson', subtitle: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"},
    {title: 'Olivia Martinez', subtitle: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"},
    {title: 'Emily Wilson', subtitle: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"},
    {title: 'Sarah Thompson', subtitle: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"},
    {title: 'Olivia Martinez', subtitle: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"}
  ];

  const slide = useRef<HTMLDivElement>(null);

  let i: number = 0;

  function goSlide(): void {
    if (slide.current !== null) {
      slide.current.style.transform = `translateX(-${472 * i}px)`;
    }
  }

  function goRight(): void {
    if (slide.current !== null) {
      i = (i + 1) % (blocks.length - 2);
      goSlide();
    }
  }

  function goLeft(): void {
    if (slide.current !== null) {
      if (i === 0) i = blocks.length - 3;
      else i--;
      goSlide();
    }
  }

  return (
    <section className='feedback'>
      <h2 className='feedback-title'>Feedback Corner</h2>
      <div className='feedback-blocks-slide'>
        <div className='feedback-blocks' ref={slide}>
          {blocks.map((block, index) => {
            return (
              <div className='feedback-blocks-block' key={index}>
                <img className='feedback-blocks-block-img' src="../../images/icons/quotes.svg" alt="" />
                <h5 className='feedback-blocks-block-title'>{block.title}</h5>
                <p className='feedback-blocks-block-subtitle'>{block.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='feedback-arrows'>
        <div className='feedback-arrows-left' onClick={goLeft}>
          <img src="../../images/icons/left.svg" alt="" />
        </div>
        <div className='feedback-arrows-right' onClick={goRight}>
          <img src="../../images/icons/right.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Feedback;