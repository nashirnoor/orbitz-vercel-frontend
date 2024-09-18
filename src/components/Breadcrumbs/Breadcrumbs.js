import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css'; 

function Breadcrumb({...props}) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <nav className="breadcrumb" {...props}>
      <Link to="/" >Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={to} className="breadcrumb-item">
            <span className="separator">/</span>
            <Link to={to} className={(index===pathnames.length-1?'last-item':'')}>
              {decodeURIComponent(value.replace(/-/g, ' ').charAt(0) + value.replace(/-/g, ' ').slice(1))}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
