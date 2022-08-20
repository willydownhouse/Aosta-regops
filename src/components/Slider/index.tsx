import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import './slider.css';

type Props = {
  children: React.ReactNode[];
  extra_class: string;
};

function Slider({ children, extra_class }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<number | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        window.setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 10000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex(val => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex(val => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if ((timeID as number) > 0) {
      clearTimeout(timeID as number);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className={`container__slider`}
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={'slider__item slider__item-active-' + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? 'container__slider__links-small container__slider__links-small-active'
                  : 'container__slider__links-small'
              }
              onClick={e => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
        onClick={e => {
          e.preventDefault();
          slideNext();
        }}
      >
        <FaAngleRight />
      </button>
      <button
        className="slider__btn-prev"
        onClick={e => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <FaAngleLeft />
      </button>
    </div>
  );
}

export default Slider;
