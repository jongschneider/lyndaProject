import React from 'React';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount(){
    // Ajax request to fetch the data from ./src/testData.json
    axios.get('/api/contests')
      // axios creates a promise, so use .then() to resolve the promise
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);


  }

  componentWillUnmount(){
  }

  render() {
    debugger;
    return (
      <div className= 'App'>
        <Header message={ this.state.pageHeader } />
        <div>
          { this.state.contests.map( contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}

        </div>
      </div>
    );
  }
}

export default App;
