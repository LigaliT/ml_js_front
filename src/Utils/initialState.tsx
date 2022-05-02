import {IState} from "./utils";

export const initialState:IState = {
    ph: 0,
    Hardness: 0,
    Solids: 0,
    Chloramines: 0,
    Sulfate: 0,
    Conductivity: 0,
    Organic_carbon: 0,
    Trihalomethanes: 0,
    Turbidity: 0
};

export const potableWater:IState = {
    ph: 7.082,
    Hardness: 169.468,
    Solids: 29846.719,
    Chloramines: 5.443,
    Sulfate: 350.401,
    Conductivity: 353.030,
    Organic_carbon: 18.959,
    Trihalomethanes: 30.389,
    Turbidity: 3.485,
}

export const russianWaterCharacteristic = [
    'Показатель кислотности',
    'Твердость',
    'Количество растворенных твердых веществ',
    'Хлорамины',
    'Сульфат',
    'Проводимость',
    'Общий органический углерод',
    'Тригалометаны',
    'Мутность',
]