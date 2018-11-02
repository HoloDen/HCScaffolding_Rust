import React from 'react';

class Zomes extends React.Component{
    constructor(props){
        super(props);

        this.state={
            zomeName:''
        }
    }

    render(){
        return(
            <div className="App">
                <p>Zome Name</p>
                <input
                    type="text"
                    value={this.state.zomeName}
                    onChange={e => this.setState({ zomeName: e.target.value })}
                />
            </div>
        );
    }
}

export default Zomes;