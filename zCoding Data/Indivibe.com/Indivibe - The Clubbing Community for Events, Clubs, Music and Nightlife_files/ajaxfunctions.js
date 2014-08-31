// JavaScript Document



function showimage(imgid,aid,param)
{
	
		var url = 'imageupdater.php';
		//document.getElementById("error_tagalbum").innerHTML='';
		var pars = 'p_id=' + imgid + '&option=' + param + '&aid=' + aid;
		document.getElementById("imagesrc").src = "images/loading.gif";
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: showResponse
			});
}
function showResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		var result_new=result.split("^");
		var src="albums/"+result_new[2]+"/medium/"+result_new[3];
		var lightsrc="albums/"+result_new[2]+"/"+result_new[3];
		document.getElementById("imagesrc").src = src;
		var lightdiv='<img src="'+lightsrc+'" title="Click Image to Zoom" border="0" id="lightimage"> ';
		document.getElementById('light').innerHTML=lightdiv;
		
		//document.getElementById("lightlink").href = src;
		
		/*if(result_new[4]=="next")
		{*/
		var linktext='<a class="linktext" href="#" onClick="showimage('+result_new[1]+','+result_new[0]+',\'next\'); return false;"><b>Next</b></a>';
		document.getElementById("nextlink").innerHTML = linktext;
		/*}
		else
		{*/
		var linktext='<a class="linktext" href="#" onClick="showimage('+result_new[1]+','+result_new[0]+',\'prev\'); return false;"><b>Previous</b></a>';
		document.getElementById("prevlink").innerHTML = linktext;
		/*}*/
		
		document.getElementById("photo_id").value = result_new[1];
		document.getElementById("maintalks").innerHTML = result_new[5];
		document.getElementById("tagalbumdiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Album Photo\', \'../tagalb.php?photo='+result_new[1]+'&album='+result_new[0]+'\',300)" />';
		
		
		if(result_new[6]>0)
		{
		var deletelink_text='<A class="linktext" href="delete.php?photo='+result_new[1]+'&m_id='+result_new[8]+'" onClick="return confirm(\'Are you sure to delete this photo?\');">Delete &nbsp;|&nbsp </A>';
		}
		else
		{
		 var deletelink_text='';
		}
		
				
		document.getElementById("deletelink").innerHTML = deletelink_text;
		document.getElementById("reportlink").innerHTML = '<a href="#" onclick="window.open(\'report_mphoto.php?p_id='+result_new[1]+'\',\'\',\'width=400,height=250\'); return false;" title="Report Album Photo"  class="linktext">Report Photo</a>';
		
		/*var addedby_text='<a href="profile.php?id='+result_new[6]+'" class="linktext">'+result_new[7]+'</a>';
		document.getElementById("addedby_div").innerHTML = addedby_text;*/
		var taggedtext=result_new[7];
		document.getElementById("taggedlist_div").innerHTML = taggedtext;
	}

function tagimage(imgid,param,mid)
{
	
		var url = 'tag_imageupdater.php';
		//document.getElementById("error_tagalbum").innerHTML='';
		var pars = 'p_id=' + imgid + '&option=' + param + '&m=' + mid;
		//alert(pars);
		document.getElementById("imagesrc").src = "images/loading.gif";
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: tagshowResponse
			});
}
function tagshowResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		//alert(result);
		var result_new=result.split("^");
		
		var src=result_new[2]+"/medium/"+result_new[3];
		var lightsrc=result_new[2]+"/"+result_new[3];
		document.getElementById("imagesrc").src = src;
		
		var lightdiv='<img src="'+lightsrc+'" title="Click Image to Zoom" border="0" id="lightimage"> ';
		document.getElementById('light').innerHTML=lightdiv;
		
		var linktext='<a class="linktext" href="#" onClick="tagimage('+result_new[0]+',\'next\','+result_new[4]+'); return false;"><b>Next</b></a>';
		document.getElementById("nextlink").innerHTML = linktext;
		//alert(result_new[0]);
		var linktext='<a class="linktext" href="#" onClick="tagimage('+result_new[0]+',\'prev\','+result_new[4]+'); return false;"><b>Previous</b></a>';
		document.getElementById("prevlink").innerHTML = linktext;
		
		var addedby_text='<a href="profile.php?id='+result_new[5]+'" class="linktext">'+result_new[6]+'</a>';
		document.getElementById("addedby_div").innerHTML = addedby_text;
		
		var taggedtext=result_new[7];
		document.getElementById("taggedlist_div").innerHTML = taggedtext;
		
		var check_type=result_new[2].split("/");
		if(check_type[0]=="albums")
		{
			document.getElementById("photo_id").value = result_new[1];
		}else if(check_type[0]=="events")
		{
			document.getElementById("ephoto_id").value = result_new[1];
		}else if(check_type[0]=="venues")
		{
			document.getElementById("vphoto_id").value = result_new[1];
		}
		
		if(check_type[0]=="albums")
		{
			document.getElementById("tagalbumdiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Album Photo\', \'../tagalb.php?photo='+result_new[1]+'&album='+result_new[8]+'\',300)" />';
		}else if(check_type[0]=="events")
		{
			document.getElementById("tageventdiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Event Photo\', \'../tageve.php?photo='+result_new[1]+'&event='+result_new[8]+'\',300)" />';
		}else if(check_type[0]=="venues")
		{
			document.getElementById("tagvendiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Venue Photo\', \'../tagven.php?photo='+result_new[1]+'&venue='+result_new[8]+'\',300)" />';
		}
		//alert(result_new[9]);
		document.getElementById("maintalks").innerHTML=result_new[9];
		
		
		
		
	}

function venueslist(pageno,cid,param)
{
	
		var url = 'venueupdater.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: showEvents
			});
}
function showEvents(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('venues_table').innerHTML=result;
	}	
	

function venueimage(imgid,vid,vpath,param)
{
	
	    document.getElementById("email_div").innerHTML='';
		document.getElementById("talk_error").innerHTML='';
		document.getElementById("vpt_message").innerHTML='';
		//document.getElementById("error_tagvenue").innerHTML='';
		//document.getElementById("tb").value='';
		var url = 'vimageupdater.php';
		var pars = 'vp_id=' + imgid + '&option=' + param + '&vid=' + vid + '&v_path=' + vpath;
		document.getElementById("imagesrc").src = "images/loading.gif";
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: venueResponse
			});
}
function venueResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		
		var result_new=result.split("^");
		var src="venues/"+result_new[2]+"/medium/"+result_new[3];
		
		document.getElementById("imagesrc").src = src;
		var imgsrc="venues/"+result_new[2]+"/"+result_new[3];
		var lightdiv='<img src="'+imgsrc+'" title="Click Image to Zoom" border="0" id="lightimage"> ';
		document.getElementById('light').innerHTML=lightdiv;
		
		var vpath="\'"+result_new[2]+"\'";
		
		
		if(result_new[4]=="next")
		{
		var linktext='<a class="linktext" href="#" onClick="venueimage('+result_new[1]+','+result_new[0]+','+vpath+',\'next\'); return false;"><b>Next</b></a>';
		
		document.getElementById("nextlink").innerHTML = linktext;
		}
		else
		{
		var linktext='<a class="linktext" href="#" onClick="venueimage('+result_new[1]+','+result_new[0]+','+vpath+',\'prev\'); return false;"><b>Previous</b></a>';
		
		document.getElementById("prevlink").innerHTML = linktext;
		}
		
		document.getElementById("maintalks").innerHTML = result_new[5];
		
		document.getElementById("vphoto_id").value = result_new[1];
		document.getElementById("tagvendiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Venue Photo\', \'../tagven.php?photo='+result_new[1]+'&venue='+result_new[0]+'\',300)" />';
		
		
		if(result_new[8]>0)
		{
		var deletelink_text='<A class="linktext" href="delete.php?vp_id='+result_new[1]+'&v_id='+result_new[0]+'" onClick="return confirm(\'Are you sure to delete this photo?\');">&nbsp;|&nbsp;Delete</A>';
		}
		else
		{
		 var deletelink_text='';
		}
		
				
		document.getElementById("deletelink").innerHTML = deletelink_text;
		document.getElementById("reportlink").innerHTML = '<a href="#" onclick="window.open(\'report_vphoto.php?vp_id='+result_new[1]+'\',\'\',\'width=400,height=250\'); return false;" title="Report Venue Photo"  class="linktext">&nbsp;|&nbsp;Report Photo</a>';
		
		var addedby_text='<a href="profile.php?id='+result_new[6]+'" class="linktext">'+result_new[7]+'</a>';
		document.getElementById("addedby_div").innerHTML = addedby_text;
		var taggedtext=result_new[9];
		document.getElementById("taggedlist_div").innerHTML = taggedtext;
	}


function venue_photo_talk()
{
	document.getElementById("email_div").innerHTML='';
	if(document.getElementById("vpt_message").value=="")
		{
			alert("Please enter comments");
		}
		else
		{
		var url = 'venuephototalk.php';
		$mes=document.getElementById("vpt_message").value.replace("&",'-@-');
		$mes=$mes.replace("?",'-*-');
		var pars = 'photo_id=' + document.getElementById("vphoto_id").value + '&message=' +$mes;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: phototalkResponse
			});
		}
}
function phototalkResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("vphoto_id").value;
		 var message='Login required to post message. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("talk_error").innerHTML=message;
		}
		else 
		{
		document.getElementById("vpt_message").value='';
		//var existing=document.getElementById("phototalks").innerHTML;
		document.getElementById("maintalks").innerHTML=result;
		}
	}

function email_venue_photo(photoid,email)
{
	document.getElementById("talk_error").innerHTML='';
	val1=document.getElementById("email_id").value;
	if(trim(document.getElementById("email_id").value)==""){
					alert("Please enter Email");
					document.getElementById("email_id").focus();
					var error=1;
	}else if(val1.search(/^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,3}$/) == -1) {
					alert("Enter valid Email");
					document.getElementById("email_id").focus();
					var error=1;
	 }
	 else
	  error=0;
	
	 if(error==0)
	 {
	document.getElementById("email_div").innerHTML='';
	
		var url = 'emailvenuephoto.php';
		
		var pars = 'photoid=' + document.getElementById("vphoto_id").value + '&email=' + document.getElementById("email_id").value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: emailvenueResponse
			});
	 }
}
function emailvenueResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText;
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("vphoto_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("email_div").innerHTML=message;
		 document.getElementById("email_div").focus();
		}
		else 
		{
		document.getElementById("email_div").innerHTML='Sent Successfully';
		document.getElementById("email_id").value='';
		}
		
	}

function add_venue_favorite(vid,action)
{
	
	var url = 'add_venue_favorite.php';
		
	var pars = 'vid=' + vid + '&action=' + action;
	
	    if(action=='delete')
		{
			var answer=confirm('Are you sure to delete this?');
		}
		if(action=='delete')
		{
		 if(answer)
		 {
			 var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: favoriteResponse
			});
		 }
		 else
		  return false;
		}
		else
		{
			var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: favoriteResponse
			});
		}
		
}
function favoriteResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText; 
		
		var res_array = result.split("|");
		
		
		if(res_array[1]=='1')
		{
		
		document.getElementById("favorite_div").innerHTML=res_array[0];
		document.getElementById("fav_div").innerHTML=res_array[2];
		}
		else
		{
			document.getElementById("fav_div").innerHTML=res_array[2];
		document.getElementById("favorite_div").innerHTML=res_array[0];
		}
		
	}
	
function venue_select(value)
{
	
	var url = 'venue_select.php';
		
		var pars = 'cid=' + value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: venue_selectResponse
			});
}
function venue_selectResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText; 
		
		/*
		alert(result);
		document.getElementById("venue_div").innerHTML=result;*/
		loc_array = result.split("|");
	
	var loc = document.getElementById("ven_id");
	
	loc.length = 0;
	loc.options[0]=new Option("-- Venue --",""); 
	for(var i=0;i<loc_array.length-1;i++){
		l=loc_array[i].split(":"); 
        loc.options[i+1]=new Option(l[1],l[0]);
	}
	//loc.options[i+1]=new Option("-- other --","others");
}

/*function eventslist(pageno,cid,param,page,date)
{
	
		var url = 'eventupdater.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid + '&page=' + page + '&day=' + date;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventslistResponse
			});
}*/
function eventslist(pageno,cid,param,page)
{
	
		var url = 'eventupdater.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid + '&page=' + page;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventslistResponse
			});
}
function eventslistResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('events_table').innerHTML=result;
	}	

function event_attend(param,eid)
{
	var url = 'event_attendance.php';
		var pars = 'option=' + param + '&event=' + eid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: event_attendResponse
			}); 
}
function event_attendResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
			
			var selfurl=document.getElementById("current_page").value;
		    var newurl=selfurl.split("=");
		    var resource=newurl[0]+"="+document.getElementById("ev_id").value;
			document.getElementById("attendtext_div").innerHTML='Login required.';
			document.getElementById("attendbtn_div").innerHTML='<a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		}
		else
		{
		var res=result.split("|");
		
		if(res[0]==0)
		{
			//document.getElementById("attendtext_div").innerHTML='Not Attending &nbsp;';
			document.getElementById("attendbtn_div").innerHTML='<input type="button" name="attend_btn" value="I am Attending" class="btn" onclick="event_attend(1,'+res[1]+');" style="width:100px;" />';
		}
		else
		{
			//document.getElementById("attendtext_div").innerHTML='I am Attending &nbsp;';
			document.getElementById("attendbtn_div").innerHTML='<input type="button" name="attend_btn" class="btn" value="Not Attending" onclick="event_attend(0,'+res[1]+');" style="width:90px;" />';
		}
		document.getElementById("attend_listing").innerHTML=res[2];
		}
	
	}	



function eventimage(imgid,eid,epath,param)
{
	
	    document.getElementById("email_div").innerHTML='';
		document.getElementById("talk_error").innerHTML='';
		//document.getElementById("error_tagevent").innerHTML='';
		//document.getElementById("tb").value='';
		var url = 'eimageupdater.php';
		
		var pars = 'ep_id=' + imgid + '&option=' + param + '&eid=' + eid + '&e_path=' + epath;
		//document.getElementById("imagesrc").src = "images/loading.gif";
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventimageResponse
			});
}
function eventimageResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		//alert(result);
		
		var result_new=result.split("^");
		
		var src="events/"+result_new[2]+"/medium/"+result_new[3];
		var imgsrc="events/"+result_new[2]+"/"+result_new[3];
		var lightdiv='<img src="'+imgsrc+'" title="Click Image to Zoom" border="0" id="lightimage"> ';
		//document.getElementById('light').innerHTML=lightdiv;
		
		/*
		document.getElementById("eventslink").setAttribute('href',src);
		document.getElementById("eventslink").setAttribute('rel','lightbox');
		alert(document.getElementById("eventslink").href);
		alert(document.getElementById("eventslink").rel);*/
		var imgtext='<a href="'+src+'" rel="gb_image[]" class="linktext" >';
		//document.getElementById("eventimage_div").innerHTML = imgtext;
		
		/*document.getElementById('light').style.width=result_new[12];
        document.getElementById('light').style.height=result_new[13];*/
 
		/*document.getElementById("imagesrc").src = src;
		document.getElementById("lightimage").src = imgsrc;*/
		
		var vpath="\'"+result_new[2]+"\'";
		
		
		/*if(result_new[4]=="next")
		{*/
		var linktext='<a class="linktext" href="#" onClick="funct(\'next\');eventimage('+result_new[1]+','+result_new[0]+','+vpath+',\'next\'); return false;"><b>Next</b></a>';
		
		document.getElementById("nextlink").innerHTML = linktext;
		/*}
		else
		{*/
		var linktext='<a class="linktext" href="#" onClick="funct(\'prev\');eventimage('+result_new[1]+','+result_new[0]+','+vpath+',\'prev\'); return false;"><b>Previous</b></a>';
		
		document.getElementById("prevlink").innerHTML = linktext;
		//}
		//alert(linktext);
		document.getElementById("maintalks").innerHTML = result_new[5];
		
		document.getElementById("ephoto_id").value = result_new[1];
		
		//alert(result_new[1]);
		
		var deletelink_text=result_new[10];
		
		document.getElementById("deletelink").innerHTML = deletelink_text;
		document.getElementById("reportlink").innerHTML = result_new[11];
		
		var addedby_text='<a href="profile.php?id='+result_new[6]+'" class="linktext">'+result_new[7]+'</a>';
		document.getElementById("addedby_div").innerHTML = addedby_text;
		document.getElementById("featurelink").innerHTML = result_new[8];
		var taggedtext=result_new[9];
		document.getElementById("taggedlist_div").innerHTML = taggedtext;
		document.getElementById("tageventdiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Event Photo\', \'../tageve.php?photo='+result_new[1]+'&event='+result_new[0]+'\',300)" />';
		
		
	}


