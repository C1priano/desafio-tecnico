package com.desafio.backend.controller;

import com.desafio.backend.service.ViaCepService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/viacep")
@CrossOrigin(origins = "*")
public class ViaCepController {

    private final ViaCepService viaCepService;

    public ViaCepController(ViaCepService viaCepService) {
        this.viaCepService = viaCepService;
    }

    @GetMapping("/{cep}")
    public ResponseEntity<Map<String, String>> buscarEndereco(@PathVariable String cep) {
        Map<String, String> endereco = viaCepService.buscarEnderecoPorCep(cep);

        if (endereco.containsKey("erro")) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(endereco);
    }
}
