import ApiUtilServices from '../../services/api-util-services';
import {formatResponse} from '../../utils/helper';

export default class CondominiumController {
  constructor() {
    this.apiUtilServices = new ApiUtilServices();
  }
  listCondominium = async (data) => {
    try {
      const condominiumResponse = await this.apiUtilServices.listCondominium(
        data,
      );
      return formatResponse(condominiumResponse, false);
    } catch (error) {
      return formatResponse(null, true);
    }
  };
}
