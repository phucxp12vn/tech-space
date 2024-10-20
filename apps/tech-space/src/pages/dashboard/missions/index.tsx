import React from 'react';
import dynamic from 'next/dynamic';

const MissionsPageRemote = dynamic(() => import('missions/pages'), {
  ssr: false, // Optional, if you want to disable server-side rendering
});

const MissionsPage = () => {
  return (
    <MissionsPageRemote />
  );
};

export default MissionsPage;
