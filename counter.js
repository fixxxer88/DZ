'use strict';

let money = prompt('Your monthly budget?', '');
let time = prompt('Enter date in YYYY-MM-DD format','');
let appData = {
    budget:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses: {},
    income:[],
    savings:false
};
appData.expenses.reason1 = prompt('Your necessary expense need?','');
appData.expenses.amount1 = prompt('how much?','');
appData.expenses.reason2 = prompt('Your necessary expense need?','');
appData.expenses.amount2 = prompt('how much?','');

alert ('your daily budget is '+appData.budget/30);

console.log(appData.expenses.reason1);