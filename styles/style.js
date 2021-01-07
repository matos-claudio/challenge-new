import {Platform, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlex1: {
    flex: 1,
  },
  organizer: {
    justifyContent: 'space-around',
  },
  viewLogo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 400,
    minWidth: 350,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  form: {
    padding: 15,
  },
  input: {
    backgroundColor: '#EEF2F6',
    marginTop: 10,
    height: 60,
    borderRadius: Platform.OS === 'ios' ? 25 : 15,
    borderWidth: 2,
    borderColor: '#D3E0E9',
    padding: 5,
    color: '#424242',
  },
  viewButtons: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  loginButton: {
    backgroundColor: '#156BA5',
    height: 60,
    width: 190,
    borderRadius: Platform.OS === 'ios' ? 25 : 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 10, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabelLogin: {
    color: '#fff',
    fontSize: 20,
  },
  buttonLabelRecover: {
    color: '#9e9e9e',
    fontSize: 20,
  },
  buttonPasswordRecover: {
    marginTop: 10,
  },
  viewFooter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoFooter: {
    height: 100,
    width: 180,
    minWidth: 80,
  },
  marginTopOrganizer10: {
    marginTop: 10,
  },
  drawerIcon: {
    width: 30,
    height: 30,
  },
  rowOrientation: {
    flexDirection: 'row',
  },
  thumbnail: {
    tintColor: '#000',
    height: 25,
    width: 25,
  },
  viewUserComponent: {
    padding: 15,
  },
  dividerUserComponent: {
    height: 1,
    width: '100%',
    backgroundColor: '#9e9e9e',
  },
  labelUserNameComponent: {
    color: '#156BA5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelAddressComponent: {
    color: '#9e9e9e',
    fontSize: 14,
  },
  viewLogoComponent: {
    padding: 15,
  },
  dividerLogoComponent: {
    height: 2,
    width: '100%',
    backgroundColor: '#156BA5',
  },
  viewLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingLabel: {
    color: '#9e9e9e',
    fontSize: 16,
    marginTop: 5,
  },
  picker: {
    width: '100%',
    // height: 45,
    marginTop: 10,
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#156BA5',
  },
  containerListApartaments: {
    padding: 10,
  },
  viewCardBlock: {
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },
  cardBlock: {
    width: 80,
    height: 80,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 3,
    borderColor: '#156BA5',
    borderRadius: 5,
    // flexDirection: 'row',
  },
  viewAlignTextCardBlock: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  labelBlockNumber: {
    color: '#156BA5',
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewBullet: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    borderRadius: 25,
  },
  viewEmptyList: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Modal
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSubcontainerModal: {
    width: '90%',
    height: 420,
    minHeight: 420,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 60,
    borderRadius: 15,
    padding: 10,
  },
  viewNumberBlock: {
    backgroundColor: '#b3e5fc',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    marginTop: 5,
  },
  viewBodyModal: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewResident: {
    flexDirection: 'row',
  },
  labelModal: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  labelName: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewMarginLeft10: {
    marginLeft: 10,
  },
  viewMarginTop10: {
    marginTop: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 160,
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    backgroundColor: '#fff8e1',
  },
  viewButtonModal: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonModal: {
    backgroundColor: '#3BA620',
    borderRadius: 20,
    width: 250,
    height: 50,
  },
  viewButtonOrganizer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconSendButtonModal: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  labelButtonModal: {
    color: '#fff',
    fontSize: 20,
  },
  viewButtonMessages: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMessages: {
    backgroundColor: '#156BA5',
    width: 300,
    height: 70,
    borderRadius: 20,
  },
  labelButtonMessages: {
    color: '#fff',
    marginLeft: 10,
  },
  viewBadge: {
    position: 'absolute',
    right: -10,
    top: -10,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBadge: {
    color: '#fff',
    fontWeight: 'bold',
  },

  //Header
  headerComponent: {
    flexDirection: 'row',
    minHeight: 10,
    justifyContent: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    padding: 15,
    borderWidth: 0.5,
    borderColor: '#156BA5',
    borderRadius: 35,
  },
  safeAreaView: {
    marginHorizontal: 10,
  },
  viewResults: {
    backgroundColor: '#e0e0e0',
    height: 40,
    justifyContent: 'center',
  },
  labelResults: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#424242',
  },
  viewListMessages: {
    borderRadius: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 10,
  },
  labelListMessages: {
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 16,
  },
  labelNames: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
export default style;
