package mrhypix.shortify;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class URLService {
    private final URLRepository urlRepository;

    private static final String CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private static final int SHORT_CODE_LENGTH = 7;

    public URLService(URLRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    private String generateShortCode() {
        StringBuilder shortCode = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < SHORT_CODE_LENGTH; i++) {
            int index = random.nextInt(CHARACTERS.length());
            shortCode.append(CHARACTERS.charAt(index));
        }

        return shortCode.toString();
    }

    private String generateUniqueShortCode() {
        String shortCode;

        do {
            shortCode = generateShortCode();
        } while (urlRepository.findByShortCode(shortCode).isPresent());

        return shortCode;
    }

    public URLEntity shortenURL(String originalURL) {
        String shortCode = generateUniqueShortCode();

        URLEntity url = new URLEntity();

        url.setOriginalURL(originalURL);
        url.setShortCode(shortCode);

        return urlRepository.save(url);
    }
}
