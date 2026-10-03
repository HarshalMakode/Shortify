package mrhypix.shortify.Controller;

import mrhypix.shortify.URLEntity;
import mrhypix.shortify.URLService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class URLController {
    private final URLService urlService;

    public URLController(URLService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/shorten")
    public URLEntity shortenURL(@RequestBody String originalURL) {
        return urlService.shortenURL(originalURL);
    }

    @GetMapping("/urls/{shortCode}/clicks")
    public Map<String, Long> getClickCount(@PathVariable String shortCode) {

        Long clickCount = urlService.getClickCount(shortCode);

        return Map.of("clickCount", clickCount);
    }
}
