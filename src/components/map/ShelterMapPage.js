import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ShelterStore from "../../stores/ShelterStore";
import ShelterAction from "../../actions/ShelterAction";
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.js';

export default class ShelterMapPage extends React.Component {
  static defaultProps = {
    center: {lat: 38.632746, lng: -90.227955},
    zoom: 10,
    greatPlaces: [
      {id: '1', lat: 38.59729089, lng: -90.54189364, count: '0'},
      {id: '2', lat: 38.54256229, lng: -90.28909176, count: '3'},
      {id: '3', lat: 38.74151895, lng: -90.22576437, count: '7'},
      {id: '4', lat: 38.60896713, lng: -90.31745003, count: '9'},
      {id: '5', lat: 38.71566804, lng: -90.32623591, count: '10'},
    ]
  };

  constructor(props) {
    super(props);
    this.state = {shelters: null};
    this.handleShelterChange = this.handleShelterChange.bind(this);
  }

  componentWillMount() {
    ShelterAction.fetchAllShelters();
  }

  componentDidMount() {
    ShelterStore.addChangeListener(this.handleShelterChange);
  }

  componentWillUnmount() {
    ShelterStore.removeChangeListener(this.handleShelterChange);
  }

  handleShelterChange() {
    this.setState({shelters: ShelterStore.getState().shelters, availableBeds: ShelterStore.getState().availableBeds});
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  renderChildren() {
    if (this.state.shelters == null) return;

    const rows = [];
    for (var i = 0; i < this.state.shelters.length; i++) {
      const shelter = this.state.shelters[i];
      const count = this.state.availableBeds[i];
      const {id, location, ...other} = shelter;
      rows.push(<MyGreatPlace key={id} id={id} text={count} lat={location.latitude} lng={location.longitude} {...other} />);
    }

    return rows;
  }

  render() {
    return (
      <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        {this.renderChildren()}
      </GoogleMap>
    );
  }
}
