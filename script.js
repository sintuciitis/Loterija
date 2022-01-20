const vardi = ['Elza Krūze', 'Sintija Liepa', 'Anete Ozola', 'Mārtiņš Lapsa', 'Kitija Kociņa']  //const - masīvi(nemainīgs)
const balvas = ['Saulesbrilles', 'Dators', 'Ceļojums uz Itāliju', 'Velosipēds', 'Friziera apmeklējums']
const naudaKopa = 1000000;  

let uzvaretajuSkaits = 5;  //let - mainīgie, kuri attiecas uz kādu vienu sadaļu

let rand = Math.random()*5;  //nejauši izvēlēsies 5 uzvarētājus
rand = Math.floor(rand);  //nozīmē, ka apaļo uz leju, lai neivēlētos 3,7 , bet 4
console.log(vardi[rand]);  //izvada datus konsolē