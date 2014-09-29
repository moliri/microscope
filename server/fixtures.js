if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Meteor tutorial', 
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	});
	
	Posts.insert({
		title: 'iOS tutorial',
		author: 'Stanford University',
		url: 'http://web.stanford.edu/class/cs193p/cgi-bin/drupal/'
	});

	Posts.insert({
		title: 'Python tutorial',
		author: 'Google',
		url: 'https://developers.google.com/edu/python/'
	});
}
