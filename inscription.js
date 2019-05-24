//Set express config

const express = require('express')
const app = express() 

//Object to manage filesystem functions
let fs = require('fs');

//Object to manage courses
let courseManager = require('./courses');

//Function to write a new file

function savedata (id, studentName, studentDNI){

    let course = courseManager.getCourseById(id);//get a course objetc from it`s id

    if (course != undefined) {
        //if course exists, writes text to a file
        let text =
`El estudiante ${studentName} con cédula ${studentDNI} 
se ha matriculado en el curso llamado ${course.name}, 
que tiene una duración de ${course.semesters} semestres 
y un valor de ${course.price} pesos`;

app.get('/', function (req, res) {

    res.send(text)
  })
   
  app.listen(3000)
        fs.writeFile('Matricula.txt', text, (err) => {
            if (err) throw (err);
            console.log('El estudiante se ha registrado correctamente en el curso y los datos se han almacenado en el documento Matricula.txt.');
        });
    } else {
        //if course doesn`t exist, prints a full list of courses
        console.log('No existe un curso con id = ' + id + '\n');
        console.log('-------------Listado oficial de cursos-------------\n')
        courseManager.showAllCourses();
    }
}//End of savedata

module.exports = { savedata };