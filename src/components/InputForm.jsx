import React from 'react';

function InputForm(){
  return(
    <div>
      <form onSubmit={this.handleClick}>
        <h3>Todays Weather</h3><br></br>
        <div className="row">
          <div className="col-md-4"><label>City</label></div>
          <div className="col-md-8"><input type="text" name="city" className="form-control"/><br></br></div>
          <div className="col-md-4"><label>Country</label></div>
          <div className="col-md-8"><input type="text" name="country" className="form-control"/><br></br></div>
          <div className="col-md-10"></div>
          <div className="col-md-2"><button className="btn btn-info">Get Weather</button><br></br><br></br></div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;