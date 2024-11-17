import { StatisticsDisplay, CurrentConditionsDisplay, TemperatureWidget } from "./observer";
import { WeatherData } from "./subject";

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const temperatureWidget = new TemperatureWidget(weatherData);

weatherData.registerObserver(currentConditionsDisplay);
weatherData.registerObserver(statisticsDisplay);

weatherData.setMeasurements(25, 65, 1013);
weatherData.setMeasurements(26, 64, 1012);
weatherData.registerObserver(temperatureWidget);
weatherData.setMeasurements(27, 63, 1011);
weatherData.removeObserver(statisticsDisplay);
weatherData.setMeasurements(28, 62, 1010);