import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is color separator, not implemented');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});
