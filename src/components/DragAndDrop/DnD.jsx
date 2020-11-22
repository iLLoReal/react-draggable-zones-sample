import React, { Component } from "react";
import Element from "./components/Element/Element";
import DragZone from "./components/DragZone/DragZone";
import "./DnD.css"

class DnD extends Component {
    constructor(props) {
        super(props);
        this.state = [];
        this.props.element.forEach(element => {
            this.state.push({category: element.category});
        })
    }

    handleChangeCategory = (id, cat) => {
        let prevState = this.state;
        
        for (let i = 0; i < this.props.element.length; i++) {
            if (id === i.toString()) {
                //alert("found " + id + " at i=" + i);
                prevState[i].category = cat;
            }
        }
        this.setState(prevState);
    }

    render() {
        return (<div className="DnD">
            {this.props.dragZones.map((dragZone, i) => {
                return (<DragZone category={dragZone.category} changeCategory={this.handleChangeCategory}/>)
            })}
            {this.props.element.map((element, i) => {
                element.category = this.state[i].category;
                return (<Element element={element} id={i}/>);
            })}
        </div>);
    }
}

export default DnD;