import React from 'react';
import { SNavBar, StyledA } from '../styles/navbar';

type NavbarProps = {
  setShowStreetMap: (val: boolean) => void;
  showStreetMap: boolean;
};

function Navbar({ setShowStreetMap, showStreetMap }: NavbarProps) {
  return (
    <SNavBar>
      <h4>
        <StyledA>A</StyledA> RegObs
      </h4>
      <div>
        <label>Terrain map</label>
        <input
          type="checkbox"
          onChange={() => setShowStreetMap(!showStreetMap)}
        />
      </div>
    </SNavBar>
  );
}

export default Navbar;
