import React from "react";
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';
import { add, addById, ProcedimentoTypes } from './actions';
import { addToast } from '../toast/actions';

export function* getProcedimentos({ payload }) {
  yield delay(50);
  
  const response = yield call(
    api,
    'get',
    '/procedimentos',
    {},
    {page: payload.page}
  );

  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        add(
          data.data,
          data.last_page,
          data.current_page,
          data.per_page,
          data.total
        )
      );
      break;
    default:
      yield put(
        addToast({
          titulo: 'Ocorreu um erro no servidor!',
          texto: 'Tente novamente mais tarde, por favor.',
          tipo: 'danger',
        })
      );
  }
}

export function* getById({ payload }) {
  yield delay(50);
  
  const response = yield call(
    api,
    'get',
    `/procedimento/${payload.id}`,
    {},
    {}
  );

  const { data, status } = response;
  
  switch (status) {
    case 200:
      yield put(addById(data));
      break;
    case 404:
      yield put(
        addToast({
          titulo: response.data.erro,
          texto: '',
          tipo: 'warning',
        })
      );
      break;
    default:
      yield put(
        addToast({
          titulo: 'Ocorreu um erro no servidor!',
          texto: 'Tente novamente mais tarde, por favor.',
          tipo: 'danger',
        })
      );
  }
}

export function* createProcedimento({ payload }) {
  const response = yield call(
    api, 
    'post', 
    `/procedimentos`, 
    {
      nome: payload.nome,
      servicos: payload.servicos,
    }
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        addToast({
          titulo: 'Procedimento registrado com sucesso.',
          texto: '',
          tipo: 'success',
        })
      );
      break;
    case 406:
      yield put(
        addToast({
          titulo: response.data.erro,
          texto: '',
          tipo: 'warning',
        })
      );
      break;
    default:
      yield put(
        addToast({
          titulo: 'Ocorreu um erro no servidor!',
          texto: 'Tente novamente mais tarde, por favor.',
          tipo: 'danger',
        })
      );
  }
}

export default all([
  takeLatest(ProcedimentoTypes.GET_ALL, getProcedimentos),
  takeLatest(ProcedimentoTypes.CREATE, createProcedimento),
  takeLatest(ProcedimentoTypes.GET_BY_ID, getById),
]);
