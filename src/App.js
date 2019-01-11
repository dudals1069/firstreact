import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: this.state.information.concat({
        ...data,
        id: this.id++
      })
    });
  }
  render() {
    return (
      <div >
      <PhoneForm onCreate = {this.handleCreate}/>
      {JSON.stringify(this.state.information)}  {/*배열 출력문*/}
      </div>
    );
  }
}

export default App;