package mrhypix.shortify.Controller;

import mrhypix.shortify.Service.MaliciousUrlReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class MaliciousUrlReportController {

    private final MaliciousUrlReportService reportService;

    public MaliciousUrlReportController(
            MaliciousUrlReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submitReport(
            @RequestBody Map<String, String> request) {

        try {
            reportService.submitReport(
                    request.get("url"),
                    request.get("comment")
            );

            return ResponseEntity.ok(
                    Map.of("message",
                            "Report submitted successfully.")
            );

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", e.getMessage())
            );
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                    Map.of("message",
                            "Unable to submit report. Please try again.")
            );
        }
    }
}