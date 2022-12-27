import Link from "next/link";
const NavItem = ({ text, href,sethref, active }) => {
  return (
    <Link href={(sethref)?href:"javascript:void(0)"}>
      <a className={`nav__link`}>{text}</a>
    </Link>
  );
}; 

export default NavItem;
 