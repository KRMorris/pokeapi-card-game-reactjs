import React from 'react';

class Modal extends React.Component {
    render() {
        return <div className="modal">
            <div className="modal-main">
                <div className="" style={{ display: "flex" }}>
                    <button className="close-btn" onClick={this.props.handleClose}>X</button>
                </div>

                <div className="details-card">
                    <div className="card-head-pd">
                        <div className="card-head">
                            <div>
                                <div className="col-2">
                                    <img className="img-frame" src={this.props.img} />
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

                {/*
                <div className="details-card"><div className="card-head-pd">
                    <div className="card-head">
                        <div>
                            <div className="col-2">
                                <img className="img-frame" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                            </div>
                            <div className="col-3">
                                <div className="card-head-name">bulbasaur</div></div>
                            <div className="col-4">
                                <span className="card-head-stats fl">HP: 45</span><span className="card-head-stats fr">XP: 64</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="card-info-container-pd">
                        <div className="card-info-container">
                            <span className="sect-text">Stats</span>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">attack</span><span className="stat">49</span>
                                </div>
                            </div>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">defense</span>
                                    <span className="stat">49</span>
                                </div>
                            </div>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">special-attack</span>
                                    <span className="stat">65</span>
                                </div>
                            </div>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">special-defense</span>
                                    <span className="stat">65</span>
                                </div>
                            </div>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">speed</span>
                                    <span className="stat">45</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-info-container-pd">
                        <div className="card-info-container">
                            <span className="sect-text">Ability</span>
                            <div className="container-row-pd">
                                <div className="container-row">
                                    <span className="stat-name">overgrow, chlorophyll</span>
                                </div></div></div></div><div className="card-info-container-pd"><div className="card-info-container"><span className="sect-text">Moves</span><div className="container-row-pd"><div className="container-row mv collapse"><span className="stat-name">razor-wind, swords-dance, cut, bind, vine-whip, headbutt, tackle, body-slam, take-down, double-edge, growl, strength, mega-drain, leech-seed, growth, razor-leaf, solar-beam, poison-powder, sleep-powder, petal-dance, string-shot, toxic, rage, mimic, double-team, defense-curl, light-screen, reflect, bide, sludge, skull-bash, amnesia, flash, rest, substitute, snore, curse, protect, sludge-bomb, mud-slap, giga-drain, endure, charm, swagger, fury-cutter, attract, sleep-talk, return, frustration, safeguard, sweet-scent, synthesis, hidden-power, sunny-day, rock-smash, facade, nature-power, ingrain, knock-off, secret-power, grass-whistle, bullet-seed, magical-leaf, natural-gift, worry-seed, seed-bomb, energy-ball, leaf-storm, power-whip, captivate, grass-knot, venoshock, round, echoed-voice, grass-pledge, work-up, grassy-terrain, confide</span></div></div></div></div></div>
                 */}
            </div>
        </div>


    }
}

export default Modal;