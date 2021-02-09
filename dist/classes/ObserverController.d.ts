export default class ObserverController {
    private observers;
    constructor();
    subscribe(f: ((data: any) => void)): void;
    unsubscribe(f: ((data: any) => void)): void;
    notify(data: any): void;
}
