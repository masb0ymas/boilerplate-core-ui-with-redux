import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Role = React.lazy(() => import('./views/Master/Role'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/master', exact: true, name: 'Master', component: Role },
  { path: '/master/role', name: 'Role', component: Role },
]

export default routes
