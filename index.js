const path = require("path");

const fsx = require("fs-extra");

const txt_Files = path.join(__dirname, "text"); //directory name

async () => {
    try {
        await fsx.ensureDir(txt_Files);
        console.log("File exists / File Created");
    } catch (err) {
        console.log(err);
    }
};

const base_name = 000;
const file_count = 46; // number of files you want to create
let start_index = 0;

const createTxtFiles = async () => {
    for (i = 0; i <= file_count; i++) {
        start_index = base_name + i;
        try {
            await fsx.createFile(`${txt_Files}/${start_index}.txt`)
        } catch (err) {
            console.log(err);
        }
    }
    console.log("Loop ended");
};

createTxtFiles();
