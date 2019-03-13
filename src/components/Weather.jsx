import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ForecastDetail from './ForecastDetail';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import plus from './assets/images/plus-big-512.png';

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
  }

  handleClose () {
    this.setState({ open: false });
  }


  render(){//Button for handleOpen required to allow Button for handleClose to work
    const today = this.props.forecast.forecastMoment.format('ddd');
    const { text, icon } = this.props.forecast.day.condition;

    return (<div className="clearfix weatherRow">
      <div className="weatherCol weatherDay">
        <p className="roundedDay">{today}</p>
      </div>
      <div className="weatherCol weatherTextSpan">{text} </div>
      <div className="weatherCol weatherImg"><img src={icon} alt='weather icon'/></div>
      <div className="weatherCol weatherPlus">
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          <img src={plus} className="weatherPlusImg" alt='weather icon'/>
        </Button>
      </div>

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

    </div>);
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
};

export default Weather;
