import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ForecastDetail from './ForecastDetail';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state={open: false,
    };
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  handleClickOpen (){
    this.setState({ open: true });
  };

  handleClose () {
    this.setState({ open: false });
  };


  render(){//Button for handleOpen required to allow Button for handleClose to work
    const today = this.props.forecast.forecastMoment.format('ddd');
    const { text, icon } = this.props.forecast.day.condition;

    return (<div>
      <hr/>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        <h3>{today}</h3>
      </Button>
      {text}
      <img src={icon} alt='weather icon'/>

      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{today}</DialogTitle>
          <DialogContent>
            <ForecastDetail forecast={this.props.forecast}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              DONE
            </Button>
          </DialogActions>
        </Dialog>

    </div>)
  }
}

Weather.propTypes = {
  forecast: PropTypes.shape({
    forecastMoment: PropTypes.instanceOf(Moment).isRequired,
    date: PropTypes.string,
    date_epoch: PropTypes.number,
    day: PropTypes.shape({
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        code: PropTypes.number
      }).isRequired
    }),
    astro: PropTypes.objectOf(PropTypes.string)
  })
}

export default Weather;
