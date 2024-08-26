import express from "express"
import axios from "axios"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const catFact = await axios.get("https://catfact.ninja/fact");
    const catPic = await axios.get("https://api.thecatapi.com/v1/images/search");
    const randomNumber = Math.floor(Math.random()*1000);
    res.render("index.ejs", { 
        fact: catFact.data.fact, 
        random: randomNumber,
        picURL: catPic.data[0].url });
});

app.post("/reload", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

