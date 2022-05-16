import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ProductCard from './components/ProductCard';
import { getFakeStoreData } from './redux/services/general';


function App() {
  const dispatch = useDispatch();
  const { testProducts } = useSelector(state => state.general);

  useEffect(() => {
    dispatch(getFakeStoreData)().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log('Test Products are -> ', testProducts);
  }, [testProducts])



  return (
    <div className="App">
      {'This is a boilerplate App'}
      {
        testProducts.map(o => {
          return (
            <React.Fragment key={o.title}>
              <ProductCard />
            </ React.Fragment>
          )
        })}
    </div>
  );
}

export default App;
