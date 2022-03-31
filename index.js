  const express = require('express');
  const app = express();
  app.use(express.json());


  //array 
  const students=[ 
      { "firstName": "John", "age": 27}, 
      { "firstName": "James", "age": 32 }, 
      { "firstName": "Robert","age": 45 }
    ];


//get requests
  app.get('/',(req,res)=>{
        res.send('Hello World');
    });
  app.get('/api/students',(req,res)=>{
    res.send(students)
  });
  app.get('/api/students/:firstName',(req,res)=>{
    const child = students.find(c => c.firstName.toUpperCase() === req.params.firstName.toUpperCase);
    if(!child) res.status(404).send('The course with the given id not found');
    res.send(child);
  });

  //post request
  app.post('/api/students',(req,res) => {
      const child = {
          firstName:req.body.firstName,
          age:req.body.age
      };
      students.push(child);
      res.send(child);
  });

//put request
app.put('/api/students/:firstName',(req,res)=>{
    const child = students.find(c => c.firstName === req.params.firstName);
    if(!child) res.status(404).send('The course with the given id not found');
  
    child.firstName = req.body.firstName;
    child.age = req.body.age;
    res.send(child);
  // students.push(result);
  });

  //Delete Request
  app.delete('/api/students/:firstName',(req,res)=>{
    const child = students.findIndex(c => c.firstName === req.params.firstName);
    if(!child) res.status(404).send('The course with the given id not found');

    const result = students.splice(child,1);
    res.send(result);
  });

 //port
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening to the port ${port}...`));














