import React from "react";
import BasicCard from "./Cards";
import PropTypes from 'prop-types';

class CounterComponent extends React.Component {
    constructor(props) {
        // console.log("Constructor");
        super();
        this.state = {
            initialValue: 5,
            course: 'React',
            render: true
        }
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    componentDidMount() {
        // console.log("Mounting phase");
    }
    shouldComponentUpdate(props, nextState){
        // console.log("should component update");
        if(nextState.initialValue < 0) {
            return false;
        } else {
            return true;
        }
    }
    componentDidUpdate() {
        // console.log("Updating Phase");
    }
    componentWillUnmount() {
        // console.log("Unmounting phase");
    }
    handleIncrement = () => {
        this.setState({ initialValue: ++this.state.initialValue, course: 'Node' });
    }
    handleDecrement(value) {
        this.setState({ initialValue: value })
    }
    render() {
        // console.log("Class render");
        var name = "XXX";

        var handleResetZero = () => {
            this.setState({initialValue : 0})
        }
        return (
            <>
                <h4> This is the {this.props.componentName}. Name is {name}. </h4>
                Initial Value : {this.state.initialValue} <br /> <br />

                <button onClick={this.handleIncrement} >Increment</button> &nbsp;

                <button onClick={(e) => this.handleDecrement(--this.state.initialValue)}>Decrement</button> &nbsp;

                <button onClick={() => this.setState({initialValue : 5}) }>Reset</button> &nbsp;

                <button onClick={handleResetZero}>Reset 0</button> <br/> <br/>

                <button onClick={() => this.setState({render: !this.state.render})}>Toggle Card</button>

                {this.state.render ? <BasicCard subheading="Counter Application" heading="Class Component" 
                description="This Component is having Increment and Decrement button and using state variable"
                functionalities="handleIncrement, handleDecrement, handleResetZero funciton are available" /> : <></>}
            </>  
        )
    }
}

CounterComponent.propTypes = {
    componentName : PropTypes.string.isRequired,
    counterProps : PropTypes.number.isRequired
}

export default CounterComponent;