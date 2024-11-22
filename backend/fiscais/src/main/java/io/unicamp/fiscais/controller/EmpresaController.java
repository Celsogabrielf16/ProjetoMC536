package io.unicamp.fiscais.controller;

import io.unicamp.fiscais.controller.payload.model.EmpresaPayload;
import io.unicamp.fiscais.dao.EmpresaDAO;
import io.unicamp.fiscais.model.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaDAO empresaDAO;

    @GetMapping("/{cnpj}")
    public Empresa getEmpresaByCnpj(@PathVariable String cnpj) {
        return empresaDAO.selectEmpresaByCnpj(cnpj);
    }

    @GetMapping("/email/{email}")
    public Empresa getEmpresaByEmail(@PathVariable String email) {
        return empresaDAO.selectEmpresaByEmail(email);
    }

    @PostMapping
    public Empresa createEmpresa(@RequestBody EmpresaPayload empresa) {
        return empresaDAO.insert(empresa);
    }

    @GetMapping("/senha")
    public boolean isSenhaCorreta(@RequestParam String email, @RequestParam String senha) {
        return empresaDAO.isSenhaCorreta(email, senha);
    }
}