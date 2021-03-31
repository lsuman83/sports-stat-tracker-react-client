import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'Football', label: 'Football'},
    { value: 'Golf', label: 'Golf'},
    { value: 'Basketball', label: 'Basketball'},
    { value: 'Baseball', label: 'Baseball'},
    { value: 'Softball', label: 'Softball'},
    { value: 'Soccer', label: 'Soccer'},
    { value: 'Tennis', label: 'Tennis'},
    { value: 'Volleyball', label: 'Volleyball'}
]

class TeamsFormContainer extends Component {

    constructor(){
        super()

        this.state = {
            name: '',
            location: '',
            sport: null,
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
            <form  onSubmit={this.handleSubmit}>
                <h1 className='py-4 text-3xl text-center'><strong>Add New Team</strong></h1>
                <div class="bg-blue-400 max-w-3xl mx-auto shadow-lg rounded-lg px-8 pt-10 pb-8 mb-4 flex flex-col my-2">
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                Team Name
                            </label>
                            <input 
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                id="grid-name" 
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
                                Location
                            </label>
                            <input 
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                id="grid-location"
                                name='location'
                                value={this.state.location} 
                                type="text" 
                                onChange={this.handleInputChange}
                                placeholder="Orlando, FL" 
                                />
                        </div>
                    </div>
            
                    <div class="-mx-3 md:flex mb-2">
                        <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                                Sport
                            </label>
                            <div class="relative">
                                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                            <svg class="h-4 w-4 mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                                <select 
                                    class="inline-block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 pl-8 pr-8 rounded" 
                                    id="grid-state"
                                    name='sport'
                                    value={this.state.sport}
                                    onChange={this.handleInputChange}
                                    >
                                        <option disabled selected>Select Sport..</option>
                                        {
                                            options.map(option => 
                                            <option value={option.value} id={option.id}>{option.label}</option>
                                        )}
                                </select>
                            </div>
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                League Name
                            </label>
                            <input 
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                id="grid-zip" 
                                name='league_name'
                                value={this.state.league_name}
                                onChange={this.handleInputChange}
                                type="text" 
                                placeholder="14U" />
                        </div>
                    </div>
                    <div className='max-w-6xl mx-auto'>
                        <button className='rounded-md px-4 mt-10 bg-gray-500' type='submit'>
                            Add Team
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}


export default TeamsFormContainer