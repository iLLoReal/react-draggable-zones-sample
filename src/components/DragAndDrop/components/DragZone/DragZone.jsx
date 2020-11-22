import React, { Component } from "react";

class DragZone extends Component {
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
        //ev.preventDefault();

        let id = ev.dataTransfer.getData("plain/text");
        if (id) {

            const element = document.getElementById(id);

            element.style.display = 'block';
            
            ev.target.appendChild(element);

            //alert("a(n) " + id + " was dropped into the " + this.props.category);
            this.props.changeCategory(id, this.props.category);
        }
    }

    render() {
        return (
        <div 
        droppable="true"
        className="drop"
        onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>this.onDrop(e, "complete")}
        >
            {this.props.category}
        </div>)
    }

}

export default DragZone;