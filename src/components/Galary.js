import React, { Component } from 'react';
import Carousel from './Carousel';

class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            <div className="container">
                <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
                    Gallery
                </h1>
                <p className="color-grey" style={{ marginBottom: "50px", textAlign:"center" }}>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>
            <Carousel/>
            </div>
        )
            
        }
}

export default Gallary;