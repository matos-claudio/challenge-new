import ApiUtilServices from '../../services/api-util-services';
import {formatResponse} from '../../utils/helper';

export default class AuthController {
  constructor() {
    this.apiUtilServices = new ApiUtilServices();
  }

  mobileLogin = async (data) => {
    try {
      const authResponse = await this.apiUtilServices.mobileLogin(data);
      return formatResponse(authResponse, false);
    } catch (error) {
      return formatResponse(null, true);
    }
  };
}
