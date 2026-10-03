package mrhypix.shortify;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
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

    private String normalizeURL(String originalURL) {
        if (originalURL.endsWith("/") && originalURL.indexOf("/", 8) == originalURL.length() - 1) {
            return originalURL.substring(0, originalURL.length() - 1);
        }

        return originalURL;
    }

    public URLEntity shortenURL(String originalURL) {

        String normalizedURL = normalizeURL(originalURL);

        Optional<URLEntity> existingURL = urlRepository.findByOriginalURL(normalizedURL);

        if (existingURL.isPresent()) {
            return existingURL.get();
        }

        String shortCode = generateUniqueShortCode();

        URLEntity url = new URLEntity();
        url.setOriginalURL(originalURL);
        url.setShortCode(shortCode);

        return urlRepository.save(url);
    }

    public URLEntity getURL(String shortCode) {
        Optional<URLEntity> result =
                urlRepository.findByShortCode(shortCode);

        if (result.isPresent()) {
            return result.get();
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Short URL not found"
            );
        }
    }

    public URLEntity getURLAndIncrementClick(String shortCode) {

        Optional<URLEntity> result =
                urlRepository.findByShortCode(shortCode);

        if (result.isPresent()) {

            URLEntity url = result.get();

            url.setClickCount(url.getClickCount() + 1);

            return urlRepository.save(url);

        } else {

            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Short URL not found"
            );
        }
    }
}
