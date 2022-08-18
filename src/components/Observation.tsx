import React from 'react';
import { IServerOb } from '../interfaces/observation';
import { ObGrid } from '../styles/utils';
import Slider from './Slider';

type ObservationProps = {
  ob: IServerOb;
};
function Observation({ ob }: ObservationProps) {
  if (!ob) return null;
  return (
    <div>
      <h5>
        {ob.type[0].slice(0, 1).toUpperCase() +
          ob.type[0].slice(1).replace('_', ' ')}
      </h5>
      <Slider extra_class="slider">
        {ob.photos.map(image => {
          return <img key={image} src={image} alt={image} />;
        })}
      </Slider>

      <p>{ob.valley}</p>
    </div>
  );
}

export default Observation;
