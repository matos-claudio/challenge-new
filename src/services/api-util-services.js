import ApiServiceConfig from './api-service-config';
import {SERVER_URL, DEVICE_TOKEN, AUTH_MOBILE_LOGIN} from '../utils/constants';

export default class ApiUtilServices extends ApiServiceConfig {
  mobileLogin = ({email, password}) => {
    const data = {email, password, deviceToken: DEVICE_TOKEN};
    const url = SERVER_URL + AUTH_MOBILE_LOGIN;
    return this.postRequest(data, url);
  };
}
