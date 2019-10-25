let students =[
    {id:1, name: 'daviti'},
    {id:2, name: 'tatia'},
    {id:3, name: 'daviti'},
    {id:4, name: 'tatia'},
    {id:8, name: 'daviti'},
    {id:9, name: 'elene'},
    {id:11, name: 'giorgi'},
    {id:19, name: 'salome'},
];
function countByName(list,name){
    let count=0;
    for(let i=0; i<list.length; i++){
       if(list[i].name==name)
        count++;
    }
    return count;
}

let name1 ='daviti';
let name2 ='tatia';
console.log(countByName(students, name1));
console.log(countByName(students, name2));