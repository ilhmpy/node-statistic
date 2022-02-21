const express = require("express");
const cors = require("cors");
const File = require("fs");

const app = express();

app.use(cors());

app.post('/', (req, res) => {
    File.readFileSync("count.txt", "utf8", (err, count) => {
        if (err) {
            return;
        };

        console.log(count++);

        File.writeFileSync("count.txt", (count++).toString(), (e) => {
            if (!e) {
                res.json({ 
                    answer: "hello"
                });
            }
        });
    });
});

app.get("/", (req, res) => {
    File.readFileSync("count.txt", "utf8", (err, count) => {
        if (err) {
            return;
        };

        res.json({ count });
    });
});

app.listen(7000, () => console.log("Server starting at http://localhost:7000"));