const data_beaches_atm = require('./Beaches_Info_AtTheMoment.json');
const prompt = require("prompt-sync")();




// console.log(data_beaches_atm)

//Prepping Data

for (let i = 0; i < data_beaches_atm.length; i++) {
    data_beaches_atm[i][0][1][1] = parseFloat(data_beaches_atm[i][0][1][1].slice(0, -1))
    data_beaches_atm[i][0][3][1] = Math.round(parseFloat(data_beaches_atm[i][0][3][1]))
    data_beaches_atm[i][0][4][1] = Math.round(parseFloat(data_beaches_atm[i][0][4][1]))
    data_beaches_atm[i][0][5][1] = parseFloat(data_beaches_atm[i][0][5][1].slice(0, -1))

}
// console.log(data_beaches_atm[0][0])

// Defining User Surfing Level
console.log('\n')
const surfing_level = prompt("What is your surfing level? ");
console.log('\n')


// console.log(`Ok, so your level is ${surfing_level}`);


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

let weather_default
let wind_dir_default
let wind_speed_default
let swell_default
let wave_period_default
// let tides_default

if (surfing_level == 'Bath Surfer') {
    weather_default = range(10, 30)
    wind_dir_default = ['N', 'S', 'W', 'E', 'NW', 'SW', 'NE', 'SE']
    wind_speed_default = range(0, 5)
    swell_default = range(0, 2)
    wave_period_default = range(10, 30)
    // tides_default = 'Low'
} else if (surfing_level == "Intermediate") {
    weather_default = range(10, 30)
    wind_dir_default = ['N', 'S', 'W', 'E', 'NW', 'SW', 'NE', 'SE']
    wind_speed_default = range(0, 15)
    swell_default = range(0, 4)
    wave_period_default = range(8, 30)
    // tides_default = 'Low'
} else if (surfing_level == "Pro") {
    weather_default = range(0, 30)
    wind_dir_default = ['N', 'S', 'W', 'E', 'NW', 'SW', 'NE', 'SE']
    wind_speed_default = range(0, 20)
    swell_default = range(0, 10)
    wave_period_default = range(5, 30)
    // tides_default = ['High', 'Low']
} else if (surfing_level == "McNamara") {
    weather_default = range(0, 30)
    wind_dir_default = ['N', 'S', 'W', 'E', 'NW', 'SW', 'NE', 'SE']
    wind_speed_default = range(0, 30)
    swell_default = range(0, 30)
    wave_period_default = range(0, 30)
    // tides_default = ['High', 'Low']
}

surfing_level_data = [weather_default, wind_dir_default, wind_speed_default, swell_default, wave_period_default]


//---------------- CONSTRAINTS

//saving the beaches with the same property values as the user surfing level default properties
let beach_equal_weather = []
let beach_equal_wind_dir = []
let beach_equal_wind_speed = []
let beach_equal_swell = []
let beach_equal_wave_period = []

for (let j = 0; j < data_beaches_atm.length; j++) {
    for (let i = 0; i < surfing_level_data[0].length; i++) {
        if (surfing_level_data[0][i] == data_beaches_atm[j][0][1][1]) {
            beach_equal_weather.push(data_beaches_atm[j][0][0][1])
        }
    }

    for (let i = 0; i < surfing_level_data[1].length; i++) {
        if (surfing_level_data[1][i] == data_beaches_atm[j][0][2][1]) {
            beach_equal_wind_dir.push(data_beaches_atm[j][0][0][1])
        }
    }

    for (let i = 0; i < surfing_level_data[2].length; i++) {
        if (surfing_level_data[2][i] == data_beaches_atm[j][0][3][1]) {
            beach_equal_wind_speed.push(data_beaches_atm[j][0][0][1])
        }
    }

    for (let i = 0; i < surfing_level_data[3].length; i++) {
        if (surfing_level_data[3][i] == data_beaches_atm[j][0][4][1]) {
            beach_equal_swell.push(data_beaches_atm[j][0][0][1])
        }
    }

    for (let i = 0; i < surfing_level_data[4].length; i++) {
        if (surfing_level_data[4][i] == data_beaches_atm[j][0][5][1]) {
            beach_equal_wave_period.push(data_beaches_atm[j][0][0][1])
        }
    }
}


// console.log(beach_equal_weather)
// console.log(beach_equal_wind_dir)
// console.log(beach_equal_wind_speed)
// console.log(beach_equal_swell)
// console.log(beach_equal_wave_period)


let combine_beach_equal_properties = [beach_equal_weather, beach_equal_wind_dir, beach_equal_wind_speed, beach_equal_swell, beach_equal_wave_period]

arrays = combine_beach_equal_properties
var result = arrays.shift().filter(function (v) {
    return arrays.every(function (a) {
        return a.indexOf(v) !== -1;
    });
});



combine_beach_equal_properties = result;

