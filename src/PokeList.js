import React from 'react';
import Modal from './Modal';
import Services from './services';


class PokeList extends React.Component {
    pn = [];
    selectionArray = [];

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            mIsLoaded: false,
            pokeNames: [],
            namesSelection: [],
            cardDet: [],
            isSelected: null,
            showM: false
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pokeNames: result.results
                    });
                },
                /*it's important to handle errors here instead of a catch() block so that we don't swallow
                exceptions from actual bugs in components.*/
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    handleCardClick = (event, p) => {
        event.preventDefault();
        if (event.target.textContent === "View Card") {
            console.log(event.target);
            console.log('sysys');
            this.handleViewCard(p);
        } else {

            //this.setState({ isSelected: true, card_id: p.name });
            if (event.target.className === "card card-name") {
                this.selectionArray.push(p.name);
                this.setState({ isSelected: p.name, card_id: p.name });//this.namesSelection);

                this.pn.push(p.url);
                console.log(this.pn)
            } else {
                this.setState({ isSelected: false });
                //check if url already in array and remove
                for (let check of this.pn) {
                    if (p.url === check) {
                        //remove unselected url
                        //this.pn = this.pn.filter(val => val !== p.url);
                        this.pn = Services.remUnselected(this.pn, p.url);
                    }
                    //   console.log(this.pn)
                }
                console.log(this.pn)
            }

        }

        this.setState({ namesSelection: this.pn });
        //console.log(this.pn);
    }
    //get pokemon details
    //show modal
    handleViewCard = (pName) => {

        //console.log(pName.url);
        this.fetchCardDetails(pName.url, 'details');
        this.setState({ showM: true })
    }

    //call card details for each pokemon name card
    //selected when add button is pressed
    handleAdd = (event) => {

        console.log(this.state.namesSelection);
        for (const c of this.state.namesSelection) {
            this.fetchCardDetails(c, null);
            console.log(c);
        }
        this.pn = []
    }

    //fetch pokemon details
    fetchCardDetails = (url, ftype) => {
        let mv = "";
        let ab = "";
        fetch(url)
            .then(res => res.json())
            .then((result) => {

                //extract moves
                for (let y = 0; y < result.moves.length; y++) {
                    //mv.push(result.moves[y].move.name);
                    if (y === 0) {
                        mv = result.moves[y].move.name;
                    } else {
                        mv += ", " + result.moves[y].move.name;
                    }

                }
                //extract abilities
                for (let a = 0; a < result.abilities.length; a++) {
                    //mv.push(result.moves[y].move.name);
                    if (a === 0) {
                        ab = result.abilities[a].ability.name;
                    } else {
                        ab += ", " + result.abilities[a].ability.name;
                    }

                }
                //pokemon details object
                let pokeInfo = {
                    "name": result.name,
                    "experience": result.base_experience,
                    "hp": result.stats[0].base_stat,
                    "attack": result.stats[1].base_stat,
                    "defense": result.stats[2].base_stat,
                    "sAttack": result.stats[3].base_stat,
                    "sDefense": result.stats[4].base_stat,
                    "speed": result.stats[5].base_stat,
                    "abilities": ab,
                    "moves": mv,
                    "image": result.sprites.other['official-artwork']['front_default']
                }
                //add pokeInfo to state to be viewed in modal
                if (ftype === 'details') {
                    console.log('---');
                    this.setState({ cardDet: pokeInfo });
                    this.props = pokeInfo;
                } else {
                    window.localStorage.setItem(result.name, JSON.stringify(pokeInfo));
                }
                //this.setState({ mIsLoaded: true });

            },
                (error) => {

                }
            )
    }
    checkLoa = () => {
        this.setState({ mIsLoaded: true });
        console.log("---");
    }
    hideModal = () => {
        this.setState({
            showM: false, mIsLoaded: false,
            cardDet: {}
        });
    }

    render() {
        const { error, isLoaded, pokeNames } = this.state;
        if (error) {
            return <div>Error:{error.message}</div>;

        } else if (!isLoaded) {
            return <div>Loading.....</div>;
        } else {
            let { cardDet } = this.state

            return (

                <div>
                    <div className="add-sec">
                        Select Pokémon to add to deck:
                        <button onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="bg">
                        <div className="main-container">
                            {pokeNames.map(poke => (

                                <a key={poke.name} href={poke.url} onClick={e => this.handleCardClick(e, poke)}>
                                    <div className="col-1">
                                        <div className={poke.name === this.state.isSelected ? 'card card-name card-active' : 'card card-name'} style={{}}>
                                            {poke.name}
                                            <div style={{
                                                fontSize: '10px',
                                                display: poke.name === this.state.isSelected ? 'block' : 'none'

                                            }}>
                                                <button>View Card</button>
                                            </div>

                                        </div>

                                    </div>
                                </a>

                            ))}
                        </div>

                    </div>
                    <div style={{ display: this.state.showM ? "" : "none" }}>
                        <img style={{ display: 'none' }} src={this.state.cardDet.image} onLoad={this.checkLoa} />

                        {this.state.mIsLoaded ?
                            <Modal
                                cardStyle={'details-card'}
                                name={this.state.cardDet.name} xp={this.state.cardDet.experience}
                                hp={this.state.cardDet.hp} img={this.state.cardDet.image}
                                attack={this.state.cardDet.attack} defense={this.state.cardDet.defense}
                                sattack={this.state.cardDet.sAttack} sdefense={this.state.cardDet.sDefense}
                                speed={this.state.cardDet.speed} moves={this.state.cardDet.moves}
                                abilities={this.state.cardDet.abilities} handleClose={this.hideModal} loading={false} />
                            : <Modal loading={true} />}
                    </div>
                </div>
            );
        }
    }

}

export default PokeList;