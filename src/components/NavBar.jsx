import React from 'react'
import { NavLink } from 'react-router-dom'
import themeData from '../store/theme.js'
import MyButton from './UI/MyButton.jsx'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const styles = {
    light: {border: '1px solid black', color: 'black'},
    dark: {border: '1px solid white', color: 'white'}
  }

  const changeTheme = () => {
    themeData.setTheme() 
    document.documentElement.setAttribute('data-theme', themeData.theme)
  }

  return (
    <div className='navBar'>
      <h1 className='logo'>Notes<div className='react'>RC</div></h1>
      <div className='links'>
	<NavLink className='link'  to='/notes'>Notes</NavLink>
	<NavLink className='link' to='/about'>About</NavLink>
      </div>
      <MyButton style={themeData.theme === 'light' ? styles.light : styles.dark} onClick={() => changeTheme()}>{themeData.theme}</MyButton>
    </div>
  )
})

export default NavBar
