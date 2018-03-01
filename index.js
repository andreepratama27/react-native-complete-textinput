import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import FloatingLabel from 'react-native-floating-labels';

const styles = EStyleSheet.create({
  floatingLabel: { backgroundColor: 'transparent' },
  input: { borderWidth: 0 },
  formInput: { borderWidth: 0, borderBottomWidth: 1.5, marginTop: 10 },
});

const showImage = require('./show.png');
const hideImage = require('./hide.png');

class MainTextInput extends Component {
  // const MainTextInput = ({
  //   onChangeText,
  //   placeholder,
  //   isEnable,
  //   value,
  //   secureTextEntry,
  // }) => (
  state = { isSecure: true };
  render() {
    const {
      onChangeText,
      placeholder,
      isEnable,
      value,
      secureTextEntry,
      textColor,
    } = this.props;
    const { isSecure } = this.state;
    return (
      <View>
        <FloatingLabel
          labelStyle={styles.floatingLabel}
          inputStyle={[styles.input, { color: textColor }]}
          autoCapitalize="none"
          style={styles.formInput}
          editable={isEnable}
          value={value}
          multiline={false}
          secureTextEntry={secureTextEntry && isSecure}
          returnKeyType="next"
          onChangeText={(t) => {
            onChangeText(t);
          }}
          selectionColor={'blue'}
        // onBlur={this.onBlur}
        >
          {placeholder}
        </FloatingLabel>
        {secureTextEntry && (
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, top: 6 }}
            activeOpacity={1}
            onPressIn={() => {
              this.setState({ isSecure: false });
            }}
            onPressOut={() => {
              this.setState({ isSecure: true });
            }}
          >
            <Image
              style={{ tintColor: textColor }}
              source={isSecure ? hideImage : showImage}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
// );

MainTextInput.propTypes = {
  isEnable: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  textColor: PropTypes.string,
};

MainTextInput.defaultProps = {
  isEnable: true,
  placeholder: 'Input',
  onChangeText: () => { },
  secureTextEntry: false,
  value: '',
  textColor: 'black',
};

export default MainTextInput;