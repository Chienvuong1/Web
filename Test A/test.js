let A1 = [1,2,4,"a","b"];
let A2 = [1,3,5,"a","c"];
let A3 = [];
for(let i=0 ; i<A1.length; i++){
    let check = false;
    for(let j=0; j<A2.length; j++){
      if(A1[i]===A2[j]) {
        check = true;
      }
    }
    if(!check){
      A3.push(A1[i]);
    }
}
for(let i=0 ; i<A2.length; i++){
    let check = false;
    for(let j=0; j<A1.length; j++){
      if(A2[i]===A1[j]) {
        check = true;
      }
    }
    if(!check){
      A3.push(A2[i]);
    }
}
console.log(A3);




let a=[
   {
       name:"Chelsea",
       points:75,
       GD:45,
   },
   {
       name:"Arcenal",
       points:75,
       GD:45,
   },
   {
       name:"Manchester United",
       points:60,
       GD:29
   },
   {
       name:"Liverpool",
       points:60,
       GD:39
   }
];

a.sort(function(a,b){
    if(a.points===b.points && a.GD === b.GD){
        return a.name.localeCompare(b.name);
    }
    else if(a.points===b.points){
        return b.GD-a.GD;
    }
    else return b.points-a.points; 
   
})
for(let i=0 ; i<a.length ; i++){
    a[i].position = i + 1;
}
console.log(a);