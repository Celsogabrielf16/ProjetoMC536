package io.unicamp.fiscais.controller;

import io.unicamp.fiscais.controller.payload.model.ObraPayload;
import io.unicamp.fiscais.dao.ObraDAO;
import io.unicamp.fiscais.model.Obra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/obras")
public class ObraController {

    @Autowired
    private ObraDAO obraDAO;

    @GetMapping("/{id}")
    public Obra getObraById(@PathVariable String id) {
        return obraDAO.selectObraById(id);
    }

    @PostMapping
    public Obra createObra(@RequestBody ObraPayload obra) {
        return obraDAO.insert(obra);
    }
}