import produce from 'immer';
import { ServicoTypes } from './actions';

const initialStatte = {
  servicos: null,
  opcoes_servicos: [],
  last_page: null,
  current_page: null,
  per_page: null,
  total: null
};

export default function servico(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ServicoTypes.ADD: {
        draft.servicos = action.payload.servicos;
        draft.last_page = action.payload.last_page;
        draft.current_page  = action.payload.current_page;
        draft.per_page = action.payload.per_page;
        draft.total = action.payload.total;
        break;
      }
      case ServicoTypes.ADD_OPTIONS: {
        draft.opcoes_servicos = action.payload.opcoes_servicos;
        break;
      }
      default:
    }
  });
}
