const fsPromises = require("fs").promises;
const path = require("path");

const txt_Files = path.join(__dirname, "/text");

const base_name = 000;
const file_count = 46; // number of files you want to create
let start_index = 0;

const createTxtFiles = async () => {
    for (i = 0; i <= file_count; i++) {
        start_index = base_name + i;
        await fsPromises
            .writeFile(`${txt_Files}/${start_index}.txt`, "")
            .catch((err) => {
                console.log(err);
            });
    }
    console.log("Loop ended");
};

createTxtFiles();
