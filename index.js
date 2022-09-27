var allStudent = [];
 if(localStorage.aboutStudent){
   allStudent = JSON.parse(localStorage.getItem('aboutStudent'))
 }
var matricNo = 'SQI ' + Math.round(Math.random()*10000000);
var date = new Date();
function addStudent(){
  var studentInfo = {firstName:firstname.value, lastName:lastname.value, userEmail:email.value, userName:username.value, userPassword:password.value};
  if((firstname.value == '') || (lastname.value == '') || (email.value == '') || (username.value == '') || (password.value == '') ){
    alert('Complete your details')
    // window.location.href != "index .html";
    
  }
  else if((firstname.value) && (lastname.value) && (email.value) && (username.value) && (password.value)){
    allStudent.push(studentInfo);
    console.log(allStudent);
    localStorage.setItem('aboutStudent',  JSON.stringify(allStudent));
    // window.location.href = "index .html";
  }
  else  {
    allStudent.push(studentInfo);
    // window.location.href = "index .html";
  }
  firstname.value = ""
  lastname.value = ""
  email.value = ""
  username.value = ""
  password.value = ""
  
  
}
function search(){
  window.location.href = "index .html";
}


function userDetail(){

  if(seArch.value == ""){
    board.innerText = 'Please enter an index';
    board.style.fontFamily = 'cursive';
    board.style.backgroundColor = 'Red';
  }
  else{
  studentFirstName.innerText = 'First-Name : ' + allStudent[seArch.value].firstName;
  studentLastName.innerText = 'Last-Name : ' + allStudent[seArch.value].lastName;
  studentEmail.innerText = 'E-mail : ' + allStudent[seArch.value].userEmail;
  studentUserName.innerText = 'Username : ' + allStudent[seArch.value].userName;
  studentMaricNo.innerText = 'Matric no👉: ' + matricNo;
  studentEntryDate.innerText = 'Date : ' + date;
  board.style.backgroundColor = 'Purple';
  }
 
}
function viewStudent(){
  window.location.href =   "admin.html"
}
function studentTable(){
  if(adminPassword.value == 'habib'){
    window.location.href = "allstudent.html"
  }
  else{
    alert('Incorrect Password')
  }
}

for (let index = 0; index <= allStudent.length; index ++ ){
  studentList.innerHTML += `
  <tr>
    <td> ${index+1} </td>
    <td> ${allStudent[index].firstName} </td>
    <td> ${allStudent[index].lastName} </td>
    <td> ${allStudent[index].userEmail} </td>
    <td> ${allStudent[index].userName} </td>
    <td> ${allStudent[index].userPassword} </td>
    <td> 
        <button class="btn btn-warning w-100" onclick="editStudent()">Edit</button> 
        <button class="btn btn-danger w-100 ">Delete</button> 
    </td>
  </tr>   
        `
}



// function logIn(){
//   let correct  = false;

//   for(let i = 0; i < allStudent.length; i++){
//     if(loginEmail.value == allStudent[i].userEmail && loginPassword.value == allStudent[i].userPassword){
//       correct = true;
//     }
//   }
//   if(correct){
//     disp.innerHTML = `<div class="alert alert-warning w-25 m-auto">User found</div>`
//   }
//   else{
//     disp.innerHTML = `<div class="alert alert-warning w-25 m-auto">Check your details</div>`
//   }

//   // console.log(allStudent[3].userEmail)
// }

