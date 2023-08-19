export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/app/dashboard",
        icon: "fa fa-home",
        type: "link",
        active: false,
        selected: true,
        title: "Dashboard",
      }
    ],
  },
  {
    menutitle: "APLICACIONES",
    Items: [
      {
        path: "/app/applications/services-day",
        icon: "fa fa-car",
        type: "link",
        active: false,
        selected: false,
        title: "Servicios del dia",
      },
      {
        path: "/app/applications/map",
        icon: "fa fa-map",
        type: "link",
        active: false,
        selected: false,
        title: "Mapa",
      },
      {
        path: "/app/applications/routes",
        icon: "fa fa-road",
        type: "link",
        active: false,
        selected: false,
        title: "Rutas",
      }
    ],
  },
  {
    menutitle: "REPORTES",
    Items: [
      {
        path: "/app/reports/services-day",
        icon: "fa fa-car",
        type: "link",
        active: false,
        selected: false,
        title: "Servicios del dia",
      },
      {
        path: "/app/reports/kpi",
        icon: "fa fa-bar-chart",
        type: "link",
        active: false,
        selected: false,
        title: "KPI",
      }
    ],
  },
  {
    menutitle: "CONFIGURACIONES",
    Items: [
      {
        path: "/app/settings/company",
        icon: "fa fa-bank",
        type: "link",
        active: false,
        selected: false,
        title: "Empresa",
      },
      {
        path: "/app/settings/users",
        icon: "fa fa-users",
        type: "link",
        active: false,
        selected: false,
        title: "Usuarios",
      },
      {
        path: "/app/settings/system",
        icon: "fa fa-cog",
        type: "link",
        active: false,
        selected: false,
        title: "Sistema",
      },
      {
        path: "/",
        icon: "fa fa-sign-out",
        type: "link",
        active: false,
        selected: false,
        title: "Salir",
      }
    ],
  },
];
