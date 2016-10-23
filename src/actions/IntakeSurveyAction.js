import LHDispatcher from '../dispatchers/LHDispatcher';
import ActionTypes from '../constants/actionTypes';
import ClientProxy from "../proxys/ClientProxy";

export default class IntakeSurveyAction {

  static saveIntakeSurveyData(clientInfo) {

    let {needs, soc_sec_num, ...clientData} = clientInfo;
    clientData.ssn = soc_sec_num;
    clientData.date_updated = new Date();

    ClientProxy.postClient(clientData).then((response) => {
      LHDispatcher.dispatch({
        type: ActionTypes.INTAKE_POSTED,
        clientId: response.id
      });

      needs.forEach(need => {
        let needDTO = {
          clientId: response.id,
          service: need
        };
        ClientProxy.postClientNeed(response.id, needDTO).then(() => {
          LHDispatcher.dispatch({
            type: ActionTypes.NEED_CREATED
          });
        }).catch((error) => {
          LHDispatcher.dispatch({
            type: ActionTypes.API_REQUEST_FAILED,
            subType: ActionTypes.NEED_CREATED,
            error: error
          });
        });
      });

    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.INTAKE_POSTED,
        error: error
      });
    });


  }

}
