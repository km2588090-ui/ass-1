//small note انا عملت سيرش عن اسالة كتير خصوصا دي وال مرة ليا جافا سكربت
//Q1
//let num=+("123")
//let res=num+7
//console.log(res)
//-------------------------
//Q2
//let x=0
//if(x==0)
//{
//    console.log("invalid")
//}
//else
//    {
//   console.log(true)
//}
//-------------------------
//Q3
//for(let i=1;i<=10;i++)
//{
//    if(i%2==0)
//    {
//        continue
//   }
//    else
//    {
//        console.log(i)
//    }
//}
//------------------------
//Q4
//let num =[1,2,3,4,5,6,7,8,9,10]
//let evennum=num.filter(function(num){return num%2==0})
//console.log(evennum)
//-------------------------
//Q5
//let arr1=[1,2,3]
//let arr2=[4,5,6]
//let rest=[...arr1,...arr2]
//console.log(rest)
//--------------------------
//Q6
//let day=3
//switch(day)
//{
 //   case 1:
 //       console.log("saturday")
 //       break
 //   case 2:
 //       console.log("sunday")
 //       break
 //   case 3:
 //       console.log("monday")
 //       break
 //   case 4:
 //       console.log("tuesday")
 //       break
 //   case 5:
 //       console.log("wednesday")
 //       break
 //   case 6:
 //       console.log("thursday")
 //       break
 //   case 7:
 //       console.log("friday")
 //       break
 //   default:
//       console.log("invalid day")
//}
//-----------------------------
//Q7
//let arr1=["a","bbb","cccc","dfgh"]
//let res=arr1.map(function(item){return item.length})
//console.log(res)
//------------------------------
//Q8
//let num=15
//if(num%3==0&&num%5==0)
//{
//    console.log("divible by both")
//}
//else
//{
//console.log("not divible by both")
//}
//--------------------------------
//Q9
//let num=5
//const square=num=>num*num
//console.log(square(num)) 
//--------------------------------
//Q10
//const person = { name: 'John', age: 25 }
//const info = ({ name, age }) => name + " is " + age + " years old"
//console.log(info(person))
//ََ-------------------------------
//Q11
//function sum(...nums)
//{
//    return nums.reduce((a,b)=>a+b)
//}
//console.log(sum(1,2,3,4,5))
//-----------------------------
//Q12
//function delayedSuccess()
//{
//    return new Promise((resolve,reject)=>
//        {
 //       setTimeout(()=>resolve("Success"),3000)
 //   })
//}
//delayedSuccess().then(msg=>console.log(msg)) 
//-----------------------------
//Q13
//function largest(arr)
//{
 //   return Math.max(...arr)
//}
//console.log(largest([1,3,7,2,4])) // 7
//-----------------------------
//Q14
//function getKeys(obj){
  //  return Object.keys(obj)
//}
//console.log(getKeys({name:"John", age:30})) 
//-----------------------------
//Q15
//function splitWords(str)
//{
//    return str.split(" ")
//}
//console.log(splitWords("The quick brown fox"))
