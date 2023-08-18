export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/components/dashboard/dashboard",
        icon: "ti-home",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      }
    ],
  },
  {
    menutitle: "APPLICATIONS",
    Items: [
      {
        title: "Apps",
        icon: "ti-write",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/components/apps/widgets",
            icon: "ti-server",
            type: "link",
            active: false,
            selected: false,
            title: "Widgets",
          },
         
        ],
      },
    ],
  },
];
