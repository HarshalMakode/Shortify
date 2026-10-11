package mrhypix.shortify;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import java.util.Map;

@Service
public class CaptchaService {

    private final RestClient restClient;
    private final String secret;

    public CaptchaService(
            @Value("${shortify.hcaptcha.secret}") String secret) {

        this.restClient = RestClient.builder()
                .baseUrl("https://api.hcaptcha.com")
                .build();

        this.secret = secret;
    }

    public boolean verify(String token) {
        if (token == null || token.isBlank()) {
            return false;
        }

        MultiValueMap<String, String> form =
                new LinkedMultiValueMap<>();

        form.add("secret", secret);
        form.add("response", token);

        try {
            Map<?, ?> result = restClient.post()
                    .uri("/siteverify")
                    .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                    .body(form)
                    .retrieve()
                    .body(Map.class);

            return result != null
                    && Boolean.TRUE.equals(result.get("success"));

        } catch (Exception e) {
            return false;
        }
    }
}