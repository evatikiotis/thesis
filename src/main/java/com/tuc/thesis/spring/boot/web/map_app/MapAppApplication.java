package com.tuc.thesis.spring.boot.web.map_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

//@SpringBootApplication
//public class MapAppApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(MapAppApplication.class, args);
//	}
//}
@SpringBootApplication
public class MapAppApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return application.sources(MapAppApplication.class);
	}

	public static void main(String[] args) {

		SpringApplication.run(MapAppApplication.class, args);
	}
}