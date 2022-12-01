import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header>
        <div className="layout-links">
          <NavLink
            to="/Albums"
            end={true}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Albums
          </NavLink>
          <NavLink
            to="/Users"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Users
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <div className="line"></div>
      <footer>
        <div className="footer-text">
          <div>Created by: Sidorov Saveliy</div>
          <div>BSU: 2022</div>
        </div>
      </footer>
    </div>
  );
}
