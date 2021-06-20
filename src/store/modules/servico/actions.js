export const ServicoTypes = {
    GET_ALL: '@servicos/GET_ALL',
    ADD: '@servicos/ADD',
    CREATE: '@servicos/CREATE'
};
  
export function getAll() {
    return {
      type: ServicoTypes.GET_ALL,
      payload: {},
    };
}
  
export function create(nome, valor){
    return {
      type: ServicoTypes.CREATE,
      payload: { nome, valor },
    }
}
  
export function add(servicos, opcoes_servicos) {
    return {
      type: ServicoTypes.ADD,
      payload: { servicos, opcoes_servicos },
    };
}

  
