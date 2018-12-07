import *  as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { pass } from './iconSwapping';

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CustomizedBadge(props) {
  const { classes } = props;

  return (
    <IconButton aria-label="Cart" onClick={() => pass()}>
      <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);