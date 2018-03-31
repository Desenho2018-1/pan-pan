package com.desenho.panpan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PanPanApplication {
	
	@EnableWebMvc
	public class Config implements WebMvcConfigurer{
		
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
			.allowedOrigins("http://localhost:3000");
		}
	}
		

	
	
	public static void main(String[] args) {
		SpringApplication.run(PanPanApplication.class, args);
	}
}
