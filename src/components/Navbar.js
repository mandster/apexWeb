const Navbar = () => {
  console.log('Navbar component rendered');

  return (
    
<div className="dropdown">
  <button data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init
    className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li>
      <a className="dropdown-item" href="#">Another action</a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Submenu &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">Submenu item 1</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 2</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 3 &raquo; </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="#">Multi level 1</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Multi level 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 4</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 5</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
  );
};
export default Navbar;
