<?php
	switch(service::isInput($_SERVER['REQUEST_URI'])) {
		case "/api/?getUsers":
			$return = [
				"code"     => http_response_code(200),
				"response" => json_decode(file_get_contents("data/users.json"))
			]; break;

		case "/api/?getProducts":
			$return = [
				"code"     => http_response_code(200),
				"response" => json_decode(file_get_contents("data/products.json"))
			]; break;

		case "/api/?insertProduct":
			$post = service::checkArray($_POST);
			$json = json_decode(file_get_contents("data/products.json"));

			$post = [
				"id"    => intval($post["id"]),
				"name"  => $post["name"],
				"price" => floatval($post["price"])
			];

			array_push($json, $post);

			$return = [
				"code"     => http_response_code(200),
				"response" => file_put_contents("data/products.json", json_encode($json)) ? true : false
			]; break;

		default:
			$return = [
				"code"     => http_response_code(404),
				"response" => false
			]; break;
	}

	echo(json_encode($return));
	die();
