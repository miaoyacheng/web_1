class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.pressed_keys = new Set();

        this.start();
    }
    start() {
        let that = this;
        this.$canvas.on('keydown', function (e) {
            that.pressed_keys.add(e.key);
        });
        this.$canvas.on('keyup', function (e) {
            that.pressed_keys.delete(e.key);
        })
    }

}
export {
    Controller
}