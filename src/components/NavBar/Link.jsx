import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from '../../context/Menu'

const NavBarLink = ({ hash, children}) => {
  const { hash: activeHash, changeHash } = useContext(MenuContext)
  
  return (
    <li className={classNames("nav-item", { "active": hash === activeHash })} role="presentation">
      <a onClick={() => changeHash(hash)} className="nav-link text-xl-left" href={hash} >
        {children}
      </a>
    </li>
  )
}

export default NavBarLink