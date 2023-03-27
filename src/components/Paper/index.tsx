import React from 'react';
import classnames from 'classnames';
import classes from './styles.module.css';
import { Typography } from '../Typography';

export interface PaperProps {
  className?: string;
  children: React.ReactNode;
  tags?: string[];
  center?: boolean;
}

export const Paper: React.FC<PaperProps> = ({ className, children, tags, center = true }) => (
  <div className={classnames(classes.paper, className, { [classes.center]: center })}>
    <div className={classes.flex}>
      {children}
      {tags && (
        <Typography color="secondary" size="detail" component="span">
          {tags.join(', ')}
        </Typography>
      )}
    </div>
  </div>
);