if (combine_beach_equal_properties.length > 0) {
    //eliminate repeated beaches from combine_beach_equal_properties
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    combine_beach_equal_properties = removeDuplicates(combine_beach_equal_properties)
    //


    const machine_constrained_beaches = combine_beach_equal_properties
    const beach_chosen_by_machine = machine_constrained_beaches[Math.floor(Math.random() * machine_constrained_beaches.length)]



    for (let k = 0; k < machine_constrained_beaches.length; k++) {
        if (machine_constrained_beaches[k] == beach_chosen_by_machine) {
            machine_constrained_beaches.splice(k, 1)
        }

    }

    let user_recommended_beach

    console.log(`The recommended beach is: ${beach_chosen_by_machine}. `);
    console.log('\n')
    if (machine_constrained_beaches.length > 0) {
        console.log('What do you think?')
        console.log('\n')
        const answer = prompt('Is there any other you prefer? ')
        console.log('\n')
        if (answer == 'Yes' || answer == 'yes') {

            console.log(`Other options are: ${machine_constrained_beaches} .`);
            const user_recommended_beach_nr1 = prompt('Which one? ')
            console.log('\n')
            for (let h = 0; h < machine_constrained_beaches.length; h++) {
                // console.log(user_recommended_beach_nr1)
                // console.log(machine_constrained_beaches[h])
                // console.log(beach_chosen_by_machine)
                if (machine_constrained_beaches[h] == user_recommended_beach_nr1 && user_recommended_beach_nr1 != beach_chosen_by_machine) {
                    user_recommended_beach = machine_constrained_beaches[h]
                    console.log('Ok, got it!')
                    console.log('\n')

                }


            }





            //---------------- COMPARE urb_with_properties_atm with the other ones from the machine_constrained_beaches, one by one


            let urb_with_properties_atm

            for (let g = 0; g < data_beaches_atm.length; g++) {
                if (data_beaches_atm[g][0][0][1] == user_recommended_beach) {
                    urb_with_properties_atm = data_beaches_atm[g][0]
                }
            }

            for (let k = 0; k < machine_constrained_beaches.length; k++) {
                if (machine_constrained_beaches[k] == user_recommended_beach) {
                    machine_constrained_beaches.splice(k, 1)
                }

            }


            let beach_chosen_by_machine_properties = []
            for (let b = 0; b < data_beaches_atm.length; b++) {
                if (beach_chosen_by_machine == data_beaches_atm[b][0][0][1]) {
                    beach_chosen_by_machine_properties.push(data_beaches_atm[b][0])
                }
            }


            let mcb_with_properties_data = []
            for (let v = 0; v < machine_constrained_beaches.length; v++) {
                for (let b = 0; b < data_beaches_atm.length; b++) {
                    if (machine_constrained_beaches[v] == data_beaches_atm[b][0][0][1]) {
                        mcb_with_properties_data.push(data_beaches_atm[b][0])
                    }
                }
            }


            // TRANSFORM INTO a1b2c1 > a2b1c2 type sequence


            let a1 = []
            let a2 = []
            let b1 = []
            let b2 = []
            let c1 = []
            let c2 = []

            let userSequence = []
            let machineSequence = []

            if (beach_chosen_by_machine_properties[0][1][1] > urb_with_properties_atm[1][1]) {
                c1 = beach_chosen_by_machine_properties[0][1][1]
                c2 = urb_with_properties_atm[1][1]

                userSequence.push(c2)
                machineSequence.push(c1)
            }
            else if (beach_chosen_by_machine_properties[0][1][1] < urb_with_properties_atm[1][1]) {
                c2 = beach_chosen_by_machine_properties[0][1][1]
                c1 = urb_with_properties_atm[1][1]

                userSequence.push(c1)
                machineSequence.push(c2)

            } else {
                console.log('No need to change. Move to next')
                console.log('\n')
            }



            if (beach_chosen_by_machine_properties[0][3][1] > urb_with_properties_atm[3][1]) {
                b1 = beach_chosen_by_machine_properties[0][3][1]
                b2 = urb_with_properties_atm[3][1]

                userSequence.push(b2)
                machineSequence.push(b1)
            }
            else if (beach_chosen_by_machine_properties[0][3][1] < urb_with_properties_atm[3][1]) {
                b2 = beach_chosen_by_machine_properties[0][3][1]
                b1 = urb_with_properties_atm[3][1]

                userSequence.push(b1)
                machineSequence.push(b2)

            } else {
                b1 = urb_with_properties_atm[3][1]
                b2 = urb_with_properties_atm[3][1]

                userSequence.push(b2)
                machineSequence.push(b2)
            }


            if (beach_chosen_by_machine_properties[0][4][1] > urb_with_properties_atm[4][1]) {
                a1 = beach_chosen_by_machine_properties[0][4][1]
                a2 = urb_with_properties_atm[4][1]

                userSequence.push(a2)
                machineSequence.push(a1)
            }
            else if (beach_chosen_by_machine_properties[0][4][1] < urb_with_properties_atm[4][1]) {
                a2 = beach_chosen_by_machine_properties[0][4][1]
                a1 = urb_with_properties_atm[4][1]

                userSequence.push(a1)
                machineSequence.push(a2)

            } else if (urb_with_properties_atm[4][1] > 4) {
                a1 = urb_with_properties_atm[4][1]
                a2 = urb_with_properties_atm[4][1]

                userSequence.push(a1)
                machineSequence.push(a1)
            } else {
                a2 = urb_with_properties_atm[4][1]
                a1 = urb_with_properties_atm[4][1]

                userSequence.push(a2)
                machineSequence.push(a2)
            }

            console.log(a1, a2)
            console.log(b1, b2)
            console.log(c1, c2)

            console.log('user sequence: ' + userSequence)
            console.log('machine sequence :' + machineSequence)


            //---------------- UNIVERSAL ORDER and CP NET

            // To get to the Universal Order the main concept is checking for nodes without children

            // C B A A B C
            // weather wind_speed swell swell wind_speed weather

            //1st question - DO I NEED TO CHANGE THIS? - answered by the lenght of the sequence
            //2nd question - AM I ALLOWED TO CHANGE THIS? - checks the conditions depending on the sequence length


            if (userSequence != machineSequence) {

                if ((userSequence.length == 3) && (machineSequence.length == 3)) {
                    //check conditions and see if it is allowed
                    if (userSequence[0] == c2 && c2 > c1) { //a1b1 c2>c1  swell maior e wind speed menor, tempo quemte
                        console.log(1)
                        if (
                            userSequence[2] == a1 &&
                            machineSequence[2] == a1 &&

                            userSequence[1] == b1 &&
                            machineSequence[1] == b1) {
                            console.log(`Transparently entailed, your recommendation - ${urb_with_properties_atm[0][1]} - is better`)
                            console.log('\n')

                        } else if (userSequence[2] == a1 &&
                            machineSequence[2] == a1 &&

                            userSequence[1] == b2 &&
                            machineSequence[1] == b2) {
                            console.log('Transparently entailed, your recommendation is better')
                            console.log('\n')


                        } else if (userSequence[2] == a2 &&
                            machineSequence[2] == a2 &&

                            userSequence[1] == b2 &&
                            machineSequence[1] == b2) {

                            console.log('Transparently entailed, your recommendation is better')
                            console.log('\n')

                        } else {
                            console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                            console.log('\n')


                        }
                    } else if (userSequence[0] == c1 && c1 > c2) { // a2b1 c1>c2  swell mneor, wind speed menor, tempo frio --> a lot of schools
                        if (
                            userSequence[2] == a2 &&
                            machineSequence[2] == a2 &&

                            userSequence[1] == b1 &&
                            machineSequence[1] == b1) {

                            console.log('Transparently entailed, your recommendation is better')
                            console.log('\n')

                        } else {
                            console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                            console.log('\n')

                        }

                    } else {
                        console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                        console.log('\n')

                    }

                } else if ((userSequence.length == 2) && (machineSequence.length == 2)) {
                    if (userSequence[0] == b2 && b2 < b1) { //a2  b2>b1   se swell menores, wind speed maior é preferivel, so it makes waves bigger
                        if (
                            userSequence[1] == a1 &&
                            machineSequence[1] == a1) {
                            console.log('Transparently entailed, your recommendation is better')
                            console.log('\n')

                        } else {
                            console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                            console.log('\n')

                        }
                    } else if (userSequence[0] == b1 && b1 < b2) { // a1  b1>b2   se swell maiores, wind speed menor, so they dont get out of control
                        if (
                            userSequence[1] == a2 &&
                            machineSequence[1] == a2) {
                            console.log('Entailed, your recommendation is better')
                            console.log('\n')

                        } else {
                            console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                            console.log('\n')

                        }
                    } else {
                        console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                        console.log('\n')

                    }
                } else if ((userSequence.length == 1) && (machineSequence.length == 1)) {
                    if (userSequence[0] == a1 && a1 > a2) { // a1 > a2   swell maior melhor que swell pequena (dentro dos limites do surfing level)
                        console.log('Entailed, your recommendation is better')
                        console.log('\n')

                    }
                    else {
                        console.log(`Not entailed, machine recommended beach is better - ${beach_chosen_by_machine_properties[0][0][1]}`)
                        console.log('\n')

                    }

                } else {
                    console.log('Something is wrong')
                    console.log('\n')

                }
            } else if (userSequence == machineSequence) {
                console.log(`Looks like you'll have a great time with either beaches: ${beach_chosen_by_machine_properties[0][0][1]} or ${user_recommended_beach_nr1}`)
                console.log('Maybe choose the one closest to you')
            }


        } else if (answer == 'No' || answer == 'no') {
            console.log('Goodbye')
            console.log('\n')

        } else {
            console.log('Wrong command')
            console.log('\n')

        }
    } else {
        console.log('There are no more beaches suited to your surfing level.')
        console.log('\n')

    }
} else {
    console.log('The beaches conditions are not suited for your surfing level. Sorry. Try again in a few hours')
    console.log('\n')

}

