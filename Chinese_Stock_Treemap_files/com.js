setInterval(function() {
    $(".currentTime").html(getTime())
}, 1000);

function getTime() {
    var date = new Date();
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour = date.getHours();
    var strMin = date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate
    }
    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour
    }
    if (strMin >= 0 && strMin <= 9) {
        strMin = "0" + strMin
    }
    var currentdate = date.getFullYear() + "-" + month + "-" + strDate + " " +
        strHour + seperator2 + strMin;
    return currentdate
}

function judgeWorkTime(timeStamp) {
        if ( timeStamp == undefined || timeStamp == '') {
        	timeStamp = new Date();
        }
        var isWeek = timeStamp.getDay(); //0 周日  6周六
 
	var y = timeStamp.getFullYear();
	var m = validNumber(timeStamp.getMonth()+1);
 	var d = validNumber(timeStamp.getDate());
	var ymd = y+m+d;
        if (isWeek == 0 || isWeek == 6) {
	    	return false;
        }
	var h = validNumber(timeStamp.getHours());
	var min = validNumber(timeStamp.getMinutes());
	var t = h+min;	

	if ( t < "0930" || ( t > "1130" && t < "1300" ) || t > "1700" ) {
		return false;
	}
        return true;
}

function validNumber(n) {
	return n = n < 10 ? '0' + n : '' + n;
}

function isTdxw() {
	var userAgent = navigator.userAgent;
	var result =  userAgent.search("TdxW") != -1;
	return result;
}
