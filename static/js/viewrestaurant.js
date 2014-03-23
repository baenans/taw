
var marker;
var map;

$(document).ready(function(){
	
		//$("input,select,textarea").not("[type='checkbox']").each(bootstrapizarInput);
		$("input,select,textarea").each(bootstrapizarInput);
		$("textarea,select").addClass("form-control col-sm-2");
		$("textarea").attr("rows",3);
		$(".errorlist").addClass("bg-danger");

		$("#saveasdraft").click(function(){
			$("#estado").val("D");			
			$(".form-restaurant").submit();
		});

		$("#saveasfinished").click(function(){			
			$("#estado").val("F");
			$(".form-restaurant").submit();
		});
	
		anadirMapa();

		$("#id_latitude, #id_longitude").change(function(){
			getGeoLatLng(this.id);
		});
		$("#id_address").change(function(){
			getGeoAddress(this.id);
		});

		// Parche.. why? I dont want do it ! :(
		$(".col-sm-10:first").remove();

});

function bootstrapizarInput(){

	$(this).addClass("form-control");
	$(this).attr("placeholder", $(this).attr("name"));

	$(this).parent().prev("label");
		
	$(this).parent().prev("label").addClass("control-label");

	var $wrapper = $('<div/>',{		"class": "form-group"	});

	var $wrapperSize1= $('<div/>',{		"class": "col-sm-10"	});
	var $wrapperSize2= $('<div/>',{		"class": "col-sm-2"	});
	
	$(this).parent().children().wrapAll($wrapper);
	$(this).wrapAll($wrapperSize1);
	$(this).parent().prev("label").wrapAll($wrapperSize2);

}


function anadirMapa(){	

	var initPosi ;

    if($.isNumeric($("#id_latitude").val()) && $.isNumeric($("#id_longitude").val()))
    	initPosi = new google.maps.LatLng(parseInt($.isNumeric($("#id_longitude").val()),parseInt($("#id_latitude").val())));
    else
    	initPosi = new google.maps.LatLng(36.464479,-5.591483);

	var mapOptions = {
      zoom: 9,
      center: initPosi
    };

    marker = new google.maps.Marker({
        position: initPosi,
        title: $("#id_name").val(),
        draggable:true
        //,icon : "http://imageshack.com/a/img202/483/7q80.png"
    });

    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);



    google.maps.event.addListener(marker,'dragend',function(event) {
       var a = marker.getPosition()       ;       
       $("#id_latitude").val(a.lat());
       $("#id_longitude").val(a.lng());
       getGeo($("#id_latitude").val()+","+$("#id_longitude").val());
    });

    marker.setMap(map); 

}

function getGeoLatLng(id){
	if($.isNumeric($("#id_latitude").val()) && $.isNumeric($("#id_longitude").val())){
		getGeo($("#id_latitude").val()+","+$("#id_longitude").val(),id);	
	}
}

function getGeoAddress(id){
	getGeo($("#id_address").val(),id);
}


function getGeo(parametro,id){

    var url = "http://maps.google.com/maps/api/geocode/json";
    var dataGeo = {
        address: parametro,
        sensor : false
    };
    $.getJSON(url,dataGeo, function (data) {
    	console.log("id del"+id);
    	if(id=="id_address"){
    		$("#id_latitude").val(data.results[0].geometry.location.lat);
    		$("#id_longitude").val(data.results[0].geometry.location.lng);
    	}else
    		$("#id_address").val(data.results[0].formatted_address);   

    	var nuevaPosi = new google.maps.LatLng(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng);
	    marker.setPosition(nuevaPosi);
    });
}