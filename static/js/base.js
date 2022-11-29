import { Kyo } from "/static/js/player/kyo.js"
import { GameMap } from "/static/js/game_map/base.js"

class KOF {
    constructor(id) {
        //this.id = id;
        this.$kof = $('#' + id);
        this.game_map = new GameMap(this);//对选中的该id进行操作
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue'
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            })

        ];
    }

}

export {
    KOF,
}