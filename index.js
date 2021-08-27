const config = require("dotenv").config().parsed,
    { Interaction, InteractionHandler, Embed, Option } = require("./lib/interactions"),
    fs = require("fs")

const handler = new InteractionHandler(config.TOKEN,"592814450084675594")
const commands = fs.readdirSync("./commands").map(f => require(`./commands/${f}`)) 

commands.forEach(c => handler.handle(c))

if(process.argv[2]) {
    const id = process.argv[2] == "global" ? null : process.argv[2]
    commands.forEach(c => c.addToDiscord(id))
}

