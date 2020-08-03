import React, { useContext } from 'react'
import classNames from 'classnames'
import RegisterStore from '../Section/RegisterStore'
import NavBarLink from './Link'
import { MenuContext } from '../../context/Menu'
import { useScroll } from '../../hooks/useScroll'

const sections = [
  { hash: '#hero', name: 'Marketplace' },
  { hash: '#numeros', name: 'Números' },
  { hash: '#vendanavia', name: 'Venda na Via' },
  { hash: '#midiaads', name: 'Mídia' },
  { hash: '#integradoravia', name: 'Integradoras' },
  { hash: '#duvidas', name: 'Dúvidas' },

]
const NavBar = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const { scrollDirection } = useScroll()
  return (
    <nav className={classNames("navbar navbar-light smart-scroll navbar-expand-xl bg-white", {
      'scrolled-down': scrollDirection === 'down',
      'scrolled-up': scrollDirection === 'up',
    })} >
      <div className="container-fluid">
        <a href="#hero" className="navbar-brand">{}</a>
        <button data-toggle="collapse" onClick={() => toggleMenu(!isMenuOpen)} className="navbar-toggler">
          <div className={classNames("navbar-toggler-x", { "open": isMenuOpen })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          className={classNames("collapse navbar-collapse d-xl-none justify-content-xl-end", {
            "show": isMenuOpen
          })}
        >
          <ul className="nav navbar-nav ml-auto mt-4 mt-xl-0">
            {sections.map((section) => {
              return (
                <NavBarLink hash={section.hash} key={section.hash}>
                  {section.name}
                </NavBarLink>
              )
            })}
          </ul>
          <div className="text-center ml-xl-2 my-2 my-xl-0">
            <RegisterStore>
              <span className="d-xl-none">CADASTRAR MINHA LOJA</span>
              <span className="d-none d-xl-inline-block mt-1">CADASTRAR LOJA</span>
            </RegisterStore>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar