import { Request, Router, Response } from "express";
import { User } from "./models/userModel";
import jwt from "jsonwebtoken"
import "dotenv/config";

const userRouter = Router();

userRouter.post("/auth", async (req: Request, res: Response) => {
    const user = new User(req.body);

    try {
        await user.save();
        const accessToken = jwt.sign(
            user.toObject(),
            process.env.ACCESS_TOKEN_SECRET!
          );
          res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error hai');
    }
});

userRouter.get('/users',async (req:Request, res:Response) => {
    try {
        const users=await User.find({});
        res.send(users);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

})

userRouter.get("/user", async (req: Request, res: Response) => {
    try {
        const data = jwt.verify(req.headers.authorization!, process.env.ACCESS_TOKEN_SECRET!);
        if (!data || typeof data !== 'object' || !data.email) {
            return res.status(401).send("Invalid token format or missing email.");
        }

        const user = await User.find({ email: data.email });
        res.send(user);
    } catch (err) {
        console.log(err);
    }
});

userRouter.get("/messages", async(req:Request, res:Response)=>{
    const {sender, receiver} = req.query;
    console.log(sender, receiver)
    const user = await User.find({email:receiver});
    const filteredUser = user[0]?.messages?.filter((message: any) => message.sender === sender && message.receiver === receiver || message.sender === receiver && message.receiver === sender);
    console.log(filteredUser)
    res.send(filteredUser);
})


export default userRouter; 