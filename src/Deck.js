import React from 'react';
import PokemonCard from './PokemonCard';
import styles from '../src/Deck.module.css'
let tempSelectArr = [];
class Deck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pCards: [],
            isActiveAtt: false,
            isActiveCan: false,
            selectedCards: []
        };
    }

    componentDidMount() {
        let k = Object.keys(localStorage);
        let len = k.length;
        let temp = [];

        while (len--) {
            temp.push(JSON.parse(localStorage.getItem(k[len])));
        }
        console.log(temp);
        this.setState({ pCards: temp });
    }
    //get object base on card position
    handleCardClick = (e, sel) => {
        console.log("handleCardClick ");

        tempSelectArr.push(sel);
        console.log(tempSelectArr);
        if (tempSelectArr.length === 1) {//activate cancel btn
            this.activateCancelButton();
        }
        else if (tempSelectArr.length === 5) {
            this.activateAttackButton();
            this.setState({ selectedCards: tempSelectArr });
        } else {

        }
    }
    activateAttackButton = () => {
        this.setState({ isActiveAtt: true });
        console.log("aaB");
    }
    activateCancelButton = () => {
        this.setState({ isActiveCan: true });
        console.log("acB");
    }
    handleBattleBtn = () => {
        console.log("handleBattleBtn");
    }
    render() {
        const { error, isLoaded, pCards } = this.state;

        return (
            <div style={{ display: 'flow-root' }}>
                <div className={styles.col7}><p>Select 5 cards to begin battle:</p></div>
                <StickyControls
                    activateAB={this.state.isActiveAtt}
                    activateCB={this.state.isActiveCan}
                    onAttClick={this.handleBattleBtn()}
                    onCanClick={this.handleBattleBtn}
                />

                {pCards.map(dcd => (
                    <div key={dcd.name} className={styles.col5} onClick={e => this.handleCardClick(e, dcd)}>
                        <PokemonCard cardStyle={styles.details} name={dcd.name} xp={dcd.experience}
                            hp={dcd.hp} img={dcd.image}
                            attack={dcd.attack} defense={dcd.defense}
                            sattack={dcd.sAttack} sdefense={dcd.sDefense}
                            speed={dcd.speed} moves={dcd.moves}
                            abilities={dcd.abilities} loading={false} />
                    </div>
                ))}
            </div>
        );
    }
}
function StickyControls(props) {
    return (
        <div className={styles.sControlsCont}>
            <div className={styles.col6}>
                <button className={props.activateAB ? [styles.sButton, styles.attackActivate].join(" ") : [styles.sButton, styles.attackBtn].join(" ")} onClick={props.onAttClick}>Battle</button>
            </div>
            <div className={styles.col6}>
                <button className={props.activateCB ? [styles.sButton, styles.cancelBtnActivate].join(" ") : [styles.sButton, styles.cancelBtn].join(" ")} onClick={props.onCanClick}>Cancel</button>
            </div>
        </div>
    );
}
export default Deck;