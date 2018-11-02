import React from 'react';
import './App.css';
import HcAppDetails from "./components/HcAppDetails";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response: '',
            post: '',
            responseToPost: '',
        };
    }

    async componentDidMount() {
        const response =  await fetch('/hello');
        const body = await response.text();
        console.log(body);
        this.setState({ responseToPost: body });
    }


    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/sendcmd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    }

    render() {
        return (
            <div>
              <HcAppDetails/>
                {/*<p>{this.state.response}</p>*/}
                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<p>*/}
                        {/*<strong>Post to Server:</strong>*/}
                    {/*</p>*/}
                    {/*<input*/}
                        {/*type="text"*/}
                        {/*value={this.state.post}*/}
                        {/*onChange={e => this.setState({ post: e.target.value })}*/}
                    {/*/>*/}
                    {/*<button type="submit">Submit</button>*/}
                {/*</form>*/}
                {/*<p>{this.state.responseToPost}</p>*/}
            </div>
        );
    }
}

export default App;
