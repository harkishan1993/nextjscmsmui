// Define types
export interface MenuItemType {
    id: number;
    url: string;
    name: string;
    icon :string;
    level: number;
    children?: MenuItemType[];
  }
  
  // Sample menu data
  export const menuData: MenuItemType[] = [
  
    {
      id: 2,
      url: "/pages",
      name: "pages",
      level: 1,
      icon: "bi:file-earmark",
      children: [
        {
          id: 21,
          url: "/ecommerce",
          name: "ecommerce",
          level: 2,
          icon: "uil:circle",
          children: [
            { id: 211, url: "/products",  level: 3,  icon: "uil:circle", name: "Add products" ,children:[{id:3, url: "/nem",level: 4,  icon: "uil:circle", name: "nem"}]},
            { id: 212, url: "/orders", level: 3,  icon: "uil:circle", name: "Order", children:[{id:4, url: "/nem",level: 4,  name: "mem" , icon: "uil:circle",}] },
            { id: 213, url: "/cart",  level: 3,  icon: "uil:circle", name: "Cart" },
          ],
        },
        {
          id: 22, url: "/blog", name: "Blog",
          icon: "uil:circle",
          level: 2,
          children: [
            { id: 221, url: "/blog",level: 3, icon: "uil:circle", name: "Blog" },
            { id: 222, url: "/orders", level: 3,  icon: "uil:circle", name: "Blog details" },
            { id: 233, url: "/cart",icon: "uil:circle", level: 3,  name: "Create blog" },
          ],
        },
      ],
    },
    {
      id: 1,
      url: "/dashboard",
      name: "dashboard",
      level: 1,
      icon: "material-symbols:dashboard-rounded",
      children: [
        {
          id: 11,
          url: "/ecommerce",
          icon: "uil:circle",
          level: 2,
          name: "ecommerce"
        },
        {
          id: 12, url: "/blog", name: "Blog",icon: "uil:circle" ,level: 2
        },
      ],
    },
  ];