function getMenuItems() {
  const menu = [
    {
      menu: "Menu",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: "airplay",
        },
        {
          title: "Order List",
          url: "order-list",
          icon: "list",
        },
      ],
    },
    {
      menu: "Master",
      items: [
        {
          title: "Master Data 1",
          url: "master-1",
          icon: "database",
        },
        {
          title: "Master Data 2",
          url: "master-2",
          icon: "database",
        },
      ],
    },
    {
      menu: "Settings",
      items: [
        {
          title: "Settings Account",
          url: "setting-account",
          icon: "settings",
        },
        {
          title: "Settings Appreance",
          url: "setting-appreance",
          icon: "settings",
        },
      ],
    },
  ];

  return menu;
}

export default getMenuItems;
