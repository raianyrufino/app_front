import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, Descriptions, Layout, Table } from 'antd';
import {
  getById,
} from '../../../store/modules/procedimento/actions';

const { Content } = Layout;

const Registrar = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const { Column } = Table;

    const {
        procedimento
    } = useSelector(state => state.procedimento);

    useEffect(() => {
      dispatch(getById(id));
    }, []);

    let locale = {
        emptyText: procedimento
          ? 'Não há serviços registradas neste procedimento.'
          : 'Buscando serviços registradas neste procedimento.',
    };

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Procedimentos"
            >
            <Descriptions size="small" column={3}>
                <Descriptions.Item label="Nome">{procedimento.nome}</Descriptions.Item>
                <Descriptions.Item label="Valor Total">
                    <a>{formatter.format(procedimento.valor)}</a>
                </Descriptions.Item>
                <Descriptions.Item label="Comissão do Profissional">
                    <a>{formatter.format(procedimento.comissao)}</a>
                </Descriptions.Item>
                <Descriptions.Item label="Serviços">
                    <Layout className="layout">
                    <Content>
                        <Table
                            dataSource={procedimento.servicos}
                            locale={locale}
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
                </Descriptions.Item>
            </Descriptions>
            </PageHeader>
        </div>
    );
};

export default Registrar;