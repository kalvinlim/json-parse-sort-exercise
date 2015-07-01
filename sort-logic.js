var jsonData;
var sortFactory = {			
	sortByCarrier : function (a, b){
		if (a.carrierName < b.carrierName)
		  return -1;
		if (a.carrierName > b.carrierName)
		  return 1;
		return 0;
	},
	sortByPlanName : function (a, b){
		if (a.planName < b.planName)
		  return -1;
		if (a.planName > b.planName)
		  return 1;
		return 0;
	},
	sortByCoPay : function (a, b){
		if (a.copay < b.copay)
		  return -1;
		if (a.copay > b.copay)
		  return 1;
		return 0;
	},
	sortByPremium : function (a, b){
		if (a.premium < b.premium)
		  return -1;
		if (a.premium > b.premium)
		  return 1;
		return 0;
	},
	sortByAnnualLimit : function (a, b){
		if (a.annualLimit > b.annualLimit)
		  return -1;
		if (a.annualLimit < b.annualLimit)
		  return 1;
		return 0;
	}
};


function formatDollarAmount(amount){
	if(isNum(amount)){
		return "$" + Number(amount).toLocaleString('en');
	}
	return amount;
}

function isNum(input){
	return !isNaN(input);
}

function getColumnNames(json){
 	var result;
 	if(json.length > 0){
    	result = Object.keys(json[0]);
    }
 	return result;
}

function generateTable(json){
	$("#container").children().remove();
    var table = $("<table>");
    var headerRow = $("<tr>");
    var columnNames = getColumnNames(json);
  
    var headerColumns;

    //generate header
    $.each(columnNames, function(i, entry){
    	headerRow.append($("<th>").append(entry));
    });

    //Append headers to table head tag
    table.append($("<thead>").append(headerRow));
    

    var tbody = $("<tbody>");

    //Iterate through json and fill each body row
    $.each(json, function(i, entry){
    	var newRow = $("<tr>");
		tbody.append(newRow);
    	$.each(columnNames, function(j, entryKey){
    		var cellValue = formatDollarAmount(entry[entryKey]);
    		
    		newRow.append($("<td>").append(cellValue));
    	});
    });


    table.append(tbody);

    $("#container").append(table); 
}