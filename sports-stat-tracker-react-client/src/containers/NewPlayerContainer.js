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

<<<<<<< Updated upstream
        
        fetch(`http://localhost:3001/players`, {
            method: 'POST',
            body: formData
        })
            .then(resp => resp.json())
=======
    
    
        this.props.dispatchCreatePlayer(formData)
>>>>>>> Stashed changes
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
                    <h1 className='py-4 text-3xl text-center'><strong>Add Player</strong></h1>
                    <div class="bg-blue-400 max-w-3xl w-1/2 shadow-lg rounded-lg px-8 pt-10 pb-8 mb-4 mx-auto flex flex-col my-2">
                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Player Name
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                    id="grid-player-name" 
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    type="text" 
                                    placeholder="Rockets" 
                                    />
                                <p class="text-red text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Position
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                    id="grid-position"
                                    name='position'
                                    value={this.state.position}
                                    onChange={this.handleInputChange} 
                                    type="text" 
                                    placeholder="Orlando, FL" 
                                    />
                            </div>
                        </div>
            
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    Jersey Number
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                    id="grid-jersey_number"
                                    name='jersey_number'
                                    value={this.state.jersey_number}
                                    onChange={this.handleInputChange} 
                                    type="text" 
                                    placeholder="Softball"/>
                            </div>
                        
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                    Player Pic
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4" 
                                    id="player_pic"
                                    name='player_pic'
                                    onChange={this.handleInputChange} 
                                    type="file"  
                                    />
                            </div>
                        </div>
                        <div className='max-w-6xl mx-auto'>
                            <button className='rounded-md px-4 mt-10 bg-gray-500' type='submit'>
                                Add Player
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


export default NewPlayerContainer