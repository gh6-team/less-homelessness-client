import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ShelterStore from "../../stores/ShelterStore";
import ShelterAction from "../../actions/ShelterAction";
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.js';

export default class ShelterMapPage extends React.Component {

  static defaultProps = {
    center: {lat: 38.632746, lng: -90.227955},
    zoom: 10
  };

  static propTypes = {
    center: React.PropTypes.object,
    zoom: React.PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {shelters: null};
    this.handleShelterChange = this.handleShelterChange.bind(this);
    this.handleBedChange = this.handleBedChange.bind(this);
    this.handleBedAssignment = this.handleBedAssignment.bind(this);
  }

  componentWillMount() {
    ShelterAction.fetchAllShelters();
  }

  componentDidMount() {
    ShelterStore.addChangeListener(this.handleShelterChange);
    ShelterStore.addChangeListener(this.handleBedChange);
    ShelterStore.addChangeListener(this.handleBedAssignment);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentWillUnmount() {
    ShelterStore.removeChangeListener(this.handleShelterChange);
    ShelterStore.removeChangeListener(this.handleBedChange);
    ShelterStore.removeChangeListener(this.handleBedAssignment);
  }

  handleShelterChange() {
    this.setState({shelters: ShelterStore.getState().shelters, availableBeds: ShelterStore.getState().availableBeds});
  }

  handleBedChange() {
    this.setState({beds: ShelterStore.getState().beds});
    if (this.action == 1) {
      this.action = 2;
      for (let i = 0; i < this.state.beds.length; i++) {
        const bed = this.state.beds[i];
        if (bed.id == 0) {
          this.state.bed = bed;
          bed.assigned_to_client_id = 42;
          bed.assignment_date = "2016-10-23";
          bed.assigned_by_id = 999;

          ShelterAction.assignBed(this.state.shelterId, bed);
          break;
        }
      }
    }
  }

  handleBedAssignment() {
    this.setState({assignedBed: ShelterStore.getState().assignedBed});
    if (this.action == 2) {
      this.action = 0;
      alert("Assigned to bed " + this.state.bed.bed_name + " at " + this.state.shelterName);
    }
  }

  _onChildClick = (key, childProps) => {
    this.state.shelterName = childProps.name;
    this.state.shelterId = childProps.id;
    this.action = 1;
    ShelterAction.fetchBedAssignments(childProps.id);
  };

  renderChildren() {
    if (this.state.shelters == null) return;

    const rows = [];
    for (let i = 0; i < this.state.shelters.length; i++) {
      const shelter = this.state.shelters[i];
      const count = this.state.availableBeds[i];
      const {id, location, ...other} = shelter;
      rows.push(<MyGreatPlace key={id} id={id} text={count.toString()} lat={location.latitude}
                              lng={location.longitude} {...other} />);
    }

    return rows;
  }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyDx2p2PrYSPcNfInrKj8KfsEnVs-2TdLCk",
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildClick={this._onChildClick}
      >
        {this.renderChildren()}
      </GoogleMap>
    );
  }
}
