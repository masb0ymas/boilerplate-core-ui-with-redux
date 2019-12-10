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
      name: 'Theme',
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
      name: 'Data Master',
      url: '/master',
      icon: 'fa fa-tasks',
      children: [
        {
          name: 'Role',
          url: '/master/role',
          icon: 'fa fa-angle-double-right',
        },
        {
          name: 'Position',
          url: '/master/position',
          icon: 'fa fa-angle-double-right',
        },
      ],
    },
  ],
}
