var tcurrency = 'CZK';
var tvalue = 19.5;

function ConvCur() {
  var tprice = parseFloat($(this).html().substring(1).replace(',', ''));
  tprice *= tvalue;
  $(this).append('<br /><small> '+tprice.toFixed(2)+' '+tcurrency+'</small>');
}
function ConvCur2() {
  var tprice = parseFloat($(this).html().substring(2).replace(',', ''));
  tprice *= tvalue;
  $(this).append('<br /><small> '+tprice.toFixed(2)+' '+tcurrency+'</small>');
}

chrome.extension.sendRequest({name: "getPreferences"},
     function(response)
     {
        tcurrency = response.value;
        tvalue = response.currency;
        $('.amt > span').each(ConvCur);
        $('.g-b').each(ConvCur);
        $('.bid').each(ConvCur);
        $('.ship.fee').each(ConvCur2);
     });