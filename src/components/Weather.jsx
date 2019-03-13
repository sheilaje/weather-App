import React from 'react';
import PropTypes from 'prop-types';
import ForecastDetail from './ForecastDetail';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    margin: '10px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    flexBasis: '23.33%',
    flexShrink: 0,
    padding: '15px 5px;',
  },
  imgHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '13.33%',
    color: theme.palette.text.secondary,
  },
  secondaryHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    padding: '15px 5px;',
  },
});

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({
      expanded: this.state.expanded ? false : true
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const today = this.props.forecast.forecastMoment.format('ddd');
    const { text, icon } = this.props.forecast.day.condition;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={this.state.expanded} onChange={this.handleChange}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{today}</Typography>
            <Typography className={classes.imgHeading}><img src={icon} alt='weather icon'/></Typography>
            <Typography className={classes.secondaryHeading}>{text}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ForecastDetail forecast={this.props.forecast}/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Weather);
