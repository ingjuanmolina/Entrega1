//Array of available courses
let courses = [
    {
        id: 1,
        name: 'Maestría en gestión de riesgo y medio ambiente',
        semesters: 4,
        price: 400000
    },

    {
        id: 2,
        name: 'Especialización en seguridad de la información',
        semesters: 2,
        price: 200000
    },

    {
        id: 3,
        name: 'Especialización en tratamiento, valoración y gestión de residuos sólidos',
        semesters: 6,
        price: 600000
    },

    {
        id: 4,
        name: 'Ingeniería ambiental',
        semesters: 10,
        price: 1000000
    },

    {
        id: 55,
        name: 'Ingeniería de software',
        semesters: 10,
        price: 1500000
    }
];

//Function to print all courses info in console
let printCourse = (index, delay, callback) => {
    setTimeout( function(){
        let course = courses[index];
        let message = `(${course.id}) El curso ${course.name} tiene una duración de ${course.semesters} semestres y un valor de ${course.price}`
        callback(message);
    },delay);
}//End of printCourse

function showAllCourses(){
    for (let i = 0; i < courses.length; i++) {
        printCourse(i, 1000 * (i+1), 
            function(message){console.log(message)}
            );
    }
};//End of show courses

function getCourseById(id){
    let targetCourse = courses.find(course => course.id == id);
    return targetCourse;
}

module.exports = {
    getCourseById,
    showAllCourses
}