import React from 'react'






class IncrementorComponent extends React.Component {
     
    
    state = {
        number: 0
    }
    
    incrementCounter = (e) => {
        /*this.setState({
            number: this.state.number + 1
        })*/

        console.log('a');
        fetch("http://localhost:3001/teams")
            .then(resp => {
                console.log('b', resp)
                return resp.json()
            })
            .then(data => console.log('c', data))
        
        console.log('d');

        // a, d, b, c
    }

    render(){
        return(
            <div>
                <button type='submit' className='bg-white' value={this.state.number} onClick={this.incrementCounter}>
                    Click me
                </button>
                <p className='text-white'>{this.state.number}</p>
            </div>
        )
    }
}

export default IncrementorComponent