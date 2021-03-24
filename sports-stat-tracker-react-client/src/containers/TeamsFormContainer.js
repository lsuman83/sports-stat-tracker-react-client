import React, { Component } from 'react'


class TeamsFormContainer extends Component {

    constructor(){
        super()

        this.state = {
            name: '',
            location: '',
            sport: '',
            league_name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleInputChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }


    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/teams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({team: this.state})
        })
            .then(resp => resp.json())
            .then(data => {
                this.props.history.push('/')
            })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='max-w-6xl w-3/4 mx-auto mt-20'>
                    <h1 className='py-4 text-3xl'><strong>Add New Team</strong></h1>
                    <label>
                        Team Name
                        <input 
                            className='inline-block border border-black mx-4'
                            id='name' 
                            name='name' 
                            type='text' 
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            />
                    </label>
                </div>
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>                
                    <label>
                        Location
                        <input 
                            className='inline-block border border-black mx-4'
                            id='location' 
                            name='location' 
                            type='text' 
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            />
                    </label>
                </div>
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>
                    <label>
                        Sport
                        <input 
                            className='inline-block border border-black mx-4'
                            id='sport' 
                            name='sport' 
                            type='text' 
                            value={this.state.sport}
                            onChange={this.handleInputChange}
                            />
                    </label>
                </div>
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>                
                    <label>
                        League
                        <input 
                            className='inline-block border border-black mx-4'
                            id='league_name' 
                            name='league_name' 
                            type='text' 
                            value={this.state.league_name}
                            onChange={this.handleInputChange}
                            />
                    </label>
                </div>
                    
                <br />
                <div className='max-w-6xl w-3/4 mx-auto'>
                    <button className='rounded-md px-4 mt-10 bg-blue-500' type='submit'>
                        Add Team
                    </button>
                </div>
            </form>
        )
    }
}


export default TeamsFormContainer