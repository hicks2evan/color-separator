import express, { Express, Request, Response } from 'express';
import fs from 'fs';
import os from 'os';
import formData from 'express-form-data';
import { separate } from './separation/separation.js';
import { Image } from 'image-js';

const app: Express = express();

/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
 */
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

// parse data with connect-multiparty.
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream
app.use(formData.stream());
// union the body and the files
app.use(formData.union());

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send(
    "Welcome to Color Separator API, you may want to look back at https://github.com/hicks2evan/color-separator to see example CURL requests."
  );
});

app.post("/separate", async (req: Request, res: Response) => {
  const colors = JSON.parse(req.body["colors"]);
  const imagePath = req.body["image"]["path"];
  const image = await Image.load(fs.readFileSync(imagePath));

  const separations = separate(image, colors);

  const names = [];
  for (const separation of separations) {
    const name = fs.mkdtempSync('separation') + '.png'; 
    await separation.save(name);
    names.push(name);
  }
  res.json(names);
});

app.get("/file/:fileName", (req: Request, res: Response) => {
    res.sendFile(req.params['fileName'], { root: '.' });
});

app.listen(process.env.PORT || 3001, () => {});
