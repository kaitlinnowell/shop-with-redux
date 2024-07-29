import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers'

const store = createStore(reducers);

const StoreProvider = ({ value = [], ...props }) => {

  return <Provider store={store} {...props} />;
};

export { StoreProvider };
