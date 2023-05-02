import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white_light,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray,
    marginBottom: 5 * metrics.scaleCoefficient,
  },
  textInputContainer: {
    backgroundColor: colors.white_light,
    marginVertical: 15 * metrics.scaleCoefficient,
    height: 48 * metrics.scaleCoefficient,
    marginHorizontal: 15 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
  },
  textInput: {
    backgroundColor: colors.white,
    height: 48 * metrics.scaleCoefficient,
    color: colors.black,
    fontSize: 14 * metrics.scaleCoefficient,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray,
    padding: 15 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  predefinedPlacesDescription: {
    color: colors.green,
  },
  row: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 38 * metrics.scaleCoefficient,
    alignItems: 'center',
    paddingHorizontal: 10 * metrics.scaleCoefficient,
    flex: 1,
  },
});
