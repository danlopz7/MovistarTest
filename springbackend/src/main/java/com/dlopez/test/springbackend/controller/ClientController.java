package com.dlopez.test.springbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dlopez.test.springbackend.models.dto.ClientDto;
import com.dlopez.test.springbackend.models.entities.Client;
import com.dlopez.test.springbackend.models.request.ClientRequest;
import com.dlopez.test.springbackend.services.ClientService;
import com.dlopez.test.springbackend.util.Utility;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/clients")
@CrossOrigin(originPatterns = "*")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<Client> list() {
        return clientService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable(name = "id") Long id) {
        Optional<ClientDto> client = clientService.findById(id);

        if (client.isPresent()) {
            return ResponseEntity.ok(client.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping()
    public ResponseEntity<?> create(@Valid @RequestBody Client client, BindingResult result) {
        if (result.hasErrors()) {
            return validation(result);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(clientService.save(client));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody ClientRequest client, BindingResult result,
            @PathVariable(name = "id") Long id) {
        if (result.hasErrors()) {
            return validation(result);
        }
        Optional<ClientDto> o = clientService.update(client, id);

        if (o.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(o.orElseThrow());
        }
        return ResponseEntity.notFound().build(); // 404
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id) {
        Optional<ClientDto> o = clientService.findById(id);

        if (o.isPresent()) {
            clientService.remove(id);
            return ResponseEntity.noContent().build(); // 204
        }

        return ResponseEntity.notFound().build(); // 404
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors); // 400
    }

    @GetMapping("/report")
    public ResponseEntity<byte[]> generateClientReport() {
        List<Client> clients = clientService.findAll();

        byte[] reportBytes = Utility.generateCsvReport(clients);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_PLAIN);
        headers.setContentDispositionFormData("attachment", "client_report.csv");

        return new ResponseEntity<>(reportBytes, headers, HttpStatus.OK);
    }

}
