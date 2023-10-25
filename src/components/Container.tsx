import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='lg:max-w-8xl mx-auto max-sm:px-4 md:px-4 lg:px-4 xl:max-w-7xl xl:px-16 2xl:px-0'>
      {children}
    </div>
  );
};

export default Container;
