import axios from 'axios';

export default class ApiServiceConfig {
  getRequest = (url) => {
    const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0YWRvckBtYWlsLmNvbSIsImlzcyI6InNlbnNvcmtleSIsImF1ZCI6InNlbnNvcmtleV9tb2JpbGUiLCJpYXQiOjE2MDk3NjI2MDYsImV4cCI6MTY0MTI5ODYwNiwic2NvcGVzIjpbIkFETUlOX01PRFVMRSIsIkNPTkRPTUlOSVVNX1VOSVRfQ1JFQVRFIiwiQ09ORE9NSU5JVU1fVU5JVF9SRUFEIiwiVVNFUl9ERUxFVEUiLCJHVUVTVCIsIlVTRVJfVVBEQVRFIiwiVVNFUl9DUkVBVEUiLCJDT05ET01JTklVTV9VTklUX1VQREFURSIsIkNPTkRPTUlOSVVNX1VOSVRfREVMRVRFIiwiVVNFUl9SRUFEIiwiTk9USUNFX1JFQUQiLCJMT0dHRURfVVNFUiIsIk5PVElDRV9DUkVBVEUiXSwianRpIjoiNDIiLCJjaWQiOjIsInVpZCI6NH0.KKhiWFn6ESySJTmTofF4Awc5CQIwOn9vy2st6BQMzHA5azaS6aH6BU7ryBMQhegwbusgauErG_kA44rhLB_5fQ';
    const config = {
      method: 'GET',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios(config);
  };

  postRequest = (data, url) => {
    const config = {method: 'POST', data, url};
    return axios(config);
  };
}
