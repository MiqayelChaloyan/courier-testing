import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../assets/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD65A',
    paddingTop: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: horizontalScale(150),
    height: verticalScale(50),
    borderRadius: verticalScale(25),
    backgroundColor: '#F93827',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
  },
  buttonText: {
    color: 'white',
    fontSize: verticalScale(16),
    fontWeight: 'bold',
  },
  card: {
    margin: 5,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 170,
    height: 270
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 150,
  },
  placeholder: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
