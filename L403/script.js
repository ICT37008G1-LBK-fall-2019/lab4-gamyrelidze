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
function difNames(list,firstName){
    let diflist={};
    for(let i=0; i< list.length; i++){
        let key = list[i].name;
        diflist[key]=0;
    }
    return Object.keys(diflist);
}
console.log(difNames(students));