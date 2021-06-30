function submit(){
    var display_people_array =[];
    for (var j=1; j<=4; j++){
        var name_of_the_people = document.getElementById("name_of_the_people"+j).value;
        console.log(name_of_the_people);
        name_of_the_people_array.push(name_of_the_people);
    }
    console.log(name_of_the_people_array);

    var length_of_the_people_array=name_of_the_people_array.length;
    console.log(length_of_the_people_array);

    for (var k=0; k< length_of_the_people_array; k++){
        display_people_array.push("<h4>Name - "+name_of_the_people_array[k]+"</h4>");
        console.log(display_people_array);
    }
    var remove_commas =display_people_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_buton").style.display="inline-block";
}
function sorting(){
    name_of_the_people_array.sort();
    console.log(name_of_the_people_array);

    var display_people_array_sorting=[];

    var length_of_the_people_array=name_of_the_people_array.length;
    console.log(length_of_the_people_array);

    for (var k=0; k<length_of_the_people_array; k++){
        display_people_sorting.push("<h4>Name - "+name_of_the_people_array[k]+"</h4>");
        console.log(display_people_sorting);
    }

    var remove_commas =display_people_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
}
function searching(){
    var s= document.getElementById("p2").innerHTML="nmae found "+found+" time/s";
    var found=0;
    var j;
    for(j=0; j<nmaes_of_people[j]){
        found=found+1;

    if(s==nmaes_of_people[j]){
        found=found+1;
    }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}
    