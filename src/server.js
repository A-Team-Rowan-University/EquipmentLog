var equipment_sheet = SpreadsheetApp.openById("13RX9kDpH1E1fhoUhit8bFBJh-5wQ3R6_S0j1NbqQc-o");
//var equipment_sheet = SpreadsheetApp.openById("1tV_IAl5obBcWzMqI6Q1ZUdDcRWX0JADSSaIh2SzNqi8");

var values = equipment_sheet.getDataRange().getValues();






function getItemInfo(instrument_id) {
  
  
  var item = {
    id: null,
    manf: null,
    partno: null,
    serialno: null,
    type: null,
    curr_loc: null,
    home_loc: null,
    borr_email: null
  
  }
  
  
  for(var i = 1; i < values.length; i++){
    if(values[i][0] == instrument_id){
      item.id = values[i][1];
      item.manf = values[i][2];
      item.partno = values[i][3];
      item.serialno = values[i][4];
      item.type = values[i][5];
      item.curr_loc = values[i][6];
      item.home_loc = values[i][7];
      item.borr_email = values[i][8];
      
      break;
    }
  }
  
  return item 
  

}


function checkOut(instrument_id, new_loc, email){

  for(var i = 1; i < values.length; i++){
    if(values[i][0] == instrument_id){
        var email_cell = "H" + i.toString(); 
        var new_loc_cell = "F" + i.toString();

        email_cell = equipment_sheet.getRange(email_cell);
        new_loc_cell = equipment_sheet.getRange(new_loc_cell);

        email_cell.setValue(email);
        new_loc_cell.setValue(new_loc);
         
      break;
    }



}
}


function addItem(item){
    equipment_sheet.appendRow( [item.id, item.manf, item.partno, item.serialno, item.type, item.curr_loc, item.home_loc, item.borr_email] );
}


