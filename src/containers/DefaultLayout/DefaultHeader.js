import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class DefaultHeader extends Component {


  render() {
    const date = {
      paddingTop : '20px'
    };

    const sedccoName = {
      paddingTop : '10px'
    };

    return (
      <React.Fragment>
        <div className="primary-color defaultHeader">
          <div className="row">
            <div className="col-lg-2 text-center" style={sedccoName}>
              <h1>SEDCCO</h1>
            </div>

            <div className="col-lg-8">
            </div>

            <div className="col-lg-2 " style={date}>
              <i>Date : March 23, 2019 </i>
            </div>


          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultHeader;
