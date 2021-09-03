import React from 'react';
import PokemonCard from './PokemonCard';
import styles from '../src/Deck.module.css'
class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pCards: []
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

    render() {
        const { error, isLoaded, pCards } = this.state;

        return (
            <div>
                <p>Select 5 cards to begin battle:</p>
                {pCards.map(dcd => (
                    <div className={styles.col5}>
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

export default Deck;