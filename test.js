// const arr = [2,3,4,5,6,7,8,9,10];
// const sow = arr.filter((value) => {
//    return value % 2 === 0;
// })
// console.log(sow);


// let a1 = [1,2,4,"a","b"];
// let a2 = [1,3,5,"a","c"];
// let a3 = [];
// for(let i=0 ; i<a1.length; i++){
//    let check = false;
//    for(let j=0; j<a2.length; j++){
//       if(a1[i]===a2[j]) check = true;
//    }
//    if(!check){
//       a3.push(a1[i]);
//    }
// }
// for(let i=0 ; i<a2.length; i++){
//    let check = false;
//    for(let j=0; j<a1.length; j++){
//       if(a2[i]===a1[j]) check = true;
//    }
//    if(!check){
//       a3.push(a2[i]);
//    }
// }
// console.log(a3);




let a=[
   {
       name:"arcenal",
       points:99,
       gd:45
   },
   {
       name:"chelsea",
       points:75,
       gd:39
   },
   {
       name:"mu",
       points:75,
       gd:29
   }
]

a.sort(function(a,b){
   if(a.points===b.points) return b.gd-a.gd
   return b.points-a.points
})
for(let i=0;i<a.length;i++){
   a[i].position=a.length-i;
}
console.log(a);

