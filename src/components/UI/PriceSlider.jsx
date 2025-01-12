import React, {  useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

const PriceSlider = (props) => {
  
  const {setSelectedPriceRange, selectedPriceRange} = props;

  const handleSliderChange = (value) => {
    setSelectedPriceRange(value);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold mb-4">Price Range</h2>
      <ReactSlider
        className="horizontal-slider w-full"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        max={10000}
        value={selectedPriceRange}
        onChange={handleSliderChange}
        renderTrack={(props, state) => (
            <div
              {...props}
              className={`track ${
                state.index === 1 ? 'active-track' : ''
              }`}
            ></div>
          )}
      />
      <div className="flex justify-between w-full text-sm mt-2">
        <span>Rs{selectedPriceRange[0].toLocaleString()}</span>
        <span>Rs{selectedPriceRange[1].toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
