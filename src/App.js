import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';

import './helpers/string';
import achievements from './data/achievements.json';

import List from './components/achievementList/list';
import SearchInput from './components/search/searchInput';
import ClearButton from './components/search/clearButton';
import ReverseButton from './components/search/reverseButton';
import Characters from './components/search/characters';

class App extends Component {
    state = {
        achievements,
        toDo: [],
        search: '',
        reverse: false
    };

    render() {
        const achievements = this.filterAchievements();
        return (
            <div className='App container'>
                <h2>PayDay 2 Secret Translator</h2>
                <div className='input-wrapper'>
                    <div className=''>
                        <SearchInput
                            value={this.state.search}
                            handleInput={this.handleInputChange}
                        />
                    </div>

                    <div className='control-buttons'>
                        <ClearButton handleClick={this.handleClearClick} />
                        {this.state.reverse && (
                            <span>
                                <span className='badge badge-warning'>REVERSED!</span>
                            </span>
                        )}
                        <ReverseButton handleClick={this.handleReverseClick} />
                    </div>
                </div>
                <div className='character-select'>
                    <Characters handleOnClick={this.handleCharacterClick}></Characters>
                </div>
                {this.state.search && (
                    <span className='found-achievements'>{`Found ${achievements.length} Achievements`}</span>
                )}
                <div className='output-wrapper row'>
                    <div className='col-6 achievement-list'>
                        <h5>Click on an achievement to add it to the ToDo List</h5>
                        <List
                            listData={achievements}
                            handleOnClick={this.handleListAchievementClick}
                        />
                    </div>
                    {!!this.state.toDo.length && (
                        <div className='col-6 todo-list'>
                            <button className='btn btn-success' onClick={this.generateExport}>
                                Download ToDo List
                            </button>
                            <h5>Click on an achievement to remove it from the ToDo List</h5>
                            <List listData={this.state.toDo} handleOnClick={this.handleToDoClick} />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    handleCharacterClick = character => {
        console.log(character);
        const search = this.state.search + character;
        this.setState({ search });
    };

    handleToDoClick = removeToDo => {
        const newToDos = this.state.toDo.filter(toDo => toDo !== removeToDo);
        this.setState({ toDo: newToDos });
    };

    handleListAchievementClick = newTodo => {
        const inTodo = this.state.toDo.some(achievement => achievement === newTodo);
        if (inTodo) return;
        const toDo = [...this.state.toDo, newTodo];
        this.setState({ toDo });
    };

    handleInputChange = value => {
        this.setState({ search: value });
    };

    handleClearClick = () => {
        this.setState({ search: '' });
    };

    handleReverseClick = () => {
        this.setState({
            reverse: !this.state.reverse
        });
    };

    filterAchievements = () => {
        let search = this.state.search;
        if (this.state.reverse) {
            search = this.state.search.reverse();
        }

        return this.state.achievements.filter(achievement =>
            achievement.text
                .toLowerCase()
                .split(' ')
                .join('')
                .includes(search.toLowerCase())
        );
    };

    generateExport = () => {
        if (!this.state.achievements.length) return;
        const text = this.state.toDo.map(achievement => `${achievement.name}\n`);

        //Encode the Text for the Browser and get rid of any ","
        const encodedText = encodeURIComponent(text)
            .split('%2C')
            .join('');

        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodedText);
        element.setAttribute('download', 'achievements.txt');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };
}

export default App;
