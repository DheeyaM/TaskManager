//creating the server
import express from 'express';
const app = express();

//uses the given port number or 8000
const port = process.env.PORT || 8080;

//Converting json requests to javascript
app.use(express.json());

//creates a route that responds to a GET request
app.get('/', (req, res) => {
    //sends a json response with a message
     res.json({msg: `Server is running`});
})

//starts the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

let tasks = [{
    id:1,
    title: "Task 1:",
    completed: false
}];

app.get('/tasks', (req, res) => {
    res.status(201).json(tasks);
})


