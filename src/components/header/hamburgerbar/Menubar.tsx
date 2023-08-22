import React from 'react'
import { navList } from '../../layouts/Constants'
import { Link } from 'react-router-dom'

export const MenuBar = (): React.ReactElement => (
  <div>
    <ul>
      {navList.map((menu, index) => {
        return (
          <li
            className='mb-1'
            key={index}>
            <Link
              to={menu.path}
              className='block rounded p-4 text-sm font-semibold
                  text-red-400 hover:bg-red-50 hover:text-red-600'>
              {menu.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
