import React from 'react';
import Popover from '@material-ui/core/Popover';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
    marginLeft: 10,
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function MouseOverPopover({
  anchorEl,
  open,
  handlePopoverClose,
  children,
  id,
}) {
  const classes = useStyles();

  return (
    <Popover
      id={id}
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      anchorPosition={{}}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      {children}
    </Popover>
  );
}
