import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import axios from "axios";

export default class GitHubAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/contributors")
      .then(res => {
        const data = res.data;
        let arr = new Array(5);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = ({login: data[i].login, contribution: data[i].contributions});
        }

        // Another way to write the same as above
          // const data = res.data;
          // const logins = data.map(contributor => contributor.login);
          // const contributions = data.map(contributor => contributor.contributions);
          // const arr = [];
          // for (let i = 0; i < logins.length; i++) {
          //   arr.push({ login: logins[i], contribution: contributions[i] });
          // }

        this.setState({ contributors: arr });
        console.log(data);
      });

  }

  render() {
    if (this.state.contributors.length === 0) {
      return null;
    }
    return (
      <div>
        <VictoryChart>
            <VictoryBar data={this.state.contributors} x="login" y="contribution" />
        </VictoryChart>
      </div>
    );
  }
}
