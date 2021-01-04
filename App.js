import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/index';
import storeConfig from './src/store/store-config';

const store = storeConfig();

export default () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
