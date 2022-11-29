import { AcGameObject } from "../ac_game_object/base.js";
import { Controller } from "/static/js/controller/base.js"

class GameMap extends AcGameObject {
    constructor(root) {//只有一个#id有用
        super();
        this.root = root;
        //布置画布
        this.$canvas = $('<canvas tabindex=0 width=1280 height=720></canvas>');
        //获取画布内容，方便进行操作
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div><div></div></div></div>
        </div>`
        ));

        this.time_left = 60000;
        this.$timer = this.root.$kof.find(".kof-head-timer");

    }
    start() {
    }
    update() {
        this.time_left -= this.timedelta;
        if (this.time_left < 0) {
            this.time_left = 0;
            let [a, b] = this.root.players;
            if (a.status !== 6 && b.status !== 6) {
                a.status = b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
                a.vx = b.vx = 0;
            }
        }
        this.$timer.text(parseInt(this.time_left / 1000));
        this.render();
    }
    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}



export {
    GameMap
}
