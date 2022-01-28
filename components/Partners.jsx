import Image from "next/image"
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselLogo, CarouselMobileScrollNode } from './styles/PartnersStyle';
import data from '../constants/data';
import { useEffect, useRef, useState } from "react";

const TOTAL_CAROUSEL_COUNT = data.partners.length;

const Partners = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TOTAL_CAROUSEL_COUNT);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-12 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20">
          <h2 className="max-w-lg mb-6 font-Raleway text-3xl font-black leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            Partenaires
          </h2>
        </div>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {data.partners.map((item, index) => (
              <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
                <CarouselItem
                  index={index}
                  id={`carousel_item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselLogo
                    src={item.logo}
                  />
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {data.partners.map((item, index) => (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          ))}
        </CarouselButtons>
      </div>
    </div>
  )
}

export default Partners
