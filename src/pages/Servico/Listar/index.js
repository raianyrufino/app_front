import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Table } from 'antd';

import {
  getAll,
} from '../../../store/modules/servico/actions';

const { Content } = Layout;

export default function Listar() {
  const dispatch = useDispatch();

  const { Column } = Table;

  const {
    servicos,
  } = useSelector(state => state.servico);

  let locale = {
    emptyText: servicos
      ? 'Não há serviços registradas no sistema.'
      : 'Buscando serviços registradas no sistema.',
  };

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    dispatch(
      getAll()
    );
  }, []);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Layout className="layout">
        <Content>
            <Table
                locale={locale}
                dataSource={servicos}  
                pagination={{
                  defaultPageSize: 10,
                  showSizeChanger: false,
                }}  
            >
                <Column title="Nome" dataIndex="nome" key="nome" />
                <Column 
                  title="Valor" 
                  dataIndex="valor" 
                  key="valor" 
                  render={(valor) => {
                    return formatter.format(valor)
                  }}
                />
            </Table>
        </Content>
    </Layout>
  );
}
