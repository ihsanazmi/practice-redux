import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
    
    state = {count : 0}
    
    onClickTambah = ()=>{
       this.props.dispatch({type: 'INCREMENT'})
    }

    onClickKurang = ()=>{
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return (
            <div>
                <center>
                    <h1>{this.props.count}</h1> 
                    <button className="btn btn-outline-danger" onClick={this.onClickKurang}>Kurang</button><span> </span>
                    <button className="btn btn-outline-success" onClick={this.onClickTambah}>Tambah</button>
                </center>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect (mapStateToProps) (App)
