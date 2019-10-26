thanos_username=window._sharedData.config.viewer.username
document.querySelectorAll('[href="/'+thanos_username+'/following/"]')[0].click()
setTimeout(function(){
thanos_popup=document.querySelectorAll('[role="dialog"]')[0].childNodes[2]
var thanos_start=setInterval(function(){
	if(thanos_popup.scrollHeight!=thanos_popup.childNodes[0].scrollHeight){
        thanos_popup=document.querySelectorAll('[role="dialog"]')[0].childNodes[2]
        document.querySelectorAll('[role="dialog"]')[0].childNodes[2].scrollTo(0,thanos_popup.childNodes[0].scrollHeight)
	}else{
		choose_lucky_ppl();
                clearInterval(thanos_start)
        }
},0)
},1000)


function create_thanos_array(a){
	return Array.from({length: a}, () => a--)
}
function create_thanos_array(a){
	return Array.from({length: a}, () => a--)
}
function choose_lucky_ppl(){
thanos_following=document.querySelectorAll('[role="dialog"]')[0].childNodes[2].querySelectorAll("li")

	thanos_array=(thanos_following.length%2==0)?create_thanos_array(thanos_following.length):create_thanos_array(thanos_following.length+1)

	thanos_array=(thanos_following.length%2==0)?create_thanos_array(thanos_following.length):create_thanos_array(thanos_following.length+1)
	thanos_lucky_elm_array=[]
	for(i=0;i<thanos_array.length;i++){
	    thanos_lucky_elm_idx=Math.floor(Math.random()*thanos_array.length)
	if(thanos_array[thanos_lucky_elm_idx]===undefined){break;}
	    thanos_lucky_elm_array.push(thanos_array[thanos_lucky_elm_idx])
	    thanos_array.splice(thanos_lucky_elm_idx,1)
	}
	thanos_lucky_elm_array
	i=0
	setInterval(function(){
if(i<thanos_lucky_elm_array.length){
		thanos_unfollow(thanos_lucky_elm_array[i]);i++
}
	},1000)

}
function thanos_unfollow(i){
	try {
	    document.querySelectorAll('[role="dialog"]')[0].childNodes[2].querySelectorAll("button")[i].click()
		setTimeout(function(){
		document.querySelectorAll('[role="presentation"]')[4].querySelectorAll("button")[0].click()
		},500)
	}
	catch(err) {
	    console.log(err.message)
	}
}
