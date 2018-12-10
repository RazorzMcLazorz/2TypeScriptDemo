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

const repeat = <T extends any> (v:T, n:number): T[] => n===0?[]:[v, ...repeat(v,n-1)]


interface IProps extends WithStyles<typeof styles> {}

class DashBoard extends React.Component<IProps> {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <div>
          DashBoard
          <div id="wrap">
            {repeat(<MediaCard /> , 6)}
          </div>
          <FilledInputAdornments />
          <LabelBottomNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(DashBoard); 