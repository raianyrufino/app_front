import produce from 'immer';
import { ServicoTypes } from './actions';

const initialStatte = {
  servicos: null,
  opcoes_servicos: [],
};

export default function servico(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ServicoTypes.ADD: {
        draft.servicos = action.payload.servicos;
        draft.opcoes_servicos = action.payload.opcoes_servicos;
        break;
      }
      default:
    }
  });
}
