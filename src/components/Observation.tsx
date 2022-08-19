import React from 'react';
import { IServerOb } from '../interfaces/observation';
import { FlexWrapper, ObGrid } from '../styles/utils';
import Slider from './Slider';

type ObservationProps = {
  ob: IServerOb | null;
};
function Observation({ ob }: ObservationProps) {
  if (!ob) return null;

  const type =
    ob.type[0].slice(0, 1).toUpperCase() +
    ob.type[0].slice(1).replace('_', ' ');

  const date = ob.createdAt.slice(0, ob.createdAt.length - 6).replace(',', '');
  return (
    <>
      <ObGrid>
        <FlexWrapper
          $direction="column"
          $align="start"
          className="ob_details_title"
        >
          <h4>{`${type}`}</h4>
          <h6>{date}</h6>
          <h6>{`${ob.valley}, ${ob.zone}`}</h6>
        </FlexWrapper>
        <FlexWrapper>
          <label>altitude:</label>
          <p>
            <strong>{ob.altitude}m</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>aspect:</label>
          <p>
            <strong>{ob.aspect}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>slope angle:</label>
          <p>
            <strong>{ob.slope_angle}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>snow cover:</label>
          <p>
            <strong>{ob.snow_cover}cm</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>avalance danger:</label>
          <p>
            <strong>{ob.avalance_danger}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>temperature:</label>
          <p>
            <strong>{ob.temperature}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>wind:</label>
          <p>
            <strong>{ob.wind_direction}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>wind speed:</label>
          <p>
            <strong>{ob.wind_speed}m/s</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>weather:</label>
          <p>
            <strong>{ob.weather}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>snow tests:</label>

          {ob.snow_tests.length === 0 ? (
            <p>
              <strong>-</strong>
            </p>
          ) : (
            <>
              {ob.snow_tests.map(test => {
                return (
                  <FlexWrapper key={test.result}>
                    <label>{test.name}:</label>
                    <p>
                      <strong>{test.result}</strong>
                    </p>
                    <p>stability:</p>
                    <p>
                      <strong>{test.stability}</strong>
                    </p>
                  </FlexWrapper>
                );
              })}
            </>
          )}
        </FlexWrapper>
        <FlexWrapper>
          <label>description:</label>
          <p>
            <strong>{ob.description}</strong>
          </p>
        </FlexWrapper>
        <FlexWrapper>
          <label>created:</label>
          <p>
            <strong>{ob.createdBy}</strong>
          </p>
        </FlexWrapper>
      </ObGrid>

      <Slider extra_class="slider">
        {ob.photos.map(image => {
          return <img key={image} src={image} alt={image} />;
        })}
      </Slider>
    </>
  );
}

export default Observation;
