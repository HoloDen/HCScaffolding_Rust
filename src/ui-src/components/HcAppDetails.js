import React from 'react';

class HcAppDetails extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={
            appName:'demo',
            zomeName:'demo1',
            appPath:'Desktop',
            responseToPost: ''
        }
    }

     async handleSubmit(e){
        e.preventDefault();

        let data = {
            "appName": this.state.appName,
            "zomeName" : this.state.zomeName,
            "appPath" : this.state.appPath
        };

         const response = await fetch('/hcCreateApp', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(data),
         });

         const body = await response.text();

         this.setState({ responseToPost: body });
    }

    getfolder(e) {
        var files = e.target.files;
        console.log(files[0].mozFullPath);
        var path = files[0].webkitRelativePath;
        var Folder = path.split("/");
        alert(Folder[0]);
    }

    render(){
        return(
            <div className="App">
                <h1>Tell us about your app</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>App Name:</strong>
                    </p>
                    <input
                        type="text"
                        value={this.state.appName}
                        onChange={e => this.setState({ appName: e.target.value })}
                        required
                    />
                    <p>Zome Name</p>
                    <input
                        type="text"
                        value={this.state.zomeName}
                        onChange={e => this.setState({ zomeName: e.target.value })}
                        required
                    />
                    <p>Path</p>
                    <p>~/ <input
                        type="text"
                        value={this.state.appPath}
                        onChange={e => this.setState({ appPath: e.target.value })}
                        placeholder="Desktop/somefolder"
                        required
                        // type="file"
                        // onChange={this.getfolder}
                        // webkitdirectory="true"
                        // msdirectory="true"
                        // mozdirectory="true"
                        // msdirectory="true"
                        // odirectory="true"
                        // directory="true"
                    /></p>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <p className="response">{this.state.responseToPost}</p>
            </div>
        );
    }
}

export default HcAppDetails;