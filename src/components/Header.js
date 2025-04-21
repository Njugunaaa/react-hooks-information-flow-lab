import React from 'react'

const Header = ({onDarkModeClick, isDarkMode}) => {
  return (
    <div>
      <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}

export default Header