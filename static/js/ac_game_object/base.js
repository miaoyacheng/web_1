let AC_GAME_OBJECTS = [];
class AcGameObject {
    constructor() {
        this.timedelta = 0;
        this.has_called_start = false;
        AC_GAME_OBJECTS.push(this);//加入一个实例对象
    }
    start() {

    }
    update() {

    }
    destroy() {//删掉该对象
        for (let i = 0; i < AC_GAME_OBJECTS.length; i++) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;
let AC_GAME_ANIMATION = (timestamp) => {//该函数为回调函数，必须传入一个参数timestamp，表示该函数执行的时间
    for (let obj of AC_GAME_OBJECTS) {
        if (obj.has_called_start === false) {
            obj.has_called_start = true;
            obj.start();
        }
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);

export {
    AcGameObject
}