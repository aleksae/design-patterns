import { Observer } from "./observer";

export interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export class WeatherData implements Subject {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private observers: Observer[];

    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            observer.update();
        });
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }
}
