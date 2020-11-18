package com.sdnetwork.email;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email {
		//password on gmail is wasspord123
	 	private String from = "SDNetworkFake@gmail.com";
	    private String fromName = "Social Distancing Network";
	    private String to = "mkhartm@gmail.com";
	    private String smtpUser = "AKIAXDHJYEO6NBBYHBF7";
	    private String smtpPass = "BHtJCtcEZfJUIEbpGXrco7QbeR0GWl68jNwSYXcT3IP9";
	    // configured on aws
	    private String configSet = "configset";
	    
	    private String host = "email-smtp.us-west-2.amazonaws.com";
	    
	    private int port = 587;
	    
	    private String subject = "Social Distancing Network: Password Reset";
	    
	    private String body = "\n" +
	    	    "<h1>Password Reset</h1>" +
	    	    "<p>Your New Password is ";
	    
	    
	    // Constructors
		public Email(String to) {
			super();
			this.to = to;
		}
		
		
		//getters and setters

		public String getFrom() {
			return from;
		}

		public void setFrom(String from) {
			this.from = from;
		}

		public String getFromName() {
			return fromName;
		}

		public void setFromName(String fromName) {
			this.fromName = fromName;
		}

		public String getTo() {
			return to;
		}

		public void setTo(String to) {
			this.to = to;
		}

		public String getSmtpUser() {
			return smtpUser;
		}

		public void setSmtpUser(String smtpUser) {
			this.smtpUser = smtpUser;
		}

		public String getSmtpPass() {
			return smtpPass;
		}

		public void setSmtpPass(String smtpPass) {
			this.smtpPass = smtpPass;
		}

		public String getConfigSet() {
			return configSet;
		}

		public void setConfigSet(String configSet) {
			this.configSet = configSet;
		}

		public String getHost() {
			return host;
		}

		public void setHost(String host) {
			this.host = host;
		}

		public int getPort() {
			return port;
		}

		public void setPort(int port) {
			this.port = port;
		}

		public String getSubject() {
			return subject;
		}

		public void setSubject(String subject) {
			this.subject = subject;
		}

		public String getBody() {
			return body;
		}

		public void setBody(String body) {
			this.body = body;
		}
		
		public void appendPass(String s) {
			this.setBody(this.body + s);
		}
		
		
		//send method. maybe will make this into a different class
		public void send() throws Exception 
		{
			
	    	Properties props = System.getProperties();
	    	props.put("mail.transport.protocol", "smtp");
	    	props.put("mail.smtp.port", this.getPort()); 
	    	props.put("mail.smtp.starttls.enable", "true");
	    	props.put("mail.smtp.auth", "true");

	    	Session session = Session.getDefaultInstance(props);

	        // Create message 
	        MimeMessage msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress(this.getFrom(),this.getFromName()));
	        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(this.getTo()));
	        msg.setSubject(this.getSubject());
	        msg.setContent(this.getBody(),"text/html");
	        
	        msg.setHeader("X-SES-CONFIGURATION-SET", this.getConfigSet());
	            
	        // Create a transport
	        Transport transport = session.getTransport();
	                    
	        // Send the message
	        try
	        {
	            transport.connect(this.getHost(), this.getSmtpUser(), this.getSmtpPass());
	        	
	            // Send the email.
	            transport.sendMessage(msg, msg.getAllRecipients());
	            System.out.println("Email sent!");
	        }
	        catch (Exception ex) {
	            System.out.println("The email was not sent.");
	            System.out.println("Error message: " + ex.getMessage());
	        }
	        finally
	        {
	            transport.close();
	        }
	
		}
}
