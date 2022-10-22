function inArray(val, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (val == arr[i]) {
            return true;
        }
    }
    return false;
}

class Cursor {

    constructor(row, col) {
        // a cursor has a position and a single
        // instance of the element in HTML.
        this.row = row;
        this.col = col;

        this.element = document.createElement("span");
        this.element.createAttribute("id");
        this.element.setAttribute("id", "cursor");
    }

    move(deltaR, deltaC) {
        this.row = row + deltaR;
        this.col = col + deltaC;
    }

    genMoveKeys() {
        moveKeys = new Map();
        moveKeys.set(["ArrowUp", "k"], this.move(-1, 0));
        moveKeys.set(["ArrowDown", "j"], this.move(1, 0));
        moveKeys.set(["ArrowLeft", "h"], this.move(0, -1));
        moveKeys.set(["ArrowRight", "l"], this.move(0, 1));

        return moveKeys;
    }

    findEventFunc(ev, evMap) {
        return evMap.forEach((value, key) => {inArray(ev, key) ? value : null});
    }


    listen(event) {
        let evKey = event.key;
        this.findEventFunc(evKey, this.genMoveKeys());


        this.update();
    }
}

