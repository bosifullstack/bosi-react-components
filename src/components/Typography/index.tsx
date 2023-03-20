import React, { ReactNode } from 'react'
import classnames from "classnames";
import classes from "./styles.module.css";

export interface ITypographyProps {
  children: ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary'
  size?: 'detail' | 'body' | 'h1' | 'h2' | 'h3' | 'h4'
  component?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
}

export const Typography: React.FC<ITypographyProps> = ({
  children,
  className,
  color = 'default',
  size = 'body',
  component = 'p',
}) => {
  const Component = component

  return <Component className={classnames(
    className,
    classes.base,
    classes[size],
    classes[color],
  )}>{children}</Component>
}
