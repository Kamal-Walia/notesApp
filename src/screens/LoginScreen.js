import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import actions from '../store/actions'

const Login = ({ handleLogin }) => {
  handleUserLogin = () => {
    handleLogin(true)
  }
  return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleUserLogin}>
              <Text>Google Login</Text>
            </TouchableOpacity>
          </View>
  );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  handleLogin: actions.handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
