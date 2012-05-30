
$(document).ready(function() {

	$(".tweet").tweet({
		//username: "wmmrn",
		query: "wmmrn",
		avatar_size: 48,
		count: 7,
		loading_text: "loading tweets..."
		//, template: "{text} <br/>» {retweet_action}"
	});

	$("#flickrPics").jflickrfeed({
		limit: 15,
		qstrings: { tags: "wmmrn" },
		itemTemplate: "<a href='{{image_b}}' rel='flickr-feed' title='{{title}}'><img src='{{image_s}}' alt='{{title}}' title='{{title}}'/></a>"
	}, function(data) {
	    jQuery("#flickrPics a").fancybox({
		    'transitionIn'	:	'elastic',
		    'transitionOut'	:	'elastic',
		    'speedIn'		:	600,
		    'speedOut'		:	200,
		    //'overlayShow'	:	false,
		    'hideOnContentClick': true
	    });
	});
	
});
