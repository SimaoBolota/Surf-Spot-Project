


//SELECTORS
let WEATHER_SELECTOR
let WIND_VELOCITY_SELECTOR
let WIND_DIRECTION_SELECTOR
let SWELL_SELECTOR
let WAVE_PERIOD_SELECTOR

// grabbing the time

var current = new Date();

let time_to_search
let day_period


if (current.getHours() < 7 && current.getHours() > 0) {
    time_to_search = '06h00'
    day_period = 'morning'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(1) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(1) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(1) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(1) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(1) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(2) > strong'


} else if (current.getHours() > 7 && current.getHours() < 9) {
    time_to_search = '09h00'
    day_period = 'morning'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(2) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(2) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(2) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(2) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(2) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(3) > strong'


} else if (current.getHours() > 9 && current.getHours() < 12) {
    time_to_search = '12h00'
    day_period = 'morning'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(3) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(3) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(3) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(3) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(3) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(4) > strong'


} else if (current.getHours() > 12 && current.getHours() < 15) {
    time_to_search = '15h00'
    day_period = 'afternoon'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(4) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(4) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(4) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(4) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(4) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(4) > strong'


} else if (current.getHours() > 15 && current.getHours() < 18) {
    time_to_search = '18h00'
    day_period == 'afternoon'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(5) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(5) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(5) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(5) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(5) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > strong'


} else if (current.getHours() > 18 && current.getHours() < 21) {
    time_to_search = '21h00'
    day_period = 'night'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(6) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(6) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(6) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(6) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(6) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > strong'


} else {
    time_to_search = '24h00'
    day_period = 'night'

    WEATHER_SELECTOR = '#tab-1 > div:nth-child(1) > ul > li:nth-child(7) > small'
    WIND_DIRECTION_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(7) > span'
    WIND_VELOCITY_SELECTOR = '#tab-1 > div:nth-child(2) > ul > li:nth-child(7) > small'
    SWELL_SELECTOR = '#tab-1 > div:nth-child(3) > ul > li:nth-child(7) > small'
    WAVE_PERIOD_SELECTOR = '#tab-1 > div:nth-child(4) > ul > li:nth-child(7) > small'
    TIDE_SELECTOR = '#tab-1 > div:nth-child(5) > div:nth-child(4) > div:nth-child(2) > strong'
}

let weather
let wind_direction
let wind_velocity
let swell
let wave_period
let tides

var data_SPE
var data_G
var data_A
var data_C
var data_B
var data_P
var data_N
var data_SC
var data_AV
var data_LP
var data_PST


jest.setTimeout(5000)

describe('Grabbing Data ...', () => {
    console.log('Grabbing data ...')


    it('Beach: São Pedro do Estoril', async () => {
        console.log('São Pedro do Estoril')
        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-de-sao-pedro-do-estoril/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
       
        data_SPE = {
            "name": 'São Pedro do Estoril',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period

        }
    });

    it('Beach: Guincho', async () => {
        console.log('Guincho')

        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-do-guincho/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        

        data_G = {
            "name": 'Guincho',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period


        }
    });

    it('Beach: Abano', async () => {
        console.log('Abano')

        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-do-abano/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)

        data_A = {
            "name": 'Abano',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period


        }
    });

    it('Beach: Carcavelos', async () => {
        console.log('Carcavelos')

        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-de-carcavelos/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
       
        data_C = {
            "name": 'Carcavelos',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period



        }
    });

    it('Beach: Parede', async () => {
        console.log('Parede')

        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-da-parede//');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)

        data_P = {
            "name": 'Parede',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period



        }
    });

    it('Beach: Bafureira', async () => {
        console.log('Bafureira')

        await page.goto('https://praias.beachcam.pt/pt/praias-lisboa/praia-da-bafureira/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_B = {

            "name": 'Bafureira',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period



        }
    });

    it('Beach: Nazaré', async () => {
        console.log('Nazaré')

        await page.goto('https://praias.beachcam.pt/pt/praias-oeste/praia-do-norte/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_N = {

            "name": 'Nazaré',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period



        }
    });

    it('Beach: Santa Cruz', async () => {
        console.log('Santa Cruz')

        await page.goto('https://praias.beachcam.pt/pt/praias-oeste/praia-do-amanha/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_SC = {

            "name": 'Santa Cruz',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period



        }
    });

    it('Beach: Aveiro', async () => {
        console.log('Aveiro')

        await page.goto('https://praias.beachcam.pt/pt/centro/praia-da-barra/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_AV = {

            "name": 'Aveiro',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period

        }
    });

    it('Beach: Leça da Palmeira', async () => {
        console.log('Leça da Palmeira')

        await page.goto('https://praias.beachcam.pt/pt/norte/praia-de-leca-da-palmeira/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_LP = {

            "name": 'Leça da Palmeira',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period

        }
    });

    it('Beach: Peniche Super Tubes', async () => {
        console.log('Peniche Super Tubes')

        await page.goto('https://praias.beachcam.pt/pt/praias-oeste/praia-de-supertubos/');
        await page.waitForSelector('body > main > section.weatherlist > div.wrapper > div.btn-block > a', { timeout: 5000 });
        await page.click('body > main > section.weatherlist > div.wrapper > div.btn-block > a');

        weather = await page.$eval(WEATHER_SELECTOR, element => element.innerHTML)
        wind_direction = await page.$eval(WIND_DIRECTION_SELECTOR, element => element.innerHTML)
        wind_velocity = await page.$eval(WIND_VELOCITY_SELECTOR, element => element.innerHTML)
        swell = await page.$eval(SWELL_SELECTOR, element => element.innerHTML)
        wave_period = await page.$eval(WAVE_PERIOD_SELECTOR, element => element.innerHTML)
        
        data_PST = {

            "name": 'Peniche Super Tubes',
            "weather": weather,
            "wind direction": wind_direction,
            "wind speed": wind_velocity,
            "swell": swell,
            "wave period": wave_period

        }
    });


});

afterAll(() => {

    const beach_info_SPE = Object.entries(data_SPE);
    const beach_info_G  = Object.entries(data_G);
    const beach_info_A = Object.entries(data_A);
    const beach_info_C = Object.entries(data_C);
    const beach_info_P = Object.entries(data_P);
    const beach_info_B = Object.entries(data_B);
    const beach_info_N = Object.entries(data_N);
    const beach_info_SC = Object.entries(data_SC);
    const beach_info_AV = Object.entries(data_AV);
    const beach_info_LP = Object.entries(data_LP);
    const beach_info_PST = Object.entries(data_PST);

    let data = [
        [beach_info_SPE],
        [beach_info_G],
        [beach_info_A],
        [beach_info_C],
        [beach_info_P],
        [beach_info_B],
        [beach_info_N],
        [beach_info_SC],
        [beach_info_AV],
        [beach_info_LP],
        [beach_info_PST]

    ];
    console.log(data)

    const fs = require('fs');
    const jsonContent = JSON.stringify(data);

    fs.writeFile("./Beaches_Info_AtTheMoment.json", jsonContent, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });

})


