var firstDate ="1 Jan 2000";
var lastDate ="11 Jan 2000";
var stocks =[
  {date:"1 Jan 2000", open:"5678.0", close:"678"},
  {date:"2 Jan 2000", open:"5678.0", close:"678"},
  {date:"3 Jan 2000", open:"5678.0", close:"678"},
  {date:"11 Jan 2000", open:"5678.0", close:"678"},
  {date:"15 Jan 2000", open:"5678.0", close:"678"}
  ];


var result=stocks.filter((element)=>{
return ( new Date(element.date) >= new Date(firstDate) && new Date(element.date) <= new Date(lastDate));
});

console.log(result);

