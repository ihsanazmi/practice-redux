import React, { Component } from 'react'

class App extends Component {
    
    state = {count : 0}
    
    onClickTambah = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    onClickKurang = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <center>
                    <h1>{this.state.count}</h1> 
                    <button className="btn btn-outline-danger" onClick={this.onClickKurang}>Kurang</button><span> </span>
                    <button className="btn btn-outline-success" onClick={this.onClickTambah}>Tambah</button>
                </center>
            </div>
        )
    }
}

export default App
