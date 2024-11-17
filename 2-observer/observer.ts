import { WeatherData } from "./subject";

export interface Observer {
    update(): void;
}

export interface DisplayElement {
    display(): void;
}

export class CurrentConditionsDisplay implements Observer, DisplayElement{
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private weatherData: WeatherData;

    constructor(subject: WeatherData){
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.weatherData = subject;
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature} degrees, ${this.humidity}% humidity, and ${this.pressure} hPa pressure`);
    }
    
}

export class StatisticsDisplay implements Observer, DisplayElement{
    private temperatures: number[];
    private humidities: number[];
    private pressures: number[];
    private weatherData: WeatherData;

    constructor(subject: WeatherData){
        this.temperatures = [];
        this.humidities = [];
        this.pressures = [];
        this.weatherData = subject;
    }

    update(): void {
        this.temperatures.push(this.weatherData.getTemperature());
        this.humidities.push(this.weatherData.getHumidity());
        this.pressures.push(this.weatherData.getPressure());
        this.display();
    }

    display(): void {
        const avgTemperature = this.calculateAverage(this.temperatures);
        const avgHumidity = this.calculateAverage(this.humidities);
        const avgPressure = this.calculateAverage(this.pressures);
        console.log(`Average: ${avgTemperature} degrees, ${avgHumidity}% humidity, and ${avgPressure} hPa pressure`);
    }

    private calculateAverage(array: number[]): number {
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
}

export class TemperatureWidget implements Observer, DisplayElement{
    private temperature: number;
    private weatherData: WeatherData;

    constructor(subject: WeatherData){
        this.temperature = 0;
        this.weatherData = subject;
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.display();
    }

    display(): void {
        console.log(`Current temperature is ${this.temperature} degrees`);
    }
}


