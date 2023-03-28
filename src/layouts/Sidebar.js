import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Campaigns",
    href: "/campaigns",
    icon: "bi bi-people",
    subcategorycampaign: [
      {
        title: "Create",
        href: "/createcampaign",
        icon: "bi bi-create",
      },
    ],
  },
  {
    title: "Organizations",
    href: "/organization",
    icon: "bi bi-people",
    subcategoryorg: [
      {
        title: "Requests",
        href: "/campaigns",
        icon: "bi bi-box-arrow-in-right",
      },
    ],
  },
  {
    title: "Users",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-1">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
                {navi.subcategoryorg && ( 
                  <i className="bi bi-chevron-right ms-auto">
                    <ul className="sub-menu">
                      {navi.subcategoryorg.map((subnavi, index) => (
                        <li key={index}>
                          <Link
                            to={subnavi.href}
                            className={
                              location.pathname === subnavi.href
                                ? "text-primary nav-link py-3"
                                : "nav-link text-secondary py-3"
                            }
                          >
                            <i className={subnavi.icon}></i>
                            <span className="ms-3 d-inline-block">
                              {subnavi.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </i>
                )}
                {navi.subcategorycampaign && (
                  <i className="bi bi-chevron-right ms-auto">
                    <ul className="sub-menu">
                      {navi.subcategorycampaign.map((subnavi, index) => (
                        <li key={index}>
                          <Link

                            to={subnavi.href} 
                            className={
                              location.pathname === subnavi.href
                                ? "text-primary nav-link py-3"
                                : "nav-link text-secondary py-3"
                            }
                          >
                            <i className={subnavi.icon}></i>
                            <span className="ms-3 d-inline-block">
                              {subnavi.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </i>
                )}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
