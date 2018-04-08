function dogSearch() {
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""

	$.ajax({
		url: "https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=341634576.caef5b3.3fa711f2270640e3bb1a57db558e653e",
		jsonp: "callback",
	    dataType: "jsonp",
	    success: function(data) {
	    	for(i = 0; i < data.data.length; i++) {
	    		var newA = document.createElement('a')
	    		newA.setAttribute('href', data.data[i].link)
	    		newA.setAttribute('target', "_blank")

	    		var newDiv = document.createElement('div')
	    		newDiv.className = "col-sm-3 col-sm-offset-1 con animated flipInY"

	    		var newImg = document.createElement('img')
	    		newImg.setAttribute('src', data.data[i].images.thumbnail.url)
	    		newDiv.appendChild(newImg)

	    		var newLike = document.createElement('h5')
	    		var likes = document.createTextNode('Likes: ' + data.data[i].likes.count)
	    		newLike.appendChild(likes)
	    		newDiv.appendChild(newLike)

	    		var creator = document.createElement('h5')
	    		var createdBy = document.createTextNode('From: ' + data.data[i].caption.from.username)
	    		creator.appendChild(createdBy)
	    		newDiv.appendChild(creator)
	    		newA.appendChild(newDiv)

	    		document.getElementById('results').appendChild(newA)
			}
		},

		type: 'GET'
	})
}

document.getElementById('button').addEventListener('click', dogSearch, false)









//http://sarahdevs.com/#access_token=341634576.caef5b3.3fa711f2270640e3bb1a57db558e653e