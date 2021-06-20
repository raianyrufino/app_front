import produce from 'immer';
import { ProcedimentoTypes } from './actions';

const initialStatte = {
  procedimentos: [],
  procedimento: null,
  nome: null,
  valor: null,
  servicos: null,
  last_page: null,
  current_page: null,
  per_page: null,
  total: null
};

export default function procedimento(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ProcedimentoTypes.ADD: {
        draft.procedimentos = action.payload.procedimentos;
        draft.last_page = action.payload.last_page;
        draft.current_page  = action.payload.current_page;
        draft.per_page = action.payload.per_page;
        draft.total = action.payload.total;
        break;
      }
      case ProcedimentoTypes.ADD_BY_ID: {
        draft.procedimento = action.payload.procedimento;
        break;
      }
      default:
    }
  });
}
