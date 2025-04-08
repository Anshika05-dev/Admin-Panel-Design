import { Link } from 'react-router-dom';
const NavItem = ({ icon: Icon, label, isActive, to = '#' , badge = '', isOpen }) => (
    <Link 
      to={to}
      className={`nav-item ${isActive ? 'active' : ''}`}
      title={!isOpen ? label : ''}
    >
      <Icon />
      {isOpen && <span>{label}</span>}
      {isOpen && badge && <span className="nav-item-badge">{badge}</span>}
    </Link>
  );
  export default NavItem




    

