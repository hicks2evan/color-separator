import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is color separator, not implemented');
});

app.listen(process.env.PORT || 3001, ()=> {
});
