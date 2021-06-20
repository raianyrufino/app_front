import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Select, Input } from 'antd';
import {
  getAll as getAllServicos,
} from '../../../store/modules/servico/actions';
import {
  create,
} from '../../../store/modules/procedimento/actions';

const Registrar = () => {
    const dispatch = useDispatch();

    const {
      opcoes_servicos
    } = useSelector(state => state.servico);

    const [form] = Form.useForm();

    useEffect(() => {
      dispatch(getAllServicos());
    }, []);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    
    const validateMessages = {
        required: 'O campo ${label} é obrigatório!',
    };
    
    const onFinish = (values) => {
      dispatch(create(values.nome, values.servicos));
      form.resetFields();
    };

    return (
        <div style={{textAlign: 'center'}}>
        <h2 style={{textAlign: 'center', marginTop: '10px'}}> Registrar Procedimento</h2>

        <Form {...layout}  form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
          <Input style={{width: '500px'}}/>
        </Form.Item>
        <Form.Item name="servicos" label="Serviços" rules={[{ required: true, type: 'array' }]}>
          <Select mode="multiple" placeholder="Selecione os serviços vinculados a este procedimento" style={{width: '500px'}}>
            {opcoes_servicos}
          </Select>
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