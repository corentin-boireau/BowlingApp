import {Game} from './Game'
import {Player} from './Player'
import {PlayerView} from './PlayerView'
import {RollInputView} from './RollInputView'

class GameView {
    private body:          HTMLElement
    private gameDiv:       HTMLElement
    private title:         HTMLElement
    private inputDiv:      HTMLElement
    private currentPlayer: HTMLElement
    private rollInput:     RollInputView
    private playerDiv:     HTMLElement
    private playerViews:   Array<PlayerView>
    private resultDiv:     HTMLElement
    private winner:        HTMLElement

    constructor(game: Game) {
        this.body = document.body

        this.gameDiv = document.createElement('div')
        this.gameDiv.id = 'game-div'

        this.title = document.createElement('h1')
        this.title.id = 'game-title'
        this.title.innerHTML = 'TenPins (or less...)'

        this.inputDiv = document.createElement('div')
        this.inputDiv.id = 'input-div'
        this.currentPlayer = document.createElement('p')
        this.currentPlayer.id = 'current-player'
        this.currentPlayer.innerHTML = "C'est à " + game.getCurrentPlayer().getName() + ' de jouer :'
        this.inputDiv.appendChild(this.currentPlayer)
        this.rollInput = new RollInputView(this.inputDiv)

        this.playerDiv = document.createElement('div')
        this.playerDiv.id = 'player-div'
        this.playerViews = []
        game.getPlayers().forEach( p => {
            this.playerViews.push(new PlayerView(this.playerDiv, p))
        })

        this.winner = document.createElement('p')
        this.winner.id = "config-error-box"
        this.winner.style.background = "green"
        this.winner.style.color = "white"
        this.winner.style.visibility = "hidden"

        this.gameDiv.appendChild(this.title)
        this.gameDiv.appendChild(this.inputDiv)
        this.gameDiv.appendChild(this.playerDiv)
        this.gameDiv.appendChild(this.winner)
        this.body.appendChild(this.gameDiv)
    }

    public update(game: Game) : void {
        for (let i = 0; i < game.getPlayers().length; i++) {
            this.playerViews[i].update(game.getPlayers()[i])
        }
    }

    public displayWinner(game: Game) : void {
        this.winner.innerHTML = game.getWinner().getName() + " a gagné la partie"
        this.winner.style.visibility = "visible"
    }
}

export {GameView}
