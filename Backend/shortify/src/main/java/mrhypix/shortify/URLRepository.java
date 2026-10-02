package mrhypix.shortify;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface URLRepository extends JpaRepository<URLEntity, Long> {
    Optional<URLEntity> findByShortCode(String shortCode);
    Optional<URLEntity> findByOriginalURL(String originalURL);
}
