import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NUMBER } from "./Constants";


/** This component renders a sidebar menu that allows the user to navigate between different routes.
 *  The active route is highlighted based on the current URL path using the active class.
 *  The MenuBar component accepts an id prop which is used to construct the URL paths for the different routes.
 *  The useLocation hook is used to get the current path name, and the useNavigate hook is used to programmatically navigate to the selected route.
 *  The route function is used to construct the URL path based on the current id prop and the selected route name. */
const MenuBar = ({id}) => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const route = (routeName) => {
      navigate({pathname:`/user/${id}/${routeName}`})
    }

    const activeRoute = pathname.split('/')[NUMBER.THREE]; 

  return (
    <div className="side-bar">
      <ul>
        <li className={`${activeRoute === 'profile' ? 'active' : ''}`}>
          <span onClick={() => route('profile')} to={`user/${id}/profile`}>Profile</span>
        </li>
        <li className={`${activeRoute === 'post' ? 'active' : ''}`}>
          <span onClick={() => route('post')}>Post</span>
        </li>
        <li className={`${activeRoute === 'gallery' ? 'active' : ''}`}>
          <span onClick={() => route('gallery')}>Gallery</span>
        </li>
        <li className={`${activeRoute === 'todo' ? 'active' : ''}`}>
          <span onClick={() => route('todo')}>Todo</span>
        </li>
      </ul>
    </div>
  );
};
export default MenuBar;