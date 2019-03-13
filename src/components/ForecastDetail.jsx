import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    width: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ForecastDetail(props) {
  const { classes } = props;

  // const today = props.forecast.forecastMoment.format('ddd');
  const { mintemp_c, maxtemp_c, avgtemp_c, mintemp_f, maxtemp_f, avgtemp_f, maxwind_kph, maxwind_mph, totalprecip_mm, totalprecip_in, avgvis_km, avgvis_miles, avghumidity, uv} = props.forecast.day;
  const { sunrise, sunset, moonrise, moonset } = props.forecast.astro;
  const { text, icon } = props.forecast.day.condition;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            <Grid item xs={4}>
              <Typography gutterBottom variant="h5">
                Temperature
              </Typography>
              <Typography gutterBottom>
                Min:  {mintemp_c}&#8451;  {mintemp_f}&#8457;<br/>
                Max:  {maxtemp_c}&#8451; {maxtemp_f}&#8457;<br/>
                Avg:  {avgtemp_c}&#8451; {avgtemp_f}&#8457;<br/>
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography gutterBottom variant="h5">
                Precipitation
              </Typography>
              <Typography gutterBottom>{totalprecip_in} inches  |  {totalprecip_mm} mm</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography gutterBottom variant="h5">
                Max Windspeed
              </Typography>
              <Typography gutterBottom>{maxwind_kph} kph  |  {maxwind_mph} mph</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography gutterBottom variant="h5">
                Visibility
              </Typography>
              <Typography gutterBottom>{avgvis_km} km  |  {avgvis_miles} miles</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography gutterBottom variant="h5">
                Humidity
              </Typography>
              <Typography gutterBottom>{avghumidity}%</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography gutterBottom variant="h5">
                UV index
              </Typography>
              <Typography gutterBottom>{uv}</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography gutterBottom variant="h5">
                Epoch
              </Typography>
                <Typography gutterBottom>Sunrise: {sunrise}</Typography>
                <Typography gutterBottom>Sunset: {sunset}</Typography>
                <Typography gutterBottom>Moonrise: {moonrise}</Typography>
                <Typography gutterBottom>Moonset: {moonset}</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ForecastDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForecastDetail);
