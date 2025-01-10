import React from 'react';
import { Link } from 'react-router';
import { Title } from '@/components/myTitle';
const NotFound = () => {
  return (
    <div>
      <Title cont='404 找不到頁面' />
      <Link to='/' className='c-blue-500  ml-5 inline-block'>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
