
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
		limit: 14,
		qstrings: { tags: "wmmrn" },
		itemTemplate: "<a href='{{image_b}}'><img src='{{image_s}}' alt='{{title}}' title='{{title}}'/></a>"
	});

});
