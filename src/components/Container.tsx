import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='max-w-8xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 '>
      {children}
    </div>
  );
};

export default Container;
