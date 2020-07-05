import React, { Component } from 'react'

export class OnProgress extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center text-center h-100">
                <div className="h-100">
                <h1>Este sitio esta en construccion, vuelve pronto para ver los cambios</h1>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading"/>
                </div>
            </div>
        )
    }
}

export default OnProgress;