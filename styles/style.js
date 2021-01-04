import {Platform, StyleSheet} from 'react-native';

const style = StyleSheet.create({
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
});
export default style;
