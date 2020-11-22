import React, { Component } from "react";
import './Element.css';

class Element extends Component {
    constructor(props) {
        super(props);
    }

    onDragStart = (ev, id) => {
        //ev.preventDefault();
        ev.dataTransfer.setData("plain/text", id);
    }

    remWhiteSpace = (str) => {
        let newStr = "";
        let shouldUpper = false;
        for (let i = 0; i < str.length; i++) {
          let c = str[i];
          if (shouldUpper)
        {
            c = str[i].toUpperCase();
                shouldUpper = false;
        }
        if (c == ' ' || c == '/tab')
            shouldUpper = true;
        if (!shouldUpper)
              newStr += c;
      }
        return newStr;
    }

    onDragEnd = (ev) => {
        //alert("My new category is " + this.props.category);
    }

    linkRendering = (element) => {
        if (element.link) {
            let href="https://en.wikipedia.org/wiki/" + element.title;
            return (
                <div>
                    <a target="_blank" rel="noopener noreferrer" href={href} >?</a>
                    <div className="box">
                    <iframe src={href} title={element.title}></iframe>
                    </div>
                 </div>
            );
        }
    }

    render() {
        return (
                <div id={this.props.id}
                    draggable="true"
                    className={this.remWhiteSpace(this.props.element.category)}
                    onDragStart={(e)=>this.onDragStart(e, this.props.id)}
                    //onDragEnd={(e)=>this.onDragEnd(e)}
                    >
                        {this.props.element.title} {this.props.element.category} {this.linkRendering(this.props.element)} element
                </div>
            );
    }
}

export default Element;