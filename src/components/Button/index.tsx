import React, { ReactNode } from 'react'
import classnames from "classnames";
import classes from "./styles.module.css";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'full-width'
  action?: 'none' | 'error' | 'warning' | 'success'
}

export const Button = ({
  children,
  className,
  onClick,
  color = 'default',
  size = 'medium',
  action = 'none',
  ...props
}: IButtonProps) => {
  const buttonClasses = classnames(
    classes.button,
    action !== 'none' ? classes[action] : classes[color],
    classes[size],
    className
  )

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  )
};
