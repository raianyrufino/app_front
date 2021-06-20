import { all } from 'redux-saga/effects';

import procedimento from './procedimento/sagas';
import servico from './servico/sagas';

export default function* rootSaga() {
  return yield all([procedimento, servico]);
}
