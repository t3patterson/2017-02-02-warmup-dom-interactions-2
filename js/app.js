//-------------------------------------
//TASK : Put the songs on the page  
//-------------------------------------
//
// Each song item needs to be in this format: 
// 
// <div class="song-item">
// 	<h4 class="song-item__name">Song Title</h4>
// 	<h4 class="song-item__artist">Artist</h4>
// 	<h4 class="song-item__album">Album</h4>
// </div> 

// You will add them to the element with a class of 'songs-list'

var jukeBoxSongs = [
  {
     artist: "Guns N Roses",
     song: "Live & Let Die",
     album: "Use Your Illusion"
  },
  {
     artist: "Led Zeppelin",
     song: "When the Levee Breaks",
     album: "Led Zeppelein IV"
  },
  {
     artist: "Guns N Roses",
     song: "Live & Let Die",
     album: "Use Your Illusion"
  },
  {
     artist: "Eric Prydz",
     song: "Call on Me",
     album: "EP"
  },
  {
      artist: "Nirvana",
      song: "In Bloom",
      album: "Nevermind"
  },
  {
      artist: "Pearl Jam",
      song: "Better Man",
      album: "Vitalogy"
  },
  {
     artist: "LCD Soundsystem",
     song: "Dance Yrself Clean",
     album: "This is Happening"
  },
  {
     artist: "Spoon",
     song: "Dont You Evah",
     album: "Ga Ga Ga Ga Ga"
  }
 ]

var songsListContainerEl = document.querySelector('.songs-list')

var giganticHtmlStr = ''

forEach( jukeBoxSongs , 
	function(songObject, index, theArray){
		console.log(songObject.artist)
		console.log(songObject.song)
		console.log(songObject.album)
		console.log('----')
		
		var songItemHtmlStr = '<div class="song-item">'
		songItemHtmlStr     +=    '<h4 class="song-item__name">'+ songObject.artist +'</h4>'
		songItemHtmlStr     +=    '<h4 class="song-item__artist">'+ songObject.song +'</h4>'
		songItemHtmlStr     +=    '<h4 class="song-item__album">'+ songObject.album +'</h4>'
		songItemHtmlStr     += '</div>'
		
		giganticHtmlStr += songItemHtmlStr
})

// console.log(songItemHtmlStr)

songsListContainerEl.innerHTML = giganticHtmlStr
// (1) iterate over jukeBoxSongs array

// (2) create a html-string for each song object
			// var htmlComponent = '<div class="some-listing">'
			// htmlComponent     +=     '<h4>' + artist '</h4>'
			// htmlComponent     +=     '<h4>' + song '</h4>'
			// htmlComponent    +=  '</div>'
			
// (3) append each htmlComponent string to div.songs-list DOM element
 
