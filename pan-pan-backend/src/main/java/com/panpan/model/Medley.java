package com.panpan.model;

import java.util.List;
import java.util.ArrayList;
import com.panpan.model.SongComponent;
public class Medley extends SongComponent {
  
   private  List<SongComponent> childrenSong = new ArrayList<SongComponent>();
   
   public Medley() {}

	public void addSong(SongComponent songComponent) {
		   this.childrenSong.add(songComponent);
	}
   
   
}
