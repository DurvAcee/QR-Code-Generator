import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        "type": 'input',
        "message": "Type in URL: ",
        "name": "URL",
    },
])
.then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'))
})
.catch((error) => {
    if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
    } else {
        console.error("Something else went wrong", error);
    }
});