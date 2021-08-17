import React from 'react';
import ReactDOM from 'react-dom';
class PokeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pokeNames: []
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

    render() {
        const { error, isLoaded, pokeNames } = this.state;
        if (error) {
            return <div>Error:{error.message}</div>;

        } else if (!isLoaded) {
            return <div>Loading.....</div>;
        } else {
            return (
                <div className="bg">
                    <div className="main-container">
                        {pokeNames.map(poke => (
                            <a href={poke.url}>
                                <div className="col-1">
                                    <div className="card card-name">
                                        {poke.name}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )
        }
    }

}

export default PokeList;