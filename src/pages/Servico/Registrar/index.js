import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import {
    create,
} from '../../../store/modules/servico/actions';

const Registrar = () => {
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    
    const validateMessages = {
        required: 'O campo ${label} é obrigatório!',
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        dispatch(create(values.nome, values.valor));
        form.resetFields();
    };

    return (
        <div style={{textAlign: 'center'}}>
        <h2 style={{textAlign: 'center', marginTop: '10px'}}>Registrar Serviço</h2>

        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
          <Input style={{width: '500px'}} />
        </Form.Item>
        <Form.Item name="valor" label="Valor" rules={[{ required: true }]}>
          <Input style={{width: '500px'}} />
        </Form.Item> 
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submeter
            </Button>
        </Form.Item>
        </Form>
        </div>
    );
};

export default Registrar;