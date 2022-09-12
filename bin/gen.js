#!/usr/bin/env node

const path = require("path");
const fsx = require("fs-extra");

const args = process.argv.slice(2);

const txt_Files = path.join(process.cwd(), args[0]); //directory name
const base_name = 000;
const file_count = parseInt(args[1]); // number of files you want to create
let start_index = 0;

const createTxtFiles = async () => {
    // check if directory exists
    try {
        await fsx.ensureDir(txt_Files);
        console.log("File exists / File Created");
    } catch (err) {
        console.log(err);
    }
    // make text files
    for (i = 1; i <= file_count; i++) {
        start_index = base_name + i;
        try {
            await fsx.createFile(`${txt_Files}/${start_index}.txt`);
        } catch (err) {
            console.log(err);
        }
    }
    console.log("Loop ended");
};

createTxtFiles()
