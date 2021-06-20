export const ServicoTypes = {
    GET_ALL: '@servicos/GET_ALL',
    ADD: '@servicos/ADD',
    CREATE: '@servicos/CREATE',
    GET_ALL_WITH_PAGINATION: '@servicos/GET_ALL_WITH_PAGINATION',
    ADD_OPTIONS: '@servicos/ADD_OPTIONS'
};
  
export function getAll() {
    return {
      type: ServicoTypes.GET_ALL,
      payload: {},
    };
}
  
export function getAllWithPagination(page) {
  return {
    type: ServicoTypes.GET_ALL_WITH_PAGINATION,
    payload: {page},
  };
}

export function create(nome, valor){
    return {
      type: ServicoTypes.CREATE,
      payload: { nome, valor },
    }
}
  
export function add(servicos, last_page, current_page, per_page, total) {
    return {
      type: ServicoTypes.ADD,
      payload: { servicos, last_page, current_page, per_page, total },
    };
}

  
export function addOptions(opcoes_servicos) {
  return {
    type: ServicoTypes.ADD_OPTIONS,
    payload: { opcoes_servicos },
  };
}

  
