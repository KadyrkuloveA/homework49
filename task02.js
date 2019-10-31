let figlet = require("figlet");
let text = process.argv[2];

figlet.text(text, function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});