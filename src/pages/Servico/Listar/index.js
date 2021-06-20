import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Table } from 'antd';

import {
  getAllWithPagination,
} from '../../../store/modules/servico/actions';

const { Content } = Layout;

export default function Listar() {
  const dispatch = useDispatch();

  const { Column } = Table;

  const [page, setPage] = useState(1);

  const {
    servicos,
    current_page,
    total
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
      getAllWithPagination(page)
    );
  }, [page]);

  useEffect(() => {
    dispatch(getAllWithPagination(1));
  }, []);

  return (
    <Layout className="layout">
        <Content>
            <Table
                locale={locale}
                dataSource={servicos}  
                pagination={{
                  current: current_page,
                  onChange: setPage,
                  total: total,
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
