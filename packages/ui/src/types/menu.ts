export type MenuItem = {
  icon: JSX.Element;
  label: string;
  route: string;
  children?: {
    label: string;
    route: string;
  }[];
};

export type MenuGroup = {
  name: string;
  menuItems: MenuItem[];
};