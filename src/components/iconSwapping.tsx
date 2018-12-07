import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const cIcon = (x : string) => <SvgIcon> <path d={x} /> </SvgIcon>

export const folder = 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'

// whats the password
export const pass = () => {
  console.log("PASS")
  const input = document.getElementById('filled-adornment-weight') as HTMLInputElement
  console.log(input)
  console.log(input.value)
}