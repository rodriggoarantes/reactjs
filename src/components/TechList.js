import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'React.js',
            'React Native'
        ]
    };

    handleInputChange = (e) => {
        this.setState({newTech: e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech], 
            newTech: ''
        });
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech)});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => <TechItem key={tech} tech={tech} 
                        onDelete={this.handleDelete}/>)}
                </ul>
                <input 
                    type='text' 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech}/>
                <button type='submit'>Enviar</button>
            </form>
        );
    }
}

export default TechList;