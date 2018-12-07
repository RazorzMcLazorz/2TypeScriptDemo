import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// internal file imports
import LabelBottomNavigation from './bottomNavigation';
import FilledInputAdornments from './input';
import MediaCard from './card';

import { pass } from './iconSwapping';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100vw',
      }
    }
  }
});

const styles = () => createStyles({

});

const cardDisplay = (x : number) => {
  while (x > 0) {
  console.log(x)
  x--;
  return <MediaCard /> 
  }
}

interface IProps extends WithStyles<typeof styles> {}

class DashBoard extends React.Component<IProps> {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <div>
          DashBoard
          <div id="wrap">
            {cardDisplay(8)}
          </div>
          <FilledInputAdornments />
          <LabelBottomNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(DashBoard); 