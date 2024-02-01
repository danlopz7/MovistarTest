package com.dlopez.test.springbackend.models.request;

import java.util.HashSet;
import java.util.Set;

import com.dlopez.test.springbackend.models.entities.Address;

import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDto {

    //falta agregar propiedas. esta entidad es la que construye DtoMapperClient
    //de momento no la necesito ya que puedo agarrar todas las propiedades de esta entidad 
    //originalmente se hizo esto para modelar el json que recibo en el request de update @RequestBody
    //con el fin de quitar la password del json
    
    @NotBlank
    @Size(min = 3, max = 15)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String lastname;

    @NotBlank
    private String identification;

    @NotBlank
    private String phone;

    @NotEmpty
    @Email
    private String email;

    @OneToMany(
        fetch = FetchType.EAGER,
        cascade = CascadeType.ALL
    )
    private Set<Address> addresses = new HashSet<>();
}
