package com.panpan.model;

import java.util.List;
import java.util.ArrayList;
import com.panpan.model.SongComponent;

public class Medley extends SongComponent {
  
   private  List<SongComponent> childrenSong = new ArrayList<SongComponent>();
   
   public Medley(Long id, String name,String bandNAme) {
	   super(id,name,bandNAme);
   }
   
   public Medley() {
	   super();
   }
   
	public void addSong(SongComponent songComponent) {
		   this.childrenSong.add(songComponent);
	}
	
	public Medley(String name, String style, String bandName) {
		super(name,style,bandName);
	    
	}
   
}
