import { Nav, NavItem, NavLink } from 'reactstrap';

const HeaderComponent = () => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className="navLink" href="#">
            男款
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">
            女款
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">
            最新消息
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">
            聯絡我們
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default HeaderComponent;
