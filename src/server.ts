import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to Color Separator API, you may want to look back at https://github.com/hicks2evan/color-separator to download a postman collection.');
});

app.listen(process.env.PORT || 3001, ()=> {
});
