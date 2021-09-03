import React from "react";

class PokemonCard extends React.Component {
    render() {
        console.log('pokecar')
        return (
            <div className={this.props.cardStyle}>
                <div className="card-head-pd">
                    <div className="card-head">
                        <div>
                            <div className="col-2">
                                <img className="img-frame" src={this.props.img} alt="pokemon pic" />
                            </div>
                            <div className="col-3">
                                <div className="card-head-name">{this.props.name}</div>
                            </div>
                            <div className="col-4">
                                <span className="card-head-stats fl">HP: {this.props.hp}</span>
                                <span className="card-head-stats fr">XP: {this.props.xp}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-info-container-pd">
                    <div className="card-info-container">
                        <span className="sect-text">Stats</span>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">attack</span>
                                <span className="stat">{this.props.attack}</span>
                            </div>
                        </div>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">defense</span>
                                <span className="stat">{this.props.defense}</span>
                            </div>
                        </div>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">special-attack</span>
                                <span className="stat">{this.props.sattack}</span>
                            </div>
                        </div>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">special-defense</span>
                                <span className="stat">{this.props.sdefense}</span>
                            </div>
                        </div>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">speed</span>
                                <span className="stat">{this.props.speed}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-info-container-pd">
                    <div className="card-info-container">
                        <span className="sect-text">Ability</span>
                        <div className="container-row-pd">
                            <div className="container-row">
                                <span className="stat-name">{this.props.abilities}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-info-container-pd">
                    <div className="card-info-container">
                        <span className="sect-text">Moves</span>
                        <div className="container-row-pd">
                            <div className="container-row mv collapse">
                                <span className="stat-name">{this.props.moves}</span>
                            </div></div></div>
                </div>
            </div>

        );
    }
}

export default PokemonCard;