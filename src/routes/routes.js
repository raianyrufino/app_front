const routes = [
  {
    title: 'Procedimentos',
    component: 'Procedimento/Listar',
    path: '/',
    auth: false,
    exact: true,
  },
  {
    title: 'Procedimento',
    component: 'Procedimento/Visualizar',
    path: '/procedimentos/:id',
    auth: false,
    exact: true,
  },
  {
    title: 'Servicos',
    component: 'Servico/Listar',
    path: '/servicos',
    auth: false,
    exact: true,
  },
  {
    title: 'RegistrarProcedimento',
    component: 'Procedimento/Registrar',
    path: '/form-procedimento',
    auth: false,
    exact: true,
  },
  {
    title: 'RegistrarServico',
    component: 'Servico/Registrar',
    path: '/form-servico',
    auth: false,
    exact: true,
  },
];

export default routes;
