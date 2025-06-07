package com.desafio.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@Service
public class ViaCepService {

    @SuppressWarnings("unchecked")
    public Map<String, String> buscarEnderecoPorCep(String cep) {
        String url = UriComponentsBuilder
                .fromUriString("https://viacep.com.br/ws/" + cep + "/json/")
                .toUriString();

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Map.class);
    }
}
