import React, { useState, memo, useEffect } from 'react'
import PropTypes from 'prop-types'

const MenuContext = React.createContext({
  hash: '',
  isMenuOpen: false,
  changeHash: () => {},
  toggleMenu: () => {},
})

const MenuProvider = memo(({ children }) => {
  const [hash, changeHash] = useState('#hero')
  const [isMenuOpen, toggleMenu] = useState(false)

  useEffect(() => {
    toggleMenu(false)
  }, [hash])

  return (
    <MenuContext.Provider
      value={{
        hash,
        isMenuOpen,
        changeHash,
        toggleMenu
      }}
    >
      { children }
    </MenuContext.Provider>
  )
})

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {
  MenuProvider,
  MenuContext
}