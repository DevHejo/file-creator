#!/usr/bin/env node

const path = require("path");
const fsx = require("fs-extra");

const args = process.argv.slice(2);

const txt_Files = path.join(process.cwd(), args.pop()); //directory name

const deleteDriectory = async () => {
    try {
        await fsx.remove(txt_Files);
        console.log("Files or folders removed");
    } catch (err) {
        console.log(err);
    }
};

deleteDriectory();
