
let https = require ('https');
try {
  https = require('node:https');
} catch (err) {
  console.log('https support is disabled!')
}
const net = require('node:net');
const { URL } = require('node:url');

const urlAdd = require("../config")

function getRandomNumbers(min = -100, max = 100, ) {
   let count =  Math.floor(Math.random()*(81)+20);


  let result = [];

  while (result.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (result.indexOf(randomNumber) === -1) {
          result.push(randomNumber);
      }
  }

  return result;
}

console.log(getRandomNumbers( ));

//-----------------------------------------------------------------

// Пузырьковая сортировка
function BubbleSort(array)
{
    var n = array.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (array[j+1] < array[j])
           { var t = array[j+1]; array[j+1] = array[j]; array[j] = t; }
        }
     }
    return array;
}
// console.log(BubbleSort(getRandomNumbers()));

function GnomeSort(A)
//Гномья сортировка
{
    var n = A.length, i = 1, j = 2;
    while (i < n)
     { if (A[i-1] < A[ i ]){ i = j; j++; }
       else
         { var t = A[i-1]; A[i-1] = A[ i ]; A[ i ] = t;
           i--;
           if (i == 0){ i = j; j++; }
         }
     }
    return A;
}
// console.log(GnomeSort(getRandomNumbers()));


function QuickSort(A){
//Быстрая сортировк
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++)
     { if (A[ i ] < p) a[a.length] = A[ i ];
       else b[b.length] = A[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
}


// console.log(QuickSort(getRandomNumbers()));

// Шелла
function ShellSort(A)
{
    var n = A.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
          while (k >= i && A[k-i] > t)
           { A[k] = A[k-i]; k -= i; }
          A[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}

// console.log(ShellSort(getRandomNumbers()));

//рандомно выбираем функцию
 async function  ranfun(arEl) {
  let result = []
  if (arEl[10] >=0) {
    if(arEl[10] % 2 == 0){
      result=  ShellSort(arEl)
    }else{
      result=  QuickSort(arEl)
    }
  } else if(arEl[10] % 2 == 0){
    result= GnomeSort(arEl)
  }else{
    result= BubbleSort(arEl)
  }
  console.log(result);
 ///block 1
 const sv= await https
  .createServer(result, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(urlAdd);

  return {sv}
   ///block 1 /\=/\
   // or
   ///block 2 \/=\/
  //  const options = {
  //    hostname: `${urlAdd}`,
  //    port: 443,
  //    path: '/',
  //    method: 'GET',
  //  };
   
  //  const req = https.request(options, (res) => {
  //    console.log('statusCode:', res.statusCode);
  //    console.log('headers:', res.headers);
   
  //    res.on('data', (d) => {
  //      process.stdout.write(d);
  //    });
  //  });
   
  //  req.on('error', (e) => {
  //    console.error(e);
  //  });
  //  req.end();

   ///block 2 /\=/\
}
console.log(ranfun(getRandomNumbers()));

// console.log(urlAdd);
