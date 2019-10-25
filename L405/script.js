let students =[
    {id:1, name: 'daviti', gpa:2.1},
    {id:2, name: 'tatia', gpa:2.6},
    {id:3, name: 'daviti', gpa:2.3},
    {id:4, name: 'tatia', gpa:1.1},
    {id:8, name: 'daviti', gpa:3.6},
    {id:9, name: 'elene', gpa:3.1},
    {id:11, name: 'giorgi', gpa:2.9},
    {id:19, name: 'salome', gpa:3.9},
];
function averageGpa(list,compGpa =2){
    let gpaSum = 0;
    let gpaCount = 0;
    let average;

    for(let i =0;i <list.length; i++ ){
        if(list[i].gpa >= compGpa){
            gpaSum += list[i].gpa;
            gpaCount ++;
        }
    }
    return gpaSum/gpaCount;
}
console.log(averageGpa(students,3));
