import React from "react";

const mockApi = "https://jsonplaceholder.typicode.com/users";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch(mockApi)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div>
        {this.state.monsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
            <p>{monster.username}</p>
            <img
              alt="robot"
              src={`https://robohash.org/${monster.id}?set=set2`}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
