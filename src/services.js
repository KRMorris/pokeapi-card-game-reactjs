
import { Component } from "react/cjs/react.production.min";
import styles from '../src/Deck.module.css'

//rem()

const Services = {
    checkSelected: function (arr, pName) {
        if (arr.find(obj => obj.name === pName)) {
            return true;
        }
        else { return false; }
    },
    //rem
    remUnselectedObj: function (arr, pName) {
        return arr.filter(obj => obj.name !== pName);
    },
    //remove unselected value
    remUnselected: function (arr, newVal) {
        console.log(arr + ' ' + 'eeee')
        for (let i of arr) {
            if (i.name === newVal) {
                console.log(i)
                return arr.filter(val => val !== newVal);
            }
        }
    },
    //
    itemsClicked: function (Card) {
        let tempArray = []

        return class CardClicked extends Component {

            state = {
                iClicked: null,
                isActiveAtt: false
            }
            onClick = () => {
                this.setState({ iClicked: !this.state.iClicked });
                console.log(this.state.iClicked);



            }
            render() {
                return (
                    <div className={styles.col5} onClick={() => { this.onClick(); }}>
                        <Card {...this.props} isSel={this.state.iClicked} />
                    </div>
                );
            }
        }
    }
};

export default Services;