import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
  const [selected, setSelected] = useState('');

  let location = useLocation();

  const rota = location.pathname;

  useEffect(() => {
    if (rota === '/') {
      setSelected('1');
    } else if (rota === '/servicos') {
      setSelected('2');
    } else if (rota === '/form-procedimento') {
      setSelected('3');
    } else if (rota === '/form-servico') {
      setSelected('4');
    } 
  });

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={selected}>
        <Menu.Item key="1">
          {' '}
          <Link to="/" /> Listar Procedimentos
        </Menu.Item>
        <Menu.Item key="2">
          {' '}
          <Link to="/servicos" /> Listar Serviços
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <Link to="/form-procedimento" /> Registrar Procedimentos
        </Menu.Item>
        <Menu.Item key="4">
          {' '}
          <Link to="/form-servico" /> Registrar Serviços
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
