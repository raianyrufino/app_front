import React from "react";
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';
import { add, ServicoTypes } from './actions';
import { addToast } from '../toast/actions';

import { Select } from 'antd';

export function* getServicos({ payload }) {
  yield delay(50);

  const response = yield call(
    api,
    'get',
    '/servicos',
    {},
    {page: payload.page}
  );
  const { data, status } = response;

  const { Option } = Select;

  switch (status) {
    case 200:

      const opcoes_servicos = [];
      if (data.data) {
        for (let i = 0; i < data.data.length; i++) {
          opcoes_servicos.push(<Option key={data.data[i].id}>{data.data[i].nome}</Option>);
        }
      }

      yield put(
        add(
            data.data,
            opcoes_servicos,
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

export function* createServico({ payload }) {
  const response = yield call(
    api,
    'post',
    `/servicos`,
    {
      nome: payload.nome,
      valor: payload.valor,
    },
    {}
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        addToast({
          titulo: 'Serviço registrado com sucesso',
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
  takeLatest(ServicoTypes.GET_ALL, getServicos),
  takeLatest(ServicoTypes.CREATE, createServico),
]);
