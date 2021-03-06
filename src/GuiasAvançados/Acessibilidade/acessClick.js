import React from 'react'

class ClickForaExemplo extends React.Component{
    constructor(props){
        super(props)

        this.state = {isOpen: false}
        this.toggleContainer= React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this)
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.onClickOutsideHandler)
    }

    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }))
    }

    onClickOutsideHandler(event){
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen:false})
        }
    }

    render(){
        return(
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an Option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>-1-</li>
                        <li>-2-</li>
                        <li>-3-</li>
                    </ul>
                )}
            </div>
        )
    }
}

export default ClickForaExemplo