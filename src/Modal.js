import React from 'react';
import PokemonCard from './PokemonCard';

class Modal extends React.Component {

    render() {

        if (this.props.loading) {
            return <div className="modal">
                <div className="modal-main">
                    <div className="" style={{ display: "flex" }}>
                        <button className="close-btn" onClick={this.props.handleClose}>X</button>
                    </div>

                    <div>Loading.....</div>
                </div>
            </div>
        } else {


            return <div className="modal">
                <div className="modal-main">
                    <div className="" style={{ display: "flex" }}>
                        <button className="close-btn" onClick={this.props.handleClose}>X</button>
                    </div>
                    {console.log(this.props)}

                    <PokemonCard {...this.props} />
                </div>
            </div>

        }
    }
}



export default Modal;