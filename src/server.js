var equipment_sheet = SpreadsheetApp.openById("13RX9kDpH1E1fhoUhit8bFBJh-5wQ3R6_S0j1NbqQc-o");
//var equipment_sheet = SpreadsheetApp.openById("1tV_IAl5obBcWzMqI6Q1ZUdDcRWX0JADSSaIh2SzNqi8");

var values = equipment_sheet.getDataRange().getValues();






function getItemInfo(instrument_id) {
  
  
  var item = {
    id: null,
    manufacturer: null,
    part_number: null,
    serial_number: null,
    current_location: null,
    home_location: null,
    borrower: null
  
  }
  
  
  for(var i = 1; i < values.length; i++){
    if(values[i][0] == instrument_id){
      item.id = values[i][1];
      item.manufacturer = values[i][2];
      item.part_number = values[i][3];
      item.serial_number = values[i][4];
      item.current_location = values[i][5];
      item.home_location = values[i][6];
      item.borrower = values[i][7];
      
      break;
    }
  }
  
  return item 
  

}


function checkOut(instrument_id, new_loc, email){

  for(var i = 1; i < values.length; i++){
    if(values[i][0] == instrument_id){
        var email_cell = "G" + i.toString(); 
        var new_loc_cell = "E" + i.toString();

        email_cell = equipment_sheet.getRange(email_cell);
        new_loc_cell = equipment_sheet.getRange(new_loc_cell);

        email_cell.setValue(email);
        new_loc_cell.setValue(new_loc);
         
      break;
    }



}
}


function addItem(item){
    equipment_sheet.appendRow( [item.id, item.manufacturer, item.part_number, item.serial_number, item.current_location, item.home_location, item.borrower] );
}


