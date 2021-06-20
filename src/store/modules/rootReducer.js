import { combineReducers } from 'redux';

import procedimento from './procedimento/reducer';
import servico from './servico/reducer';
import toast from './toast/reducer';

export default combineReducers({
  procedimento,
  servico,
  toast,
});
