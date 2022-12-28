import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import personFill from "@iconify/icons-eva/person-fill";
import infofill from "@iconify/icons-eva/info-fill";
import settingsfill from "@iconify/icons-eva/settings-2-fill";
import searchFill from "@iconify/icons-eva/search-fill";
import user from "@iconify/icons-eva/person-add-fill";
import role from "@iconify/icons-eva/layers-fill";


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "profile",
    path: "/dashboard/myProfile",
    icon: getIcon(personFill),
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: getIcon(user),
  },
  {
    title: "Roles",
    path: "/dashboard/roles",
    icon: getIcon(role),
  },
  {
    title: "Content Repository",
    path: "/dashboard/user",
    icon: getIcon(settingsfill),
    children: [
      {
        path: "/dashboard/services",
        icon: getIcon(settingsfill),
        title: "Services",
      },
      {
        path: "/dashboard/industry",
        icon: getIcon(settingsfill),
        title: "Industry",
      },
      {
        path: "/dashboard/language",
        icon: getIcon(settingsfill),
        title: "Language",
      },
      {
        title: "Tech Stack",
        path: "/dashboard/tech-stack",
        icon: getIcon(infofill),
      },
      {
        title: "Tags",
        path: "/dashboard/tag",
        icon: getIcon(infofill),
      },
    ],
  },

  {
    title: "Vendor Profiles",
    path: "/dashboard/profiles",
    icon: getIcon(peopleFill),
  },
  {
    title: "Vendor Shortlist",
    path: "/dashboard/shortlist",
    icon: getIcon(searchFill),
  },
  {
    title: "Support",
    path: "/dashboard/contact",
    icon: getIcon(infofill),
  },
];

export default sidebarConfig;
