import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div>
      <h2><strong><center>The page {props.location.pathname} does not exist.</center></strong></h2>
      <h1><strong><center>Would you like to return <Link to="/">home</Link> instead?</center></strong></h1>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;