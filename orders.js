$(document).ready(()=>{
    // Fill the table
    fillOrdersListTable(ordersList);
    $("#order_details").hide();

    
});
function fillOrderDetails(order){
    $("#order_details").show();
    $("#order_id").text(order.order_id);
    $("#order_price").text("₹ "+order.order_price);
    $("#order_status span").text(order.order_status);
    $("#order_action a").text(order.order_action);
}

function rowClicked(x){
    var orderId=$(x).find("td:eq(0)").text();
    
    var order=''
    $.each(ordersList, function(key, value){
        if(value.order_id==orderId){
            order=value;
        }        
    });
    fillOrderDetails(order);
}

function fillOrdersListTable(list) {
    console.log(list);
    $('#orders-list tbody').empty();
  
    var order_rows = '';
    $.each(list, function (key, value) {
      console.log(value)
      order_rows += '<tr onclick="rowClicked(this)">'
        + '<td>' + value.order_id + '</td>'
        + '<td>' + value.order_brand + '</td>'
        + '</tr>';
    });
    $('#orders-list').append(order_rows);
  
}

ordersList=[
    {
        order_id:"OSK-ORDER-125",
        order_brand:"HealthyCO",
        order_price:"250.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-123",
        order_brand:"OSKPlus",
        order_price:"240.0",
        order_status:"Accepted",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-122",
        order_brand:"OSKPlus",
        order_price:"180.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-119",
        order_brand:"HealthyCO",
        order_price:"300.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-118",
        order_brand:"HealthyCO",
        order_price:"250.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-13",
        order_brand:"OSKPlus",
        order_price:"240.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-12",
        order_brand:"OSKPlus",
        order_price:"180.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-111",
        order_brand:"HealthyCO",
        order_price:"300.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-15",
        order_brand:"HealthyCO",
        order_price:"250.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-113",
        order_brand:"OSKPlus",
        order_price:"240.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-126",
        order_brand:"OSKPlus",
        order_price:"180.0",
        order_status:"In Process",
        order_action:"Delivered",
    },
    {
        order_id:"OSK-ORDER-128",
        order_brand:"HealthyCO",
        order_price:"300.0",
        order_status:"In Process",
        order_action:"Delivered",
    }
]