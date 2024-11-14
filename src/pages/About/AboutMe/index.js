import React from 'react';

import MarkDown from '@/components/MarkDown';

function AboutMe({content, className}) {
  return (
    <div className={className}>
      <MarkDown content={content || ''} />
    </div>
    
  );
}

export default AboutMe;
