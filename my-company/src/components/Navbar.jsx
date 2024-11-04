import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ margin:0,padding: '0 1rem', backgroundColor: '#333',display:'flex',justifyContent:'space-between',alignItems:'stretch',gap:'2rem', color: '#fff', textAlign: 'center' }}>
     <h1>Mycompany</h1>
      <Link to="/" style={{ margin: '0 10px',display:'flex',alignItems:'center',padding:'0.25rem', color: '#fff',listStyleType:'none' ,textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px',display:'flex',alignItems:'center',padding:'0.25rem', color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px',display:'flex',alignItems:'center',padding:'0.25rem', color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px',display:'flex',alignItems:'center',padding:'0.25rem', color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
