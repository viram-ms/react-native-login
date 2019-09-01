import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

const BLUE = "#428af8";
const LIGHT_GRAY = "#d3d3d3";

export default class Login extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    isFocussed: false,
    login: "",
    password: ""
  };

  componentDidMount() {
    this.setState({
      login: "",
      password: ""
    });
  }

  handleSubmit = event => {
    if (this.state.login === "admin" && this.state.password === "admin") {
      this.props.navigation.navigate("Dashboard", {
        // itemId: this.state.login,
        otherParam: "anything you want here"
      });
    } else {
      Alert.alert("Error", "Username/password mismatch", [
        {
          text: "okay"
        }
      ]);
    }
  };

  handleChange = name => event => {
    console.log(event);
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state);
  };

  handleFocussed = event => {
    console.log("ji");
    this.setState({
      isFocussed: true
    });
  };
  handleBlur = event => {
    this.setState({
      isFocussed: false
    });
  };

  render() {
    const { isFocussed } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 80, height: 80, margin: 10 }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />
        <Text style={styles.welcome}>Login</Text>
        <TextInput
          placeholder="Login Id"
          value={this.state.login}
          clearTextOnFocus={true}
          keyboardAppearance={"dark"}
          selectionColor={BLUE}
          underlineColorAndroid={isFocussed ? BLUE : LIGHT_GRAY}
          onFocus={this.handleFocussed}
          onBlur={this.handleBlur}
          onChangeText={text => this.setState({ login: text })}
          style={styles.textInput}
        />

        <TextInput
          placeholder="Password"
          value={this.state.password}
          clearTextOnFocus={true}
          keyboardAppearance={"dark"}
          selectionColor={BLUE}
          underlineColorAndroid={isFocussed ? BLUE : LIGHT_GRAY}
          onChangeText={text => this.setState({ password: text })}
          onFocus={this.handleFocussed}
          onBlur={this.handleBlur}
          style={styles.textInput}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>Or Sign Up Using</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.roundButtonBlue}
          >
            <Text style={styles.buttonText}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.roundButtonRed}
          >
            <Text style={styles.buttonText}>G</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 5,
    width: 200,
    fontSize: 18,
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    color: "black"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 40,
    width: 200,
    margin: 10,

    zIndex: 100
  },
  buttonText: {
    color: "white"
  },
  roundButtonBlue: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#428af8",
    height: 40,
    borderRadius: 100,
    margin: 10,
    width: 40,
    zIndex: 100
  },
  roundButtonRed: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 40,
    borderRadius: 100,
    margin: 10,
    width: 40,
    zIndex: 100
  }
});
