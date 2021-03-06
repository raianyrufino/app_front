import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persist = persistReducer(
    {
      key: 'app',
      storage,
      whitelist: ['procedimento'],
    },
    reducers
  );
  return persist;
};
