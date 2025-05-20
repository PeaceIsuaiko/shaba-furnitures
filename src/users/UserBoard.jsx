import React from 'react';
import Prof from './Prof';
import Con from './Con';
import Incart from './Incart';
import Wish from './Wish';
import Fav from './Fav';
import Recom from './Recom';
import Set from './Set';
import Navbar from '../components/Navbar';




function UserBoard () {

    return (
      <div   className=" bg-yellow-400  flex flex-col fixed inset-0 z-50">
      <Navbar />
      <div className="py-14 px-12">
        <Prof />
        <Con />
        <Incart />
        <Wish />
        <Fav />
        <Recom />
        <Set />
      </div>
       </div>
    )
}


export default UserBoard;