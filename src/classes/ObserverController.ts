export default class ObserverController {
    private observers: ((data: any) => void)[]

    constructor() {
        this.observers = []
    }

    subscribe(f: ((data: any) => void)) {
        this.observers.push(f)
    }

    unsubscribe(f: ((data: any) => void)) {
        this.observers = this.observers.filter(o => o !== f)
    }

    notify(data: any) {
        this.observers.forEach(o => o(data))
    }
}
