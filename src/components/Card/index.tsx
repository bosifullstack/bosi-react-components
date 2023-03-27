import React from 'react';
import classnames from 'classnames';
import { Paper } from '../Paper';
import { Typography } from '../Typography';
import classes from './styles.module.css';

export interface CardProps {
  paperClassName?: string;
  title: string;
  content: React.ReactNode;
  actions: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, content, actions, paperClassName }) => {
  return (
    <Paper className={classnames(paperClassName, classes.paper)}>
      <Typography color="primary" size="h2" component="h2">
        {title}
      </Typography>
      <div className={classes.content}>{content}</div>
      <div className={classes.actions}>{actions}</div>
    </Paper>
  );
};
