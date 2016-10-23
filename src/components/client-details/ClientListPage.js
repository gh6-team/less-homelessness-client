import React from 'react';
import {Row, Col, Table} from "react-bootstrap";
import ClientStore from "../../stores/ClientStore";
import ClientAction from "../../actions/ClientAction";

export default class ClientListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clients:null};
    this.handleClientChange = this.handleClientChange.bind(this);
  }

  componentWillMount() {
    ClientAction.fetchClientList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search == null) {
      this.setState({clients:null});
    }
    else if (this.props.search !== nextProps.search) {
      ClientAction.fetchClientList();
    }
  }

  componentDidMount() {
    ClientStore.addChangeListener(this.handleClientChange);
  }

  componentWillUnmount() {
    ClientStore.removeChangeListener(this.handleClientChange);
  }

  handleClientChange() {
    this.setState({clients:ClientStore.getState().clients});
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

ClientListPage.PropTypes = {

};

ClientListPage.DefaultProps = {

};
