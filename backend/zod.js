const z = require("zod")
const { card } = require("./db")


const cardSchema = z.object({
    name: z.string(),
    description : z.string(),
    interests: z.array(z.string()),
    socials: z.array(z.string())
})
const cardUpdate = z.object({
    id: z.string()
})

module.exports ={
    cardSchema : cardSchema,
    cardUpdate : cardUpdate
}