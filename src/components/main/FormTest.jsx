import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FormTest extends Component {
    render() {
        return (
            <div>
               <h1>CIAO SONO FORM</h1> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTest)
