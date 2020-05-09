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
        reverse: false,
        flipSymbols: false
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
                        <div className='search'>
                            <ClearButton handleClick={this.handleClearClick} />
                            <button className='btn btn-primary' onClick={this.handleFlipClick}>
                                Flip Symbols
                            </button>
                        </div>
                        <div className='reverse'>
                            {this.state.reverse && (
                                <span>
                                    <span className='badge badge-warning'>REVERSED!</span>
                                </span>
                            )}
                            <ReverseButton handleClick={this.handleReverseClick} />
                        </div>
                    </div>
                </div>
                <div className={this.getCharacterClassName()}>
                    <Characters handleOnClick={this.handleCharacterClick}></Characters>
                </div>
                <div className='list-header'>
                    <span className='found-achievements'>{`Found ${achievements.length} Achievements`}</span>
                    <button className='btn btn-success' onClick={this.generateExport}>
                        Download ToDo List
                    </button>
                    <span className='found-achievements'>{`${this.state.toDo.length} Achievements selected`}</span>
                </div>
                <div className='output-wrapper row'>
                    <div className='col-6 achievement-list'>
                        <h5>Click on an achievement to add it to the ToDo List</h5>
                        <List
                            listData={achievements}
                            handleOnClick={this.handleListAchievementClick}
                        />
                    </div>
                    <div className='col-6 todo-list'>
                        <h5>Click on an achievement to remove it from the ToDo List</h5>
                        {!!this.state.toDo.length && (
                            <List listData={this.state.toDo} handleOnClick={this.handleToDoClick} />
                        )}
                    </div>
                </div>
            </div>
        );
    }

    handleFlipClick = () => {
        this.setState({ flipSymbols: !this.state.flipSymbols });
    };

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
        const toDo = [newTodo, ...this.state.toDo];
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

    getCharacterClassName = () => {
        let className = 'character-select';
        if (this.state.flipSymbols) className += ' flipped';
        console.log(className);
        return className;
    };
}

export default App;
