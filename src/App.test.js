import { render, screen } from '@testing-library/react'
import App from './Apps'
import Dashboard from './newComponents/Dashboard'
import Header from './newComponents/Header'
import Sidebar from './newComponents/Sidebar'
import jest from 'jest'

test('sidebar',()=>{
  render(<Sidebar/>)
})

test('header',()=>{
  render(<Header/>)
})

test('dashboard',()=>{
  HTMLCanvasElement.prototype.getContext = () => { 
    render(<Dashboard/>)
  }
})