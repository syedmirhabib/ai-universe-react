import React from 'react';
import Header from './component/Header/Header';
import Button from './component/Button/Button';


const App = () => {
  return (
    <>
     <Header></Header>
     <Button>Sort by Date</Button>
     <Button>See More</Button>
    </>

  );
};

export default App;