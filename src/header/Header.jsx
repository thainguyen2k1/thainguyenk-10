import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="flex gap-10">
        <NavLink to="/">Trang chu</NavLink>
        <NavLink to="/register">Trang Dang Ki</NavLink>
        <NavLink to="/login">Trang Dang Nhap</NavLink>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
