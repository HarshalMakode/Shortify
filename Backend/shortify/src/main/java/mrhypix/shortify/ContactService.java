package mrhypix.shortify;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final JavaMailSender mailSender;
    private final CaptchaService captchaService;
    private final String recipient;
    private final String sender;

    public ContactService(
            JavaMailSender mailSender,
            CaptchaService captchaService,
            @Value("${shortify.contact.to-email}") String recipient,
            @Value("${spring.mail.username}") String sender) {

        this.mailSender = mailSender;
        this.captchaService = captchaService;
        this.recipient = recipient;
        this.sender = sender;
    }

    public void submit(ContactRequest request) {
        if (request.name() == null || request.name().isBlank()
                || request.email() == null
                || !request.email().matches(
                "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")
                || request.message() == null
                || request.message().isBlank()) {
            throw new IllegalArgumentException(
                    "Please provide a valid name, email and message."
            );
        }

        if (!captchaService.verify(request.captchaToken())) {
            throw new IllegalArgumentException(
                    "CAPTCHA verification failed. Please try again."
            );
        }

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(sender);
        mail.setTo(recipient);
        mail.setReplyTo(request.email());
        mail.setSubject("Shortify Contact Form: " + request.name());
        mail.setText(
                "Name: " + request.name()
                        + "\nEmail: " + request.email()
                        + "\n\nMessage:\n" + request.message()
        );

        mailSender.send(mail);
    }
}