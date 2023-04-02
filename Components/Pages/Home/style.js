import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f1e1',
    width: '100%',
  },
  screenFitter: {
    padding: 20,
    width: '100%',
  },
  topHeader: {
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  H1: {
    fontSize: 18,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
  normalText: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 300,
    color: '#4f544f',
  },
  borderLineBottom: {
    position: 'relative',
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  lineInputs: {
    flexDirection: 'row',
    height: 100,
    gap: 10,
  },
  inputViews: {
    flex: 0.5,
  },
  label: {
    fontSize: 12,
    color: '#4f544f',
    marginBottom: 5,
    width: '100%',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 45,
    width: '100%',
    paddingLeft: 20,
    borderRadius: 5,
  },
  buttonDisabled: {
    alignItems: 'center',
    backgroundColor: '#d8e5d6',
    opacity: 0.9,
    padding: 15,
    borderRadius: 5,
  },
  buttonTextDisabled: {
    color: '#a7b0a5',
    fontSize: 15,
  },
});
export default styles;
