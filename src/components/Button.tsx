import React from 'react'
import '../components/button.css'

const variantClass = {
  contained: 'button',
  outlined: 'outlined',
  text: 'text'
}

const colorClass = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger'
};

export default function Button(
  {
    onClick,
    children,
    variant,
    color = 'default'
  }:{
    onClick: () => void,
    children: React.ReactNode,
    color?: 'default' | 'primary' | 'secondary' | 'danger',
    variant: 'contained' | 'text' | 'outlined' 
  }) {
  
  const className = variantClass[variant]
  const colorClassName = colorClass[color];
  
  return (
    <div>
      <button className={`button ${className} ${colorClassName}`} onClick={onClick}>{children}</button>
    </div>
  )

}
