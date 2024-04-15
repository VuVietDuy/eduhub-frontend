import React from 'react';
import HomeSection6Card from './HomeSection6Card';

export default function HomeSection6() {
  return (
    <div className="max-w-screen-xl mx-auto justify-center flex flex-wrap">
      <div className="w-full lg:w-12/12 px-4  -mt-24 ">
        <div className="flex flex-wrap md:gap-0 sm:gap-8">
          <HomeSection6Card imgSrc="login.jpg" title="Login Page" />
          <HomeSection6Card imgSrc="profile.jpg" title="Profile Page" />
          <HomeSection6Card imgSrc="landing.jpg" title="Landing Page" />
        </div>
      </div>
    </div>
  );
}
