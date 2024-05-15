<<<<<<< HEAD
import Link from 'next/link';
import React from 'react';
import './detail.scss';

export default function DetailPost() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src="/user.png" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 day ago</p>
          </div>
          <div className="edit">
            <Link href={`/write?edit2`}>
              <img src="/edit.png" alt="" />
            </Link>

            <img src="/delete.png" alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis!
        </p>
      </div>
    </div>
  );
=======
'use client';
import React from 'react';

export default function DetailPost() {
  return <div>DetailPost</div>;
>>>>>>> 8ff3158edf7bb428de4517a87934800ac7020824
}
