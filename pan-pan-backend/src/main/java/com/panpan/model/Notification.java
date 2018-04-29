package com.panpan.model;

import java.util.List;

import com.panpan.Observer;

public abstract class Notification {
	List<Observer> observers;
	public abstract String getLongText();
	public abstract String getShortText();
	public void addObserver(Observer o) {
		observers.add(o);
	}
	public void removeObserver(Observer o) {
		observers.remove(o);
	}
	public void notifyObservers() {
		for(Observer o:observers) {
			o.update(this);
		}
	}
}
