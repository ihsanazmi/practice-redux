import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

//inisiasi angka awal
const initialState = {
    count: 0
}

function reducer(state=initialState, action){
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + 1
            };
        case 'DECREMENT':
            return{
                count: state.count -1
            };
        default:
            return state;
    }
    
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
)

