import React, {PureComponent} from 'react';

export default class RoundImg extends PureComponent {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <img
                src={this.props.src}
                style={{"width": this.props.size, "height": this.props.size, "borderRadius": "50%"}}
                alt={this.props.alt}
            />
        );
    }
}