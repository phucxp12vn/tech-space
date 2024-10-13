'use client';

import React from 'react';

import ChartThree from '../Charts/ChartThree';
import ChartFive from '../Charts/ChartFive';

const BasicChart: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
      <ChartThree />
      <div className="col-span-12 xl:col-span-5">
        <ChartFive />
      </div>
    </div>
  );
};

export default BasicChart;
