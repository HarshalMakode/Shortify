package mrhypix.shortify.DTO;

public record ContactRequest(
        String name,
        String email,
        String message,
        String captchaToken
) {}