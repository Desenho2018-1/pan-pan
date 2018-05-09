package com.panpan.model;

import com.panpan.model.SongComponent;

public class Song extends SongComponent {

	public Song(Long songId, String songName,String bandNAme) {
		super(songId,  songName, bandNAme);
	}

	public Song(String name, String style, String bandName) {
		super(name,style,bandName);
	    
	}
	
}
