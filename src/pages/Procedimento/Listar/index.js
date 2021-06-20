import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Table, Button, Tag } from 'antd';
import {
  getAll
} from '../../../store/modules/procedimento/actions';

const { Content } = Layout;

export default function Listar() {
  const dispatch = useDispatch();

  const { Column } = Table;

  const [page, setPage] = useState(1);

  const {
    procedimentos,
    current_page,
    total
  } = useSelector(state => state.procedimento);

  let locale = {
    emptyText: procedimentos
      ? 'Não há procedimentos registrados no sistema.'
      : 'Buscando procedimentos registrados no sistema.',
  };

  useEffect(() => {
    dispatch(
      getAll(page)
    );
  }, [page]);

  useEffect(() => {
    dispatch(getAll(1));
  }, []);

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return (
    <Layout className="layout">
        <Content>
            <Table
                dataSource={procedimentos}
                pagination={{
                  current: current_page,
                  onChange: setPage,
                  total: total,
                  defaultPageSize: 10,
                  showSizeChanger: false,
                }}
                locale={locale}
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
                <Column 
                  title="Serviços" 
                  dataIndex="servicos" 
                  key="servicos" 
                  render={(servicos) => {
                    return (
                      <span>
                      {servicos && servicos.map((servico, index) => {
                          let color = index % 2 == 0 ? 'geekblue' : 'green';
                          return (
                            <Tag color={color} key={servico.nome}>
                              {servico.nome.toUpperCase()}
                            </Tag>
                          );
                        })
                      }
                      </span> 
                    );
                  }}
                />
                <Column 
                  title="" 
                  key="visualizar" 
                  render={(procedimento) => {
                    return (
                      <Link to={`/procedimentos/${procedimento.id}`}>
                        <Button type="primary">
                          Ver detalhes
                        </Button>
                      </Link>
                    );
                  }}
                />
            </Table>
        </Content>
    </Layout>
  );
}
