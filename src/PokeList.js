import React from 'react';

class PokeList extends React.Component {
    pn = [];//[...this.state.namesSelection];

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pokeNames: [],
            namesSelection: []
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


    handleCardClick = (event, url) => {
        event.preventDefault();
        console.log(url);
        this.pn.push(url);
        this.setState({ namesSelection: this.pn });//this.namesSelection);
        console.log(this.pn);
        //this.namesSelection.concat([url])
        //console.log('selecr' + this.namesSelection);
        //event.preventDefault();
    }

    handleAdd = (event) => {
        console.log(this.state.namesSelection);
        for (const c of this.state.namesSelection) {
            this.fetchCardDetails(c);
            console.log(c);
        }
    }

    //fetch details
    fetchCardDetails = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                let pokeInfo = {
                    "name": result.name,
                    "experience": result.base_experience,
                    "stats": result.stats,
                    "abilities": result.abilities,
                    "moves": result.moves

                }
                window.localStorage.setItem(result.name, JSON.stringify(pokeInfo));
            },
                (error) => {

                }
            )
    }

    render() {
        const { error, isLoaded, pokeNames } = this.state;
        if (error) {
            return <div>Error:{error.message}</div>;

        } else if (!isLoaded) {
            return <div>Loading.....</div>;
        } else {
            return (
                <div>
                    <div className="add-sec">
                        Select Pokémon to add to deck:
                        <button onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="bg">
                        <div className="main-container">
                            {pokeNames.map(poke => (
                                <a key={poke.name} href={poke.url} onClick={e => this.handleCardClick(e, poke.url)}>
                                    <div className="col-1">
                                        <div className="card card-name">
                                            {poke.name}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default PokeList;