import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './pages/login/index'
import Home from './pages/home/index'

class Router extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navigator: {
                page: "_LOGIN_"
            },
            text : "lorem ipsum",
            setPage: (page) => {
                let state = this.state
                state.navigator.page = page
                this.setState(state)
            },
            updateState: (state) => {
                this.setState(state)
            }
        }
    }

    navigator = () => {
        let page = this.state.navigator.page
        switch (page) {
            case "_LOGIN_":
                return <Login data={this.state} />
            case "_HOME_":
                return <Home data={this.state} />
            default:
                return <Text>Página não encontrada</Text>
        }
    }

    render() {
        return this.navigator()
    }
}

export default Router
