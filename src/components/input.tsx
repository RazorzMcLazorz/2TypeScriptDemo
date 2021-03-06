import * as React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { WithStyles, createStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];



interface IProps extends WithStyles<typeof styles> {}

class FilledInputAdornments extends React.Component<IProps> {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !this.state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="filled-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="With filled TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment variant="filled" position="start">
                Kg
              </InputAdornment>
            ),
          }}
        />
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: (
              <InputAdornment variant="filled" position="start">
                Kg
              </InputAdornment>
            ),
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="Amount"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          InputProps={{
            startAdornment: (
              <InputAdornment variant="filled" position="start">
                $
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="filled-adornment-weight"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="Weight"
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          helperText="Weight"
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                Kg
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="filled-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FilledInputAdornments);