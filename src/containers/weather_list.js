import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import GoogleMap from '../components/google_map';
import Chart from '../components/chart';

const MEASURES = [
  {measurement:'pressure', color: 'red'},
  {measurement:'temp', color: 'blue'},
{measurement:'humidity', color: 'purple'}];

class WeatherList extends Component {
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} /></td>
        {MEASURES.map(({measurement, color})=> {
          return (<td key={`${cityData.city.name}_${measurement}`}>
            <Chart
              data={cityData.list.map((elt)=>elt.main[measurement])}
              color={color}
            />
          </td>);
        })}
      </tr>
    );
  }
  renderWeatherList() {
    return this.props.weather.map((cityData) => this.renderWeather(cityData));
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeatherList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