function MM_preloadImages_egallery() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages_event.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function eventimage_older(imgid,eid,epath,param)
{
	
	    document.getElementById("email_div").innerHTML='';
		document.getElementById("talk_error").innerHTML='';
		//document.getElementById("error_tagevent").innerHTML='';
		//document.getElementById("tb").value='';
		var url = 'eimageupdater_older.php';
		
		var pars = 'ep_id=' + imgid + '&option=' + param + '&eid=' + eid + '&e_path=' + epath;
		document.getElementById("imagesrc").src = "images/loading.gif";
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventimage_olderResponse
			});
}
function eventimage_olderResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		//alert(result);
		
		var result_new=result.split("^");
		
		var src="events/"+result_new[2]+"/medium/"+result_new[3];
		var imgsrc="events/"+result_new[2]+"/"+result_new[3];
		var lightdiv='<img src="'+imgsrc+'" title="Click Image to Zoom" border="0" id="lightimage"> ';
		document.getElementById('light').innerHTML=lightdiv;
		
		/*
		document.getElementById("eventslink").setAttribute('href',src);
		document.getElementById("eventslink").setAttribute('rel','lightbox');
		alert(document.getElementById("eventslink").href);
		alert(document.getElementById("eventslink").rel);*/
		var imgtext='<a href="'+src+'" rel="gb_image[]" class="linktext" >';
		//document.getElementById("eventimage_div").innerHTML = imgtext;
		
		/*document.getElementById('light').style.width=result_new[12];
        document.getElementById('light').style.height=result_new[13];*/
 
		document.getElementById("imagesrc").src = src;
		document.getElementById("lightimage").src = imgsrc;
		
		var vpath="\'"+result_new[2]+"\'";
		
		
		/*if(result_new[4]=="next")
		{*/
		var linktext='<a class="linktext" href="#" onClick="eventimage_older('+result_new[1]+','+result_new[0]+','+vpath+',\'next\'); return false;"><b>Next</b></a>';
		
		document.getElementById("nextlink").innerHTML = linktext;
		/*}
		else
		{*/
		var linktext='<a class="linktext" href="#" onClick="eventimage_older('+result_new[1]+','+result_new[0]+','+vpath+',\'prev\'); return false;"><b>Previous</b></a>';
		
		document.getElementById("prevlink").innerHTML = linktext;
		//}
		//alert(linktext);
		document.getElementById("maintalks").innerHTML = result_new[5];
		
		document.getElementById("ephoto_id").value = result_new[1];
		
		//alert(result_new[1]);
		
		var deletelink_text=result_new[10];
		
		document.getElementById("deletelink").innerHTML = deletelink_text;
		document.getElementById("reportlink").innerHTML = result_new[11];
		
		var addedby_text='<a href="profile.php?id='+result_new[6]+'" class="linktext">'+result_new[7]+'</a>';
		document.getElementById("addedby_div").innerHTML = addedby_text;
		document.getElementById("featurelink").innerHTML = result_new[8];
		var taggedtext=result_new[9];
		document.getElementById("taggedlist_div").innerHTML = taggedtext;
		document.getElementById("tageventdiv").innerHTML = '<input type="button" class="btn" value="Tag my friends" style="width:100px;"  onclick="return GB_showCenter(\'Tag Event Photo\', \'../tageve.php?photo='+result_new[1]+'&event='+result_new[0]+'\',300)" />';
		
		var prv_load_med_image="events/"+result_new[12]+"/medium/"+result_new[13];
		var prv_load_image="events/"+result_new[12]+"/"+result_new[13];
		MM_preloadImages_egallery(prv_load_med_image,prv_load_image);
		
		/* if (document.images)
   
      {
   
              imgPreload = new Image();
   
              ImageUrl = new Array();
			  var src_s="events/"+result_new[12]+"/medium/"+result_new[13];
		      var imgsrc_s="events/"+result_new[12]+"/"+result_new[13];
   
              ImageUrl[0] = src_s;
   
              
  
              imgPreload.src = ImageUrl[0];
             
  
            
  
      }*/
		
		
}

function event_photo_talk()
{
	document.getElementById("email_div").innerHTML='';
	if(document.getElementById("ept_message").value=="")
		{
			alert("Please enter comments");
		}
		else
		{
		var url = 'eventphototalk.php';
		$mes=document.getElementById("ept_message").value.replace("&",'-@-');
		$mes=$mes.replace("?",'-*-');
		var pars = 'photo_id=' + document.getElementById("ephoto_id").value + '&message=' +$mes + '&eid=' +document.getElementById("e_id").value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: ephototalkResponse
			});
		}
}
function ephototalkResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("ephoto_id").value;
		 var message='Login required to post message. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("talk_error").innerHTML=message;
		}
		else 
		{
		document.getElementById("ept_message").value='';
		
		//var existing=document.getElementById("phototalks").innerHTML;
		document.getElementById("maintalks").innerHTML=result;
		}
		
	}
	
function email_event_photo(photoid,email)
{
	document.getElementById("talk_error").innerHTML='';
	val1=document.getElementById("email_id").value;
	if(trim(document.getElementById("email_id").value)==""){
					alert("Please enter Email");
					document.getElementById("email_id").focus();
					var error=1;
	}else if(val1.search(/^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,3}$/) == -1) {
					alert("Enter valid Email");
					document.getElementById("email_id").focus();
					var error=1;
	 }
	 else
	  error=0;
	
	 if(error==0)
	 {
	document.getElementById("email_div").innerHTML='';
	
		var url = 'emaileventphoto.php';
		
		var pars = 'photoid=' + document.getElementById("ephoto_id").value + '&email=' + document.getElementById("email_id").value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: emaileventResponse
			});
	 }
}
function emaileventResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("ephoto_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("email_div").innerHTML=message;
		 document.getElementById("email_div").focus();
		}
		else 
		{
		document.getElementById("email_div").innerHTML='Sent Successfully';
		document.getElementById("email_id").value='';
		}
		
	}

/*function submitContest(contest_id)
{
	    var url = 'event_contest.php';
		var contestopt=document.frm.contest_opt;
		var answer;
		
		for (var i=0; i<contestopt.length; i++)  {
			if (contestopt[i].checked)  {

			answer = contestopt[i].value;

				}
			}
		if(answer)
		{
			
			var pars = 'contest=' + contest_id +'&answer=' +answer;
			
			var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: submitContestResponse
			})
		}
		else
		 alert('Select answer');
		
}
function submitContestResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		if(result==2)
		{
			var output='<span class="yellowtext">You already participated in this contest.</span>';
			
			document.getElementById("contest_div").innerHTML=output;  
		}
		else if(result=='error') 
		{
			var output='<span class="yellowtext">Login required to post message. <a href="login.php">Click here to login</a></span>';
			document.getElementById("contest_div").innerHTML=output;  
		}
		else
		{
			var output='<span class="yellowtext">Thanks for participating in contest</span>';
			 document.getElementById("contest_div").innerHTML=output;
			var result_new=result.split("^^");
			if(result_new[1]!='')
			{
			 document.getElementById("attend_listing").innerHTML=result_new[1];
			}
		}
		
		
	}*/

function eventsgallery(pageno,cid,param)
{
	
		var url = 'eventgalleryupdater.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventsgalleryResponse
			});
}
function eventsgalleryResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		//alert(result);
		document.getElementById('events_table').innerHTML=result;
	}	
	
function event_photo_feature(option)
{
	
		var url = 'event_photo_feature.php';
		var pars = 'photo_id=' + document.getElementById("ephoto_id").value + '&option=' + option;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: featureResponse
			});
}
function featureResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('featurelink').innerHTML=result;
	}	
	
	
function addComments(mode,reply)
			{
			var url = 'post_details.php';
			if(document.getElementById("areaComments").value=="")
			 {
				 alert('please enter the comments');
				 return false;
			 }
			 else
			 {
				var pars = 'post_id=' + document.getElementById("hdPostId").value+"&mode="+mode+"&comments="+document.getElementById("areaComments").value+"&reply_id="+reply;
				
				var myAjax = new Ajax.Request(
					url, 
					{
						method: 'get', 
						parameters: pars, 
						onComplete: showComments
					});
			 }
				
			}
			
			
			
function showComments(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
	
		document.getElementById('postComments').innerHTML=result;
	}
	

var divId;	
function participate(poll_id,field)
			{
				
var option='';
divId=poll_id;
for(var j=1;j<=3;j++)
		{

		if(document.getElementById("poll_options" + poll_id +j).checked==true)
			{
			 option=document.getElementById("poll_options" + poll_id +j).value;			
			}

		}
		
		if(option=='')
			{
			alert("select any option");	
			}
			else {
				var url = 'poll_details.php';
				var pars = 'poll_id=' + document.getElementById("hdPoll" + poll_id).value+"&option="+option;
				var myAjax = new Ajax.Request(
					url, 
					{
						method: 'get', 
						parameters: pars, 
						onComplete: showParticipate
					});
			
		
			}
			
			}


function showParticipate(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		document.getElementById('poll'+divId).innerHTML=result;
	}			
function profile_talks(pageno,cid,param)
{
	
		var url = 'profile_talk_updater.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&id=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: profile_talksResponse
			});
}
function profile_talksResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('profile_talks_div').innerHTML=result;
	}	
	
function listposts(pageno,cid,param)
{
	
		var url = 'listposts_india.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: listpostsResponse
			});
}
function listpostsResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		var result_new=result.split("^");
		if(result_new[1]==0)
		 document.getElementById('listposts_all').innerHTML=result_new[0];
		else
		 document.getElementById('listposts_city').innerHTML=result_new[0];
	}
function recentposts(pageno,param,searchtext,searchcat)
{
	
		var url = 'recent_posts.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&p_search=' + searchtext + '&p_cat=' + searchcat;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: recentpostsResponse
			});
}
function recentpostsResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		document.getElementById('recent_posts').innerHTML=result;
	}	
function artists_ajax(pageno,param,city,type)
{
	
		var url = 'artists_ajax.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + city + '&type=' + type;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: artists_ajaxResponse
			});
}
function artists_ajaxResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		var result_new=result.split("^");
		if(result_new[1]==2)
		 document.getElementById('city_djs').innerHTML=result_new[0];
		if(result_new[1]==4)
		 document.getElementById('producers_div').innerHTML=result_new[0];
		 if(result_new[1]==3)
		 document.getElementById('bands_div').innerHTML=result_new[0];
	}
function calendar_ajax(day,month,year,city,page)
{

	var url = 'calendar_ajax.php';
		var pars = 'day=' + day + '&m=' + month + '&y=' + year + '&city=' + city + '&page=' + page;
		//alert(pars);
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: calendar_ajaxResponse
			});
}
function calendar_ajaxResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('calendar_div').innerHTML=result;
	}
function tagevent(eventid)
{
	var url = 'tagevent.php';
	if(document.getElementById("tb").value=='')
	{
		alert('Tag list is empty');
		return false;
	}
	else
	{
			var pars = 'tolist=' + document.getElementById("tb").value + '&photo_id=' + document.getElementById("ephoto_id").value + '&eventid=' + eventid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: tageventResponse
			});
	}
}
function tageventResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("ephoto_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("error_tagevent").innerHTML=message;
		 document.getElementById("error_tagevent").focus();
		}
		else 
		{
			var msg='<table><tr><td class="error">'+result+'&nbsp;<img src="images/close.jpg" onClick=remove_content("error_tagevent") ></td></tr></table>';
		 document.getElementById("error_tagevent").innerHTML=msg;
		document.getElementById("tb").value='';
		}
		
		
		
	}
function tagvenue(venueid)
{
	var url = 'tagvenue.php';
	if(document.getElementById("tb").value=='')
	{
		alert('Tag list is empty');
		return false;
	}
	else
	{
			var pars = 'tolist=' + document.getElementById("tb").value + '&photo_id=' + document.getElementById("vphoto_id").value + '&venueid=' + venueid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: tagvenueResponse
			});
	}
}
function tagvenueResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("vphoto_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("error_tagvenue").innerHTML=message;
		 document.getElementById("error_tagvenue").focus();
		}
		else 
		{
			var msg='<table><tr><td class="error">'+result+'&nbsp;<img src="images/close.jpg" onClick=remove_content("error_tagvenue") ></td></tr></table>';
		 document.getElementById("error_tagvenue").innerHTML=msg;
		document.getElementById("tb").value='';
		}
		
		
		
	}

function tagalbum(albumid)
{
	var url = 'tagalbum.php';
	if(document.getElementById("tb").value=='')
	{
		alert('Tag list is empty');
		return false;
	}
	else
	{
			var pars = 'tolist=' + document.getElementById("tb").value + '&photo_id=' + document.getElementById("photo_id").value + '&albumid=' + albumid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: tagalbumResponse
			});
	}
}
function tagalbumResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("photo_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("error_tagalbum").innerHTML=message;
		 document.getElementById("error_tagalbum").focus();
		}
		else 
		{
				var msg='<table><tr><td class="error">'+result+'&nbsp;<img src="images/close.jpg" onClick=remove_content("error_tagalbum") ></td></tr></table>';	
		 document.getElementById("error_tagalbum").innerHTML=msg;
		document.getElementById("tb").value='';
		}
		
		
		
	}
	

function album_photo_talk()
{
	//document.getElementById("email_div").innerHTML='';
	
		var url = 'albumphototalk.php';
		if(document.getElementById("mpt_message").value=="")
		{
			alert("Please enter comments");
		}
		else
		{
		$mes=document.getElementById("mpt_message").value.replace("&",'-@-');
		$mes=$mes.replace("?",'-*-');
		var pars = 'photo_id=' + document.getElementById("photo_id").value + '&message='+$mes ;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: albumtalkResponse
			});
		}
}
function albumtalkResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText;
		
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("photo_id").value;
		 var message='Login required to post message. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("talk_error").innerHTML=message;
		}
		else 
		{
		document.getElementById("mpt_message").value='';
		//var existing=document.getElementById("phototalks").innerHTML;
		document.getElementById("maintalks").innerHTML=result;
		}
	}
	
function email_album_photo(photoid,email)
{
	document.getElementById("talk_error").innerHTML='';
	val1=document.getElementById("email_id").value;
	if(trim(document.getElementById("email_id").value)==""){
					alert("Please enter Email");
					document.getElementById("email_id").focus();
					var error=1;
	}else if(val1.search(/^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,3}$/) == -1) {
					alert("Enter valid Email");
					document.getElementById("email_id").focus();
					var error=1;
	 }
	 else
	  error=0;
	
	 if(error==0)
	 {
	document.getElementById("email_div").innerHTML='';
	
		var url = 'emailalbumphoto.php';
		
		var pars = 'photoid=' + document.getElementById("photo_id").value + '&email=' + document.getElementById("email_id").value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: emailalbumResponse
			});
	 }
}
function emailalbumResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText;
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("photo_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("email_div").innerHTML=message;
		 document.getElementById("email_div").focus();
		}
		else 
		{
	var msg='<table><tr><td class="error">Sent Successfully &nbsp;<img src="images/close.jpg" onClick=remove_content("email_div") ></td></tr></table>';	
		document.getElementById("email_div").innerHTML=msg;
		document.getElementById("email_id").value='';
		}
		
	}	
function remove_content(divid)	
		{
		document.getElementById(divid).innerHTML='';	
		}

function profile_posts(pageno,param,id)
{
	
		var url = 'profile_posts.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&id=' + id;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: profile_postsResponse
			});
}
function profile_postsResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		document.getElementById('posts_div').innerHTML=result;
	}

function remove_tag(mtag_id,type,mid)
{
	
	if(confirm("Are you sure to remove this photo from you tagged list?"))
	{
		
		var url = 'remove_tag.php';
		
		var pars = 'mtag_id=' + mtag_id + '&type=' + type + '&mid=' + mid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: remove_tagResponse
			});
	}
	else
	 return false;
}
function remove_tagResponse(originalRequest)
	{
		//put returned XML in the textarea
		var result=originalRequest.responseText; 
		//alert(result);
		document.getElementById("tagging_list").innerHTML=result;
		
	}
/********* SUDHA *****/

function calendar_fun(cid,page,date)
{
	
		var url = 'calendar_updater.php';
		var pars = 'cid=' + cid + '&page=' + page + '&day=' + date;
		
		if(page=='events')
		{
		document.getElementById('events_table').style.display='block';
		document.getElementById('tabs_div').style.display='none';
		}
		else
		{
		document.getElementById('events_table_orig').style.display='none';
		document.getElementById('events_table').style.display='block';
		}
		//alert(pars);
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: calendar_funResponse
			});
}
function calendar_funResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		
		document.getElementById('events_table').innerHTML=result;
	}	
	
function venue_other(value)
{
	if(value=="others")
	 document.getElementById("venue_other").style.display="block";
}


function add_event_venue_other(value)
		{
		if(value=="others")
		 document.getElementById("venue_other").style.display="block";	
		 
		 
		 
		 var url = 'check_venue.php';
		var pars = 'v_id='+value;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: show_guest_list
			});
		 
		}
		
function show_guest_list(originalRequest)	
			{
			var result=originalRequest.responseText;
		//	alert("coming"+result);
			if(result==1)
				{
			document.getElementById("guest_div").style.display="block";
			document.getElementById("hdFeatured").value=result;
				}
			else
			document.getElementById("guest_div").style.display="none";
			
			}

function add_new_venue()
{
	var url = 'add_other_venue.php';
		var pars = 'v_title=' + document.getElementById("new_venue").value + '&c_id=' + document.getElementById("c_id").value ;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: add_new_venueResponse
			});
}
function add_new_venueResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		document.getElementById('venue_hidden').value=result;
		document.getElementById('new_venue_response').innerHTML='Added Succesfully';
	}
/****** ****/


function fav_venue()
	{
	var frm=document.venueForm;
				if(frm.c_id.value=='')
					{
					alert("Select City");
					frm.c_id.focus();
					}else
						{
						window.location.href='venues_all.php?city='+frm.c_id.value;	
						}	

	}


function events_browse()
			{
			var frm=document.eventsForm;
				if(frm.c_id.value=='')
					{
					alert("Select City");
					frm.c_id.focus();
					}else
						{
						window.location.href='events_all.php?city='+frm.c_id.value;	
						}
				
				
			}

function mainCity(city,page)
{
	
	window.location.href=''+page+'?city='+city;
}
function event_attend_list(pageno,cid,param)
{
	
		var url = 'events_attend_ajax.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventsattendResponse
			});
}
function eventsattendResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('events_attend_table').innerHTML=result;
	}
function event_linked_list(pageno,cid,param)
{
	
		var url = 'events_linked_ajax.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: eventslinkedResponse
			});
}
function eventslinkedResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('events_linked_table').innerHTML=result;
	}

function venue_eventslist(pageno,cid,param)
{
	
		var url = 'venue_events_ajax.php';
		var pars = 'pageno=' + pageno + '&option=' + param + '&cid=' + cid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: venueeventslistResponse
			});
}
function venueeventslistResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('events_table').innerHTML=result;
	}	
function displayevents()
{
	document.getElementById('events_table').style.display='none';
	document.getElementById('tabs_div').style.display='block';
}
function display_events()
{
	document.getElementById('events_table').style.display='none';
	document.getElementById('events_table_orig').style.display='block';
}
function getWidth (id) {  
		var gw = document.getElementById(id).offsetWidth;
		//alert (gw);
		document.getElementById("d_w").style.width=gw+"px";
		//alert(document.getElementById("d_w").style.width);
	}

//-->
<!--
/*function getHeight (id) {  
		var gh = document.getElementById(id).offsetHeight;
		//alert (gh);
		gh=gh+30;
		document.getElementById("mycustomscroll2").style.height=gh+"px";
		//alert(document.getElementById("mycustomscroll2").style.height);
	}
	function getWidth2 (id) {  
		var gw = document.getElementById(id).offsetWidth;
		//alert (gw);
		document.getElementById("d_w2").style.width=gw+"px";
		//alert(document.getElementById("d_w").style.width);
	}
	function getHeight2 (id) {  
		var gh = document.getElementById(id).offsetHeight;
		//alert (gh);
		gh=gh+30;
		document.getElementById("mycustomscroll").style.height=gh+"px";
		//alert(document.getElementById("mycustomscroll2").style.height);
	}*/
function vibe_autostart()
{
	    var is_checked=document.getElementById("autostart").checked;
		//alert(is_checked);
		if(is_checked==true)
		 var start=1;
		else
		 var start=0;
		var url = 'vibe_auto_start.php';
		var pars = 'autostart='+start;
		
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: vibe_autostartResponse
			});
}
function vibe_autostartResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		//document.getElementById('autostart_mesg').innerHTML=result;
	}


//-->
<!--
function getHeight (id) {  
		var gh = document.getElementById(id).offsetHeight;
		//alert (gh);
		//gh=gh+30;
		/*alert(id);
		alert(gh);*/
		//document.getElementById("div_right_scroll").style.height=(gh+20)+"px";
		//alert(document.getElementById("div_right_scroll").style.height);
	}	
function getHeight2 (id) {  
		var gh = document.getElementById(id).offsetHeight;
		
		//gh=gh+30;
		/*var kk=document.getElementById(id).style.height;
	     var ii=kk.split("px");
		 alert(kk);
		 alert(ii);*/
		document.getElementById("div_left_scroll").style.height=(gh+40)+"px";
		//alert(document.getElementById("div_right_inner").style.height);
	}	
function get_post_Height2 (id) {  
		var gh = document.getElementById(id).offsetHeight;
		//alert (gh);
		//gh=gh+30;
		document.getElementById("div_left_scroll").style.height=(gh+40)+"px";
		//alert(document.getElementById("div_right_inner").style.height);
	}	
	function get_profile_Height (id) {  
		var gh = document.getElementById(id).offsetHeight;
		//alert (gh);
		//gh=gh+30;
		document.getElementById("div_right_scroll").style.height=(gh+40)+"px";
		//alert(document.getElementById("div_right_inner").style.height);
	}
	
	
	
	
	function submitMembersContest(contest_id)
		{
	    var url = 'members_contest.php';
		var contestopt=document.frm.contest_opt;
		var answer;
		
		for (var i=0; i<contestopt.length; i++)  {
			if (contestopt[i].checked)  {

			answer = contestopt[i].value;

				}
			}
		if(answer)
		{
			var pars = 'contest=' + contest_id +'&answer=' +answer;
			var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: submitMembersContestResponse
			})
		}
		else
		 alert('Select answer');
		
		}
		
function submitMembersContestResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		//alert(result);
		if(result==1) 
			var output='<span class="error">Thanks for participating in contest</span>';
		else if(result==2) 
			var output='<span class="error">You already participated in this contest.</span>';
				else
			var output='<span class="error">Login required to participate contest. <a href="login.php" class="linktext">Click here to login</a></span>';
		document.getElementById("contest_div").innerHTML=output;  
		
	}
function remove_flyer(eid,type)
{
	var url = 'removeFlyer.php';
		var pars = 'eid=' + eid + '&type=' + type;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: remove_flyerResponse
			});
}
function remove_flyerResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		
		document.getElementById('flyer_result').innerHTML=result;
		document.getElementById('flyer_view').innerHTML='';
	}
function tagalbum_delete(albumid)
{
	var url = 'tagalbum_delete.php';
	if(document.getElementById("tb").value=='')
	{
		alert('Tag list is empty');
		return false;
	}
	else
	{
			var pars = 'tolist=' + document.getElementById("tb").value + '&photo_id=' + document.getElementById("photo_id").value + '&albumid=' + albumid;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: tagalbumdeleteResponse
			});
	}
}
function tagalbumdeleteResponse(originalRequest)
	{
		//put returned XML in the textarea
		
		var result=originalRequest.responseText;
		alert(result);
		/*
		if(result=="error")
		{
	     var selfurl=document.getElementById("current_page").value;
		 var newurl=selfurl.split("=");
		 var resource=newurl[0]+"="+document.getElementById("photo_id").value;
		 var message='Login required. <a href="login.php?resource='+resource+'" class="linktext">Click here to login</a>';
		 document.getElementById("error_tagalbum").innerHTML=message;
		 document.getElementById("error_tagalbum").focus();
		}
		else 
		{
				var msg='<table><tr><td class="error">'+result+'&nbsp;<img src="images/close.jpg" onClick=remove_content("error_tagalbum") ></td></tr></table>';	
		 document.getElementById("error_tagalbum").innerHTML=msg;
		document.getElementById("tb").value='';
		}*/
		
		
		
	}

function blockMember(blockuser,type,page)
{
   if(type==1)
    var mesg='Are you sure to block this member?';
   else
    var mesg='Are you sure to Unblock this member?';
	if(confirm(mesg))
	{
		var url = 'blockMember.php';
			var pars = 'toblock=' + blockuser +'&type=' + type +'&page=' + page;
		
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'get', 
				parameters: pars, 
				onComplete: blockMemberResponse
			});
	}
	else
	 return false;	
}
function blockMemberResponse(originalRequest)
{
	var result=originalRequest.responseText;
	
  	var result_new=result.split("^");
	
	
	if(result_new[0]=='unblocked')
	{
		if(result_new[2]=='profile')
		{
			document.getElementById("divblock").innerHTML=result_new[1];
			document.getElementById("a_addfriend").style.display='block';
			document.getElementById("compose_a").style.display='block';
			document.getElementById("walls_div").style.display='block';	
		}
		else
		{
			document.getElementById("divblock").innerHTML=result_new[3];
			document.getElementById("a_addfriend").style.display='block';
		}
	}
	if(result_new[0]=='blocked')
	{
		
		
		
		document.getElementById("divblock").innerHTML=result_new[1];
		if(result_new[2]==0)
		{
		document.getElementById("a_addfriend").style.display='none';
		}
		/*document.getElementById("compose_a").style.display='none';
		document.getElementById("walls_div").style.display='none';*/
		if(result_new[2]>0)
		{
		document.getElementById("addfriend_a").innerHTML=result_new[3];
		}
	}
	 
}

function trim(str) {
	return str.replace(/^\s*|\s*$/g,"");
}

function check_age()
			{
			var frm=document.ageForm
				
					if( trim(frm.b_day.value)=="")
						{
						  alert("Please select DAY for DATE OF BIRTH");
						  frm.b_day.focus();
						  return false;
						}
						if( trim(frm.b_month.value)=="")
						{
						  alert("Please select MONTH for DATE OF BIRTH");
						  frm.b_month.focus();
						  return false;
						}
						if( trim(frm.b_year.value)=="")
						{
						  alert("Please select YEAR for DATE OF BIRTH");
						  frm.b_year.focus();
						  return false;
						}
				
			
			var url = 'ageCheck.php';
			var pars = 'day=' + frm.b_day.value +'&mon=' + frm.b_month.value +'&year=' + frm.b_year.value;
		
			var myAjax = new Ajax.Request(
				url, 
				{
					method: 'get', 
					parameters: pars, 
					onComplete: blockMembervView
				});
					
				
			}
	
	
function blockMembervView(originalRequest)
			{
				
				var result=originalRequest.responseText;
					if(result==1)
						{
						document.getElementById("ageVerification").style.display="none";	
						}else
							{
								document.getElementById("show_tt").style.display="none";
								document.getElementById("error_tt").style.display="block";
							
							
							}
			}
			
/********** Phase2 Addons *************/
	
/********** End of Phase2 Addons *************/

