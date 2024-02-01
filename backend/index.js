const express = require("express")
const cors  = require("cors")
const app = express()
const { card,Admin } = require("./db");
const {cardSchema,cardUpdate} = require("./zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "password"


app.use(cors());
 
app.use(express.json());
app.use(function(req,res,next){
    const username = req.headers.username; // harkirat@gmail.com
    const password = req.headers.password; /// 123456

    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
        }
    })
    // const token = req.headers.authorization; // bearer token
    // const words = token.split(" "); // ["Bearer", "token"]
    // const jwtToken = words[1]; // token
    // try {
    //     const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    //     if (decodedValue.username) {
    //         next();
    //     } else {
    //         res.status(403).json({
    //             msg: "You are not authenticated"
    //         })
    //     }
    // } catch(e) {
    //     res.json({
    //         msg: "Incorrect inputs"
    //     })
    // }
})


app.post("/cards",async function(req,res){
    
    const cardPayload = req.body;
    console.log("Received card payload:", cardPayload);
    const parserPayload = cardSchema.safeParse(cardPayload)
    console.log("Parsed payload:", parserPayload);
    if (!parserPayload.success) {
        res.status(411).json({
            msg: "you send the worong inputs"
        })

        return;
    }
await card.create({
    name:cardPayload.name,
    description: cardPayload.description,
    interests: cardPayload.interests,
    socials: cardPayload.socials
})
res.status(500).json({
msg: "card created on db."
})
})

app.get("/cards",async function(req,res){
const cards = await card.find({})
res.json({
    cards
})

})

app.put("/update",async function(req,res){
//update means you can perform updating soccials and interest like adding interest or something. you could do that later
})

app.delete("/remove",async function(req,res){
    const cardPayload = req.body;
    const parserPayload = cardUpdate.safeParse(cardPayload)

    if(!parserPayload.success){
        res.status(511).json({
            msg: " you enter wrong inputs."
        })
        return;
    }

    await card.deleteOne({
        _id: req.body.id
    });

    res.json({
        msg: "card has been deleted"
    })
})

app.listen(3000);
