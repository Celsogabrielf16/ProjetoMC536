package io.unicamp.fiscais.controller;

import io.unicamp.fiscais.controller.payload.model.LocalizacaoPayload;
import io.unicamp.fiscais.dao.LocalizacaoDAO;
import io.unicamp.fiscais.model.Localizacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/localizacoes")
public class LocalizacaoController {

    @Autowired
    private LocalizacaoDAO localizacaoDAO;

    @GetMapping("/{id}")
    public Localizacao getLocalizacaoById(@PathVariable String id) {
        return localizacaoDAO.selectLocalizacaoById(id);
    }

    @PostMapping
    public Localizacao createLocalizacao(@RequestBody LocalizacaoPayload localizacao) {
        return localizacaoDAO.insert(localizacao);
    }
}