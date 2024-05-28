const log = console.log;
const globalVars = require('./../gameVariables.js');

module.exports.game_create = async (req, res) => {
    globalVars.tableroPlayer1 = null;
    globalVars.tableroPlayer2 = null;

    globalVars.playerStart = 0;
    globalVars.gameState = globalVars.SETTING;


    return res.status(200).json({code: 200, msg: "A new game has been settled."});
}


module.exports.game_resume = async (req, res) => {
    return res.status(200).json({
        code: 200, 
        tableroPlayer1: globalVars.tableroPlayer1,
        tableroPlayer2: globalVars.tableroPlayer2,
        playerStart: globalVars.playerStart,
        gameState: globalVars.gameState
    });
}

module.exports.game_status = async (req, res) => {
    return res.status(200).json({
        code: 200, 
        status: globalVars.gameState
    });
}

module.exports.game_cPlayer = async (req,res) => {
    if (globalVars.gameState !== globalVars.SETTING) {
        return res.status(400).send({ error: 'Cannot set ships after the game has started' });
      }
    
      const playerNumber = parseInt(req.params.player);
      const player = players.find(p => p.number === playerNumber);
      
      if (!player) {
        return res.status(404).send({ error: 'Player not found' });
      }
    
      const ships = req.body.ships;
      if (!validateShips(ships)) {
        return res.status(400).send({ error: 'Invalid ship configuration' });
      }
    
      player.ships = ships;
      placeShipsOnMap(player.map, ships);
    
      game.playersReady++;
      if (game.playersReady === 2) {
        game.state = globalVars.PLAYING;
      }
    
      res.send({ message: `Player ${playerNumber} ships set` });
}

module.exports.game_turn = async (req, res) => {
    if (globalVars.gameStatex !== globalVars.PLAYING) {
        return res.status(400).send({ error: 'Game is not in playing state' });
      }
    
      const { x, y } = req.body;
      const opponent = players.find(p => p.number !== currentPlayer);
    
      if (!isValidCoordinate(x, y)) {
        return res.status(400).send({ error: 'Invalid coordinates' });
      }
    
      const hit = opponent.map[x][y];
      if (hit === null) {
        opponent.map[x][y] = 'miss';
        currentPlayer = opponent.number;
        res.send({ result: 'miss' });
      } else if (hit === 'ship') {
        opponent.map[x][y] = 'hit';
        opponent.hits++;
    
        if (opponent.hits === totalShipCells()) {
          game.state = globalVars.FINISHED;
          res.send({ result: 'hit', gameState: 'finished', winner: currentPlayer });
        } else {
          res.send({ result: 'hit' });
        }
      } else {
        res.send({ result: 'already attacked' });
      }
}