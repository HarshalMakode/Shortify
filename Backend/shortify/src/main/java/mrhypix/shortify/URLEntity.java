package mrhypix.shortify;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "urls")
@Getter
@Setter
public class URLEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "original_url", nullable = false, length = 2048)
    private String originalURL;

    @Column(name = "short_code", nullable = false, unique = true, length = 7)
    private String shortCode;

    @Column(nullable = false)
    private Long clickCount = 0L;
}
