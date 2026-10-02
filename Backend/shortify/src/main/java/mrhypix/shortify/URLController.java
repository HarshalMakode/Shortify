package mrhypix.shortify;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class URLController {
    private final URLService urlService;

    public URLController(URLService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("shorten")
    public URLEntity shortenURL(@RequestBody String originalURL) {
        return urlService.shortenURL(originalURL);
    }
}
