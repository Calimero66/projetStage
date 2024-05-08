import {
  HomeIcon,
  UserPlusIcon ,
  DocumentArrowUpIcon,
} from "@heroicons/react/24/solid";
import { Home, CreateManager, CreateAgent, Leads } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserPlusIcon  {...icon} />,
        name: "Create Manager",
        path: "/CreateManager",
        element: <CreateManager />,
      },
      {
        icon: <UserPlusIcon  {...icon} />,
        name: "Create Agent",
        path: "/CreateAgent",
        element: <CreateAgent />,
      },
      {
        icon: <DocumentArrowUpIcon {...icon} />,
        name: "import List Of Clients",
        path: "/leads",
        element: <Leads />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
