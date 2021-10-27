function bubblesort(array)
{
   for(j=1;j<array.length;j++)
  {
    for(i=0;i<array.length;i++)
  {
    
      if(array[i]>array[i+1])
      {
        let greaterValue=array[i]
        array[i]= array[i+1]
        array[i+1]=greaterValue
      }
      
   // }
  }
}
  return array
}

let randomArray=[11,4,12,71,5,9,0]
bubblesort(randomArray)