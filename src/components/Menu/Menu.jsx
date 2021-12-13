import React, { forwardRef } from 'react';
import MenuItems from '../MenuItems/MenuItems'
import './Menu.css'




const Menu = forwardRef(({ list }, ref) => (
    <main ref={ref}>
      {list.map((item) => (
        <MenuItems item={item} key={item.id} />
      ))}
    </main>
  ));
export default Menu
