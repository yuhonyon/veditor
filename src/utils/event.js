class EventTarget {
    constructor() {
        this.emitter = [];
    }
    emit(eventName,...params) {
        if (this.emitter[eventName]) {
            for (let i = 0; i < this.emitter[eventName].length; i++) {
                this.emitter[eventName][i](...params);
            }
        }

        if (this.options&&this.options[eventName]) {
            this.options[eventName](...params);
        }
    }
    on(eventName, handler) {
        if (!this.emitter[eventName]) this.emitter[eventName] = [];
        this.emitter[eventName].push(handler);
        return this;
    }
    off(eventName, handler) {
        if (typeof handler === 'undefined') {
            this.emitter[eventName] = [];
            return this;
        }
        if (!this.emitter[eventName] || this.emitter[eventName].length === 0) return;
        for (let i = 0; i < this.emitter[eventName].length; i++) {
            if (this.emitter[eventName][i] === handler) this.emitter[eventName].splice(i, 1);
        }
        return this;
    }
    one(eventName, handler) {
        let _handler = (...params) => {
            handler(...params);
            this.off(eventName, _handler);
        };
        this.on(eventName, _handler);
        return this;
    }
}
