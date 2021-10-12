import React, { useCallback } from 'react';
import PokemonCard from './PokemonCard';
import styles from '../src/Deck.module.css';
import Services from './services';
import Battle from './Battle';
//import StickyControls from './StickyControls';
let tempSelectArr = [];
const rm = Services;
let c = 0;
let toggle = false;
class Deck extends React.Component {
    //    cSticky = React.useState({ cbtn: false });

    constructor(props) {
        super(props);

        this.state = {
            pCards: [],
            isActiveAtt: false,
            isActiveCan: styles.cancelBtn,
            selectedCards: [],
            nav: '',
            iClicked: null,
        };
        this.activateAttackButton.bind();
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

    //add card clicked to array. remove if already clicked
    handleCardClick(e, sel) {
        console.log("handleCardClick ");

        //check if key in object array
        //if true remove object
        //if false add object to array
        rm.checkSelected(tempSelectArr, sel.name) ?
            tempSelectArr = rm.remUnselectedObj(tempSelectArr, sel.name) :
            tempSelectArr.push(sel);

        console.log(tempSelectArr);
        /*        setTimeout(() => {
        
                    tempSelectArr[c] = sel;
                    c += 1;
                    console.log(tempSelectArr);
        */
        //this.setState({ iClicked: !this.state.iClicked });

        if (tempSelectArr.length === 1) {//activate cancel btn
            //this.activateCancelButton();
            //this.setState({ isActiveCan: styles.cancelBtnActivate });
            //toggle = true;
            //this.setState({ iClicked: !this.state.iClicked });
        }
        else if (tempSelectArr.length === 5) {
            // this.activateAttackButton();
            //this.setState({ selectedCards: tempSelectArr });
        }
        /*      }, 2000);*/
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
        this.setState({ nav: 'battle' });

    }
    render() {
        let isActiveCan = false;
        const Opt = function (e, sel) {
            console.log('ssssss')
            isActiveCan = true;
            this.activateCancelButton()
        }
        const { error, isLoaded, pCards } = this.state;
        const ClickableCard = Services.itemsClicked(PokemonCard)
        const cards = pCards.map(dcd => (

            <div key={dcd.name} onClick={e => this.handleCardClick(e, dcd)}
            >
                <ClickableCard key={dcd.name} cardStyleA={styles.detailsActive}
                    cardStyle={styles.details} name={dcd.name} xp={dcd.experience}
                    hp={dcd.hp} img={dcd.image}
                    attack={dcd.attack} defense={dcd.defense}
                    sattack={dcd.sAttack} sdefense={dcd.sDefense}
                    speed={dcd.speed} moves={dcd.moves}
                    abilities={dcd.abilities} loading={false}
                />
            </div>

        ));
        if (this.state.nav === '') {

            return (
                <div style={{ display: 'flow-root' }}>
                    <div className={styles.col7}><p>Select 5 cards to begin battle:</p></div>
                    <StickyControls
                        activateAB={this.state.isActiveAtt}
                        activateCB={this.state.isActiveCan}
                        onAttClick={this.handleBattleBtn}
                        onCanClick={this.handleBattleBtn}
                    />
                    {/*<div key={dcd.name} className={styles.col5}>  onClick={e => this.handleCardClick(e, dcd)}>*/}
                    {/*pCards.map(dcd => (
                        <div onClick={e => this.Opt(e, dcd)}>
                            <ClickableCard key={dcd.name} cardStyleA={styles.detailsActive}
                                cardStyle={styles.details} name={dcd.name} xp={dcd.experience}
                                hp={dcd.hp} img={dcd.image}
                                attack={dcd.attack} defense={dcd.defense}
                                sattack={dcd.sAttack} sdefense={dcd.sDefense}
                                speed={dcd.speed} moves={dcd.moves}
                                abilities={dcd.abilities} loading={false}
                            />
                        </div>
                    ))*/cards}

                </div>
            );
        }
        else {
            return (
                <Battle arr={tempSelectArr} />
            );
        }
    }
}
function StickyControls(props) {
    let activateAB;
    const setStyle = () => { return activateAB = true };
    const tog = useCallback(() => this.setStyle())
    if (props.activateAB === true) {
        activateAB = true
    }
    return (
        <div className={styles.sControlsCont}>
            <div className={styles.col6}>
                <button className={activateAB ? [styles.sButton, styles.attackActivate].join(" ") : [styles.sButton, styles.attackBtn].join(" ")} onClick={props.onAttClick}>Battle</button>
            </div>
            <div className={styles.col6}>
                <button className={props.activateCB ? [styles.sButton, styles.cancelBtnActivate].join(" ") : [styles.sButton, styles.cancelBtn].join(" ")} onClick={props.onCanClick}>Cancel</button>
            </div>
        </div>
    );
}

export default Deck;