import * as React from 'react'
import { render } from 'react-dom'
import DashBoard from './app'
import Info from './info'
import '../style/main.scss'

const change = (x = true) => x ? <DashBoard /> : <Info />

render(
  change(),
  document.getElementById('app-wrapper') as HTMLElement
)

console.log('tsx connected!')