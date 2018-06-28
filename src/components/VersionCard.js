/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Web Interface
*  Settings :: Version - Card component
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */

import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

class VersionCard extends Component {

  render() {
    return (
      <div className="card card-inverse card-primary">
        <div className="card-block">
          <div className="card-icon">
            <i className={this.props.icon}/>
          </div>
          <h3>{this.props.name}</h3>
          <pre>
            Branch: {this.props.branch}<br/>
            Hash:   {this.props.hash}<br/>
            Tag:    {this.props.tag}<br/>
          </pre>
        </div>
      </div>
    );
  }
}

VersionCard.propTypes = {
  branch : PropTypes.string,
  hash : PropTypes.string,
  name : PropTypes.string,
  tag : PropTypes.string
};

export default translate(['settings'])(VersionCard);
