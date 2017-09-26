import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash';

export default class Chart extends Component {
  render() {
    return (
      <div>
      <Sparklines height={120} width={180} data={this.props.data}>
        <SparklinesLine color={this.props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>Mean: {_.round(_.sum(this.props.data)/this.props.data.length)}</div>
      </div>
    );
  }
}
