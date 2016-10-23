import React from 'react';
import ServicesStore from "../../stores/ServiceStore";
import ServicesAction from "../../actions/ServiceProviderAction";
import NeedsCategories from "../../constants/Needs";
import ServicesTable from "./ServicesTable";
import ServiceDetail from "./ServiceDetail";

export default class ServicesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      allNeeds: NeedsCategories,
      organizationNeeds: null,
      selectedService: null
    };
    this.handleShelterStoreChange = this.handleShelterStoreChange.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onServiceAvailableChanged = this.onServiceAvailableChanged.bind(this);
  }

  componentWillMount() {
    ServicesAction.fetchAllServices();
  }

  componentDidMount() {
    ServicesStore.addChangeListener(this.handleShelterStoreChange);
  }

  componentWillUnmount() {
    ServicesStore.removeChangeListener(this.handleShelterStoreChange);
  }

  onSelectionChanged(need) {
    if (this.state.type === 0) {
      this.setState({
        type: 1,
        selectedService: need
      });
    } else {
      this.setState({
        type: 0
      });
    }
  }

  onServiceAvailableChanged(need) {
    this.setState({
      need
    });
  }

  handleShelterStoreChange() {
    this.setState({
      allNeeds: ServicesStore.getState().services
    });
  }

  render() {
    console.log(this.state.type);
    if (this.state.type == 0) {
      return (
        <ServicesTable needs={this.state.allNeeds} selectedItem={this.onSelectionChanged}/>
      );
    } else {
      return (
        <ServiceDetail need={this.state.selectedService} selectedItem={this.onSelectionChanged}
                       onServiceAvailableChange={this.onServiceAvailableChanged}/>
      );
    }

  }
}
