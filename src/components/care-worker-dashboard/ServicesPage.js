import React from 'react';
import ServicesStore from "../../stores/ServiceStore";
import ServicesAction from "../../actions/ServiceProviderAction";
//import NeedsCategories from "../../constants/Needs"
import ServicesTable from "./ServicesTable";
import ServiceDetail from "./ServiceDetail";

export default class ServicesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      allNeeds: null,
      organizationNeeds: null,
      selectedService: null
    };
    this.handleServiceStoreChange = this.handleServiceStoreChange.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onServiceAvailableChanged = this.onServiceAvailableChanged.bind(this);
    this.onSaveDetail = this.onSaveDetail.bind(this);
  }

  componentWillMount() {
    ServicesAction.fetchAllServices();
  }

  componentDidMount() {
    ServicesStore.addChangeListener(this.handleServiceStoreChange);
  }

  componentWillUnmount() {
    ServicesStore.removeChangeListener(this.handleServiceStoreChange);
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

  onSaveDetail(service) {
    debugger;
    ServicesAction.saveServiceData(service);
    this.onSelectionChanged(service);
  }

  handleServiceStoreChange() {
    console.log(ServicesStore.getState());
    this.setState({
      allNeeds: ServicesStore.getState().services.services,
      organizationNeeds: ServicesStore.getState().services.services
    });
    console.log(this.state);
  }

  render() {
    if (this.state.type == 0) {
      return (
        <ServicesTable organizationNeeds={this.state.allNeeds} onSelect={this.onSelectionChanged}/>
      );
    } else {
      return (
        <ServiceDetail need={this.state.selectedService} onSelectionChanged={this.onSelectionChanged}
                       onServiceAvailableChange={this.onServiceAvailableChanged} onSave={this.onSaveDetail}/>
      );
    }
  }
}
