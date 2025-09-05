tall = 1

while (tall < 11) {
    console.log(tall)
    tall = tall + 1
}

for (let i = 1; i < 11; i++) {
    console.log(i)
}

let passord = prompt('Lag et passord')
let passord2 = ''
let forsøk = 3

while (forsøk !== 0) {
    passord2 = prompt('Skriv inn passordet for å logge på.')
    if (passord2 === passord) {
        console.log("Det var riktig! Du er nå logget på.")
        break
    } else {
        forsøk = forsøk - 1
        console.log('Det var ikke riktig passord. Du har ' + forsøk + ' forsøk igjen.')
    }
}
if (forsøk === 0) {
    console.log('Du er tom for forsøk. Verden kommer til å eksplodere på grunn av deg.')
}

let opTall = prompt('oddetall eller partall?')

if (opTall === 'oddetall') {
    for (let i = 1; i < 101;) {
        console.log(i);
        i += 2;
    }
    
} else if (opTall === 'partall') {
    for (let i = 2; i < 101;) {
        console.log(i);
        i += 2;
    }
} else {
    console.log('svar enten partall eller oddetall neste gang for å printe ut en liste av tall')
}

for (gangeTall = 1; gangeTall < 11; gangeTall++) {
    for (i = 1; i < 11; i++) {
        document.writeln(i * gangeTall);
    }
    document.writeln('|')
}