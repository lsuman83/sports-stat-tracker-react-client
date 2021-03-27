import React, { Component } from 'react'


class NewPlayerContainer extends Component {

    state = {
        name: '',
        position: '',
        jersey_number: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target
        const formData = new FormData();

        formData.append('player[name]', form.name.value)
        formData.append('player[position]', form.position.value)
        formData.append('player[jersey_number]', form.jersey_number.value)
        formData.append('player[player_pic]', form.player_pic.files[0], form.player_pic.value)
        formData.append('player[team_id]', this.props.match.params.teamID)

        
        fetch(`http://localhost:3001/players`, {
            method: 'POST',
            body: formData
        })
            .then(resp => resp.json())
            .then(playerJSON => {
                this.props.history.push(`/teams/${this.props.match.params.teamID}`)
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='max-w-6xl w-3/4 mx-auto mt-20'>
                <h1 className='py-4 text-3xl'><strong>Add Player</strong></h1>
                    <label htmlFor='name'>
                        Player Name
                        <input 
                            className='inline-block border border-black mx-4'
                            id='name' 
                            name='name'
                            type='text'
                            onChange={this.handleInputChange}
                            />
                    </label> 
                </div> 
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>
                    <label htmlFor='position'>
                        Position
                        <input
                            className='inline-block border border-black mx-4' 
                            id='position'
                            name='position'
                            type='text'
                            onChange={this.handleInputChange}
                            />
                    </label>
                </div>
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>
                    <label htmlFor='jersey_number'>
                        Jersey Number
                        <input
                            className='inline-block border border-black mx-4' 
                            id='jersey_number'
                            name='jersey_number'
                            type='text'
                            onChange={this.handleInputChange}
                            />
                    </label>  
                </div>
                <div className='max-w-6xl w-3/4 mx-auto mt-10'>
                    <label htmlFor='player_pic'>
                        Player Pic
                        <input
                            className='inline-block border-black mx-4' 
                            id='player_pic'
                            name='player_pic'
                            type='file'
                            onChange={this.handleInputChange}
                            />
                    </label>  
                </div>
                <div className='max-w-6xl w-3/4 mx-auto'>
                    <button className='rounded-md px-4 mt-10 bg-blue-500' type='submit'>
                        Add Player
                    </button>
                </div>
            </form>
        )
    }
}


export default NewPlayerContainer