import { NavLink, useLocation } from "react-router-dom";
import routes from "@routes";
import "./sidebar.css";

const Sidebar = () => {
    const {pathname} = useLocation()
    console.log(pathname)

  return (
    <div className="sidebar">
    {
      routes.map((item,index)=>(
        <NavLink
        to={item.path}
        key={index}
        className={pathname == item.path ? "bg-danger p-2 text-white my-2" : "bg-info p-2 text-primary my-2"}
      >
        {item.content}
      </NavLink>
      ))
    }
    </div>
  );
};

export default Sidebar;
