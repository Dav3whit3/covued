const SideBarDashboard = {
  name: "Dashboard",
  li: {
    className: "nav-item",
  },
  a: {
    href: "/",
    className: "nav-link",
  },
  i: {
    className: "bi bi-grid"
  },
  children: {
    
  }
};

const SideBarComponents = {
  name: "Components",
  li: {
    className: "nav-item",
  },
  a: {
    href: "#",
    className: "nav-link collapsed btn disabled",
    "data-bs-target": "#components-nav",
    "data-bs-toggle": "collapse"
  },
  i: {
    className: "bi bi-menu-button-wide"
  },
  dropdown: true,
  children: {
    
  }
};

export { 
  SideBarDashboard,
  SideBarComponents
 };
