import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from '@material-ui/core';

const styles = () => createStyles({

});

interface IProps extends WithStyles<typeof styles> {}

class Info extends React.Component<IProps> {
  render() {
    return(
      <div>
        Info
      </div>
    );
  }
} 
export default withStyles(styles)(Info); 