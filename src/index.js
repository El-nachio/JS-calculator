/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
    constructor(props) {
    super(props) 
        this.state = {
            dataDisplay: '',
            cero: 0,
            value: 0
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(click) {
        
        let values = (this.state.dataDisplay).toString();
        try {
            // on equal press calculate the opeartion
            if (click.target.value === '=') {
                this.setState({
                    dataDisplay: eval(this.state.dataDisplay)
                })
                console.log('apretaste el primer if')

            }// press clear or have two ceros then erase all the operation 
            else if(click.target.value === 'AC') {
                this.setState ({
                    dataDisplay: '',
                    cero: 0
                })
            } else if (values.slice(0, 1).indexOf('0') !== -1) {
                console.log('hay un 0 y hay que elminiarlo')
                this.setState({
                    dataDisplay : this.state.dataDisplay.slice(0, -1)
                })
            }
            else {
                this.setState({
                    dataDisplay: this.state.dataDisplay += click.target.value,
                    cero: '',
                })
                console.log('apretaste el seg8undo else')

            }
        }
        catch (error) {
            console.log('el error ocurrio porque', error)
            this.setState({
                dataDisplay : 'Syntax Error'
            })
        }
        // have a decimal? yes take out the value of the button, else y addit
        (/\./).test(this.state.dataDisplay) ?
        document.getElementById('decimal').value = ''
        :document.getElementById('decimal').value = '.'
        console.log('result',this.state.result)
        console.log('display',(this.state.dataDisplay).toString())
        // if i have a decimal and then a operator y can put another decimal
        if((values).includes('+', '-', '/', '*')) {
            document.getElementById('decimal').value = '.'
        }
    }    
        render() {
            return (
                <div className='calculator'>
            <div id='display'>
                <p id='vulgar'>{this.state.cero}{this.state.dataDisplay}</p>
            </div>
            <div id='buttons'>
                <button id='clear' className='calculator-class'value='AC'onClick={this.handleClick}>AC</button>
                <button id='divide' className='calculator-class'value='/'onClick={this.handleClick}>/</button>
                <button id='multiply' className='calculator-class'value='*'onClick={this.handleClick}>*</button>
                <button id='seven' className='calculator-class'value='7'onClick={this.handleClick}>7</button>
                <button id='eight' className='calculator-class'value='8'onClick={this.handleClick}>8</button>
                <button id='nine' className='calculator-class'value='9'onClick={this.handleClick}>9</button>
                <button id='subtract' className='calculator-class'value='-'onClick={this.handleClick}>-</button>
                <button id='four' className='calculator-class'value='4'onClick={this.handleClick}>4</button>
                <button id='five' className='calculator-class'value='5'onClick={this.handleClick}>5</button>
                <button id='six' className='calculator-class'value='6'onClick={this.handleClick}>6</button>
                <button id='add' className='calculator-class'value='+'onClick={this.handleClick}>+</button>
                <button id='one' className='calculator-class'value='1'onClick={this.handleClick}>1</button>
                <button id='two' className='calculator-class'value='2'onClick={this.handleClick}>2</button>
                <button id='three' className='calculator-class'value='3'onClick={this.handleClick}>3</button>
                <button id='equals' className='calculator-class'value='='onClick={this.handleClick}>=</button>
                <button id='zero' className='calculator-class'value='0'onClick={this.handleClick}>0</button>
                <button id='decimal' className='calculator-class'value='.'onClick={this.handleClick}>.</button>
            </div>
        </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))

// para ma;ana lo que hay que hacer es ponerle el value a cada boton numerico, pasar el valor al estado general de la aplicacion y hacerlo render en el display y realizar las funciones de los botones operadores