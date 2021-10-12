import React from "react";
import styles from "./Deck.module.css"
class StickyControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.sControlsCont}>
                <div className={styles.col6}>
                    <button className={this.props.activateAB ? [styles.sButton, styles.attackActivate].join(" ") : [styles.sButton, styles.attackBtn].join(" ")} onClick={this.props.onAttClick}>Battle</button>
                </div>
                <div className={styles.col6}>
                    <button className={this.props.activateCB ? [styles.sButton, styles.cancelBtnActivate].join(" ") : [styles.sButton, styles.cancelBtn].join(" ")} onClick={this.props.onCanClick}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default StickyControls;