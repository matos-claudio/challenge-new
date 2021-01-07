import ApiServiceConfig from './api-service-config';
import {
  SERVER_URL,
  DEVICE_TOKEN,
  AUTH_MOBILE_LOGIN,
  CONDOMINIU_UNIT,
  NOTICE,
} from '../utils/constants';

export default class ApiUtilServices extends ApiServiceConfig {
  mobileLogin = ({email, password}) => {
    const data = {email, password, deviceToken: DEVICE_TOKEN};
    const url = SERVER_URL + AUTH_MOBILE_LOGIN;
    return this.postRequest(data, url);
  };
  listCondominium = ({condominium_id, block_id}) => {
    const url =
      SERVER_URL + CONDOMINIU_UNIT + `/${condominium_id}/${block_id}/unit`;
    return this.getRequest(url);
  };
  listNotices = () => {
    const url = SERVER_URL + NOTICE;
    return this.getRequest(url);
  };
}
