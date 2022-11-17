package com.educaciontit.digitalers.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	@Email(message = "Email Debe ser un tipo Correo Electronico")
	@NotEmpty(message = "Debe enviar correo[email]")
	private String email;
	@NotEmpty(message = "Debe enviar clave[key]")
	private String key;
	@NotNull(message = "Debe enviar activo[active]")
	private Boolean active;
	private String message;
}
