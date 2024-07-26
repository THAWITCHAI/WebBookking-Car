import * as React from 'react';

export interface IAppProps {
}

export default function Welcome (props: IAppProps) {
  return (
    <div className='content text-7xl text-center flex flex-col justify-center font-light'>
      <h1>Welcome to Website Booking Car</h1>
    </div>
  );
}
