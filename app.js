// Get element
const Student_form = document.getElementById('Student_form');



Student_form.addEventListener('submit', function(e){
    e.preventDefault();

    alert('worked');


    let name = Student_form.querySelector("input[placeholder='Student Name']");
    let roll = Student_form.querySelector("input[placeholder='Roll number']");
    let student_class = Student_form.querySelector("input[placeholder='class']");
    let photo = Student_form.querySelector("input[placeholder='Photo']");
    let gender = Student_form.querySelector("input[type='radio']cheked");
    let ban = Student_form.querySelector("input[placeholder='Bangla']");
    let eng = Student_form.querySelector("input[placeholder='English']");
    let math = Student_form.querySelector("input[placeholder='Math']");
    let sci = Student_form.querySelector("input[placeholder='Science']");
    let ss = Student_form.querySelector("input[placeholder='Social Science']");
    let reli = Student_form.querySelector("input[placeholder='Religion']");


    if(name.value == '' || roll.value == '' || student_class.value == '' ){
        alert('All Files Are Required');

    }else{
        console.log('Done');
    }

    console.log(name.value)
    console.log(roll.value)
    console.log(student_class.value)


});