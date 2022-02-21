import ReactDom from 'react-dom';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import img_mk from "./images/redmarker.png";

const SomeReactComponent = ({ text }) => {

    return (
        <div className="rs_marker">
            <img className="rs_marker" src={img_mk} alt="" />
            {text}
        </div>
    );
};

class BasicMap extends Component {

    static defaultProps = {

        center: {
            lat: 10.998580,
            lng: -74.830177
        },
        zoom: 13
    };

    render() {
        return (

            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyASCma-Ijw6gzGPwEzfDV7f1wIVk5jT658" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>

                    <SomeReactComponent
                        lat={10.998580}
                        lng={-74.830177}
                        text="Hello World"
                    />

                    <SomeReactComponent
                        lat={10.96389}
                        lng={-74.79639}
                        text=""
                    />



                </GoogleMapReact>
            </div>
        );
    }
}




ReactDom.render(<BasicMap />, document.getElementById('root'));

