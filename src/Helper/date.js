export let prevcall = false;
export let nxtcall = false;
export let Datenoww;
export function Datenow(){
    console.log('date caled')
    const currentDate = new Date();
    const day = currentDate.getDate();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    console.log(day);
    return Datenoww = (`${year}-${month}-${day}`)
}
export function PrevDate(currentDate, updatedate){
    const date = new Date(currentDate);
  if (isNaN(date)) {
    return 'Invalid date format. Please provide a valid "YYYY-MM-DD" string.';
  }
  prevcall = true;
  nxtcall = false;
  date.setDate(date.getDate() - 1); // Subtract 1 day
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  let r =  `${year}-${month}-${day}`;
  updatedate(r);
}
export function NxtDate(currentDate, updatedate){
    const date = new Date(currentDate);
  if (isNaN(date)) {
    return 'Invalid date format. Please provide a valid "YYYY-MM-DD" string.';
  }
  prevcall = false;
  nxtcall = true;
  date.setDate(date.getDate() + 1); // Add 1 day
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  let r = `${year}-${month}-${day}`;
  updatedate(r);
}