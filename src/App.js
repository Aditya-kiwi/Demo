import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Components/Assets/scss/index.scss';
import UserListing from "./Components/Listing/UserListing";
import ProfilePage from "./Components/Profile/UserProfile";
import UserPost from "./Components/Profile/Post";
import UserTodo from "./Components/Profile/Todo";
import UserGallery from "./Components/Profile/Gallery";
import ProfilePageBody from "./Components/Profile/ProfilePageView";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserListing />} />
          <Route path="/user/:id/profile" element={<ProfilePage ContentComponent={ProfilePageBody} />} />
          <Route path="/user/:id/post" element={<ProfilePage ContentComponent={UserPost} />} />
          <Route path="/user/:id/todo" element={<ProfilePage ContentComponent={UserTodo} />} />
          <Route path="/user/:id/gallery" element={<ProfilePage ContentComponent={UserGallery} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
