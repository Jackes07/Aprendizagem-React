class Clock extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello, word!!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}