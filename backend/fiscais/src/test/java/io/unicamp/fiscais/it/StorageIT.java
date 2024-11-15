package io.unicamp.fiscais.it;

import io.unicamp.fiscais.dao.ObraDAO;
import io.unicamp.fiscais.model.Obra;
import io.unicamp.fiscais.utils.FileUtils;
import io.unicamp.fiscais.utils.JsonMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@Slf4j
public class StorageIT {
    ObraDAO obraDAO;

    @Test
    @DisplayName("Inserting obra on PG")
    public void storeObraOnPGTest() throws IOException {
        Obra obra = JsonMapper.copyMapper().readValue(FileUtils.readFileAsString("obra.json"), Obra.class);

    }
}
