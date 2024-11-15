package io.unicamp.fiscais.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Optional;

import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

@NoArgsConstructor
public class JsonMapper {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    public static ObjectMapper copyMapper() {
        return OBJECT_MAPPER.copy();
    }

    public static <T> Optional<T> readValue(String value, Class<T> clazz) {
        return readValue(OBJECT_MAPPER, value, clazz);
    }
    public static <T> Optional<T> readValue(ObjectMapper mapper, String value, Class<T> clazz) {
        if (StringUtils.isBlank(value)) {
            return Optional.empty();
        } else {
            try {
                return Optional.of(mapper.readValue(value, clazz));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }
}

