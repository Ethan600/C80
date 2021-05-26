var name_of_the_students= [];

function submit(){
  var display_student_names=[];
  for( j=1; j<=4; j++ ){
      var student_name=document.getElementById("name_of_the_student_"+j).value;
      console.log(student_name);
      name_of_the_students.push(student_name);
  }
  console.log(name_of_the_students);
  var length_of_array= name_of_the_students.length;
  console.log(length_of_array);
  for ( k=0; k < length_of_array; k++){
    display_student_names.push("<h4> Name -"+name_of_the_students[k]+"</h4>")
  }
  console.log(display_student_names);
  document.getElementById("display_name_with_commas").innerHTML=display_student_names;
  var remove_commas=display_student_names.join(" ");
  console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML=remove_commas;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
name_of_the_students.sort();
console.log(name_of_the_students);
var display_sorted_names= [];
var length_of_first_array= name_of_the_students.length;
console.log(length_of_first_array);
for (d=0; d < length_of_first_array; d++){
 display_sorted_names.push("<h4> Name - "+name_of_the_students[d]+"</h4>");
}
var remove_commas_in_sort_function=display_sorted_names.join(" ");
console.log(remove_commas_in_sort_function);
document.getElementById("display_name_without_commas").innerHTML=remove_commas_in_sort_function;
}

function update(){
document.getElementById("display_name_without_commas").innerHTML="<h1>" + name_of_the_students + "</h1>";
} 