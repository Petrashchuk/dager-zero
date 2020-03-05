import React from 'react';
import './Game.css';

export default class Game extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            squaers: Array(9).fill(null),
            count: 0,
        };
        this.isWinnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }

    Winner = () => {
        const {squaers, count} = this.state;
        const WinnersCombination = (count % 2 === 0) ? 'X' : 'O';
        if (this.isWinnerLine.some(item => {
                return squaers[item[0]] === WinnersCombination &&
                    squaers[item[1]] === WinnersCombination &&
                    squaers[item[2]] === WinnersCombination
            })) {
            alert('is Winner' + ' ' + WinnersCombination);
            setTimeout(() => {
                this.setState({count: 0, squaers: Array(9).fill(null)});
            }, 2000)
        }
        // this.isWinnerLine.every(item => {
        //     return squaers[item[0]] !== null &&
        //         squaers[item[1]] !== null &&
        //         squaers[item[2]] !== null
        // })
        else if (squaers.every(item => item)) {
            alert('Draw');
            setTimeout(() => {
                this.setState({count: 0, squaers: Array(9).fill(null)});
            }, 2000)
        }
    };

    clickHandler(number) {
        const {squaers, count} = this.state;
        if (!squaers[number]) {
            squaers[number] = (count % 2 === 0) ? 'X' : 'O';
            this.setState({count: count + 1, squaers: squaers})
        }
        else alert('Field is busy');
        this.Winner()
    };

    render() {
        return (
            <div className={'Place'}>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 0)}>{this.state.squaers[0]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 1)}>{this.state.squaers[1]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 2)}>{this.state.squaers[2]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 3)}>{this.state.squaers[3]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 4)}>{this.state.squaers[4]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 5)}>{this.state.squaers[5]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 6)}>{this.state.squaers[6]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 7)}>{this.state.squaers[7]}</div>
                <div className={'fields'} onClick={this.clickHandler.bind(this, 8)}> {this.state.squaers[8]}</div>
            </div>
        )
    }
}