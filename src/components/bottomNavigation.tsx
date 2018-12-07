import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { cIcon, folder } from './iconSwapping';
import CustomizedBadge from './badge';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        color: '#000000',
        backgroundColor: 'blue',
      }
    }
  }
});

const styles = {
  root: {
    width: '100vw',
  },
};

interface IProps extends WithStyles<typeof styles> {}

class LabelBottomNavigation extends React.Component<IProps> {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <BottomNavigation value={value} onChange={this.handleChange} className={this.props.classes.root}>
          <Link to="/Info">
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          </Link>
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={cIcon(folder)} />
          <CustomizedBadge />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(LabelBottomNavigation);