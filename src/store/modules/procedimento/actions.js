export const ProcedimentoTypes = {
  GET_ALL: '@procedimentos/GET_ALL',
  ADD: '@procedimentos/ADD',
  CREATE: '@procedimentos/CREATE',
  GET_BY_ID: '@procedimentos/GET_BY_ID',
  ADD_BY_ID: '@procedimentos/ADD_BY_ID',
};

export function getAll(page) {
  return {
    type: ProcedimentoTypes.GET_ALL,
    payload: {page},
  };
}

export function create(nome, servicos){
  return {
    type: ProcedimentoTypes.CREATE,
    payload: { nome, servicos },
  }
}

export function add(procedimentos, last_page, current_page, per_page, total) {
  return {
    type: ProcedimentoTypes.ADD,
    payload: { procedimentos, last_page, current_page, per_page, total },
  };
}

export function getById(id) {
  return {
    type: ProcedimentoTypes.GET_BY_ID,
    payload: { id },
  };
}

export function addById(procedimento) {
  return {
    type: ProcedimentoTypes.ADD_BY_ID,
    payload: { procedimento },
  };
}