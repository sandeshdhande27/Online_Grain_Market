package com.app.service;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;
	

	
	public void sendEmailForNewRegistration(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("shreenimjaymatadhanyabhandar@gmail.com");
		message.setTo(email);
		message.setSubject("Thank you for Registering with us!");
		message.setText("WELCOME to the GRAIN-MARKET ");
		emailSender.send(message);
		System.out.println("Sent succes");
	}

	public void sendOtp(String email, String otp) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("OTP");
		message.setText(otp);
		emailSender.send(message);
	}
}
