import {Player} from "./Player"
class Game {
    private players : Array<Player>;
    private nbPins: number;
    private currentPlayerIdx : number;


    public constructor(nbPlayers : number, nbPins: number) {
        if (Number.isNaN(nbPlayers))
            throw new Error("Invalid parameter : nbPlayers must be a number");
        if (nbPlayers <= 0)
            throw new Error("Invalid parameter : nbPlayers must be positive");

        if (Number.isNaN(nbPins))
            throw new Error("Invalid parameter : nbPins must be a number");
        if (nbPins <= 0)
            throw new Error("Invalid parameter : nbPins must be positive");

        this.players = new Array<Player>();
        for (let index = 0; index < nbPlayers; index++) {
            this.players.push(new Player("Joueur " + new String(index + 1), nbPins))
        }
        this.nbPins = nbPins;

        this.currentPlayerIdx = 0;
    }

    public startPlaying() {
        this.players[0].play();
    }

    public getPlayers(): Array<Player> {
        return this.players;
    }

    public getCurrentPlayer(): Player {
        return this.players[this.currentPlayerIdx];
    }

    public getWinner(): Player {
        return new Player("Jean-Michel", this.nbPins);
    }

    public nextPlayer() {
        this.currentPlayerIdx = this.currentPlayerIdx + 1;
        if (this.currentPlayerIdx >= this.players.length)
            this.currentPlayerIdx = 0;
        this.players[this.currentPlayerIdx].play();
    }
}


export { Game }
