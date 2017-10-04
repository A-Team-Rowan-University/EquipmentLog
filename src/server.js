var equipment_sheet = SpreadsheetApp.openById("13RX9kDpH1E1fhoUhit8bFBJh-5wQ3R6_S0j1NbqQc-o");
//var equipment_sheet = SpreadsheetApp.openById("1tV_IAl5obBcWzMqI6Q1ZUdDcRWX0JADSSaIh2SzNqi8");


function getItem(item_name) {
  
  var values = equipment_sheet.getDataRange().getValues();
  
  var item = {
    itemName: null,
    itemLoc: null,
    itemBorrower: null
  
  }
  
  
  for(var i = 0; i < values.length; i++){
    if(values[i][0] == item_name){
      item.itemName = values[i][1];
      item.prop2 = values[i][2];
      item.prop3 = values[i][3];
      break;
    }
  }
  
  return item;
  

}


function addItem(item){

  equipment_sheet.appendRow( [item.itemName, item.itemLoc, item.Borrower]  );
  
  
}


