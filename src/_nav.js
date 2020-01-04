export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'F I T U R',
      wrapper: {
        element: '', // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'M A S T E R',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Account',
      url: '/akun',
      icon: 'icon-people',
      children: [
        {
          name: 'Role',
          url: '/akun/role',
          icon: 'fa fa-angle-double-right',
        },
        {
          name: 'User',
          url: '/akun/user',
          icon: 'fa fa-angle-double-right',
        },
      ],
    },
    {
      name: 'Data Master',
      url: '/master',
      icon: 'fa fa-tasks',
      children: [
        {
          name: 'Position',
          url: '/master/position',
          icon: 'fa fa-angle-double-right',
        },
      ],
    },
  ],
}
