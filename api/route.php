<?php
	switch(service::isInput($_SERVER['REQUEST_URI'])) {
		case "/api/?getUsers":
			http_response_code(200);
			echo(file_get_contents("data/users.json"));
			break;

		case "/api/?getProducts":
			http_response_code(200);
			echo(file_get_contents("data/products.json"));
			break;

		default:
			die();
			break;
	}
