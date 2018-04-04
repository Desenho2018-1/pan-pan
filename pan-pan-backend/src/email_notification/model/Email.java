package src.email_notification.model;

public class Email {
	private String title;
	private String body;
	private String sender;
	private String receiver;
	
	/**
	 * 
	 * @param sender the address of the email author
	 * @param receiver the address of the email receiver
	 * @param title the title of the email
	 * @param body the body text of the email
	 */
	public Email(String sender, String receiver, String title, String body) {
		this.sender = sender;
		this.receiver = receiver;
		this.title = title;
		this.body = body;
	}

	
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the body
	 */
	public String getBody() {
		return body;
	}
	/**
	 * @param body the body to set
	 */
	public void setBody(String body) {
		this.body = body;
	}
	/**
	 * @return the sender
	 */
	public String getSender() {
		return sender;
	}
	/**
	 * @param sender the sender to set
	 */
	public void setSender(String sender) {
		this.sender = sender;
	}
	/**
	 * @return the receiver
	 */
	public String getReceiver() {
		return receiver;
	}
	/**
	 * @param receiver the receiver to set
	 */
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	
}
