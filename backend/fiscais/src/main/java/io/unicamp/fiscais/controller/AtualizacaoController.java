package io.unicamp.fiscais.controller;

import io.unicamp.fiscais.controller.payload.model.AtualizacaoPayload;
import io.unicamp.fiscais.dao.AtualizacaoDAO;
import io.unicamp.fiscais.model.Atualizacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/atualizacoes")
public class AtualizacaoController {

    @Autowired
    private AtualizacaoDAO atualizacaoDAO;

    @GetMapping("/{id}")
    public Atualizacao getAtualizacaoById(@PathVariable String id) {
        return atualizacaoDAO.selectAtualizacaoById(id);
    }

    @PostMapping
    public Atualizacao createAtualizacao(@RequestBody AtualizacaoPayload atualizacao) {
        return atualizacaoDAO.insert(atualizacao);
    }
}