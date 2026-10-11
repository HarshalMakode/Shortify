package mrhypix.shortify.Controller;

import mrhypix.shortify.DTO.ContactRequest;
import mrhypix.shortify.Service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(
            @RequestBody ContactRequest request) {
        try {
            contactService.submit(request);

            return ResponseEntity.ok(
                    Map.of("message",
                            "Your message has been sent successfully.")
            );

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", e.getMessage())
            );

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "message",
                            "Unable to send your message. Please try again."
                    ));
        }
    }
}