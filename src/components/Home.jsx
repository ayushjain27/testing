import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
      <button style={{ cursor: 'pointer'}} onClick={()=>navigate('/test')}>Click on me</button>
  )
}

export default Home
