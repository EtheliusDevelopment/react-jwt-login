import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
        
    }

    

    render() {
        
        return (
            <>
            
            <h1>{this.props.token}</h1>                         
                <form>
                    
                    <input name="username" type="text"onChange={this.onChange} value={this.state.username }/>
                    <input name="password" type="text"onChange={this.onChange} value={this.state.password }/>
                    <button type="submit">SUBMIT</button>
                
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
