<?php
	/**
	 * Project  : DM-Cacti-API
	 * Date     : 12/09/2020
	 * Autor    : CARDINAL Florian
	 * Nom      : index.php
	 * Location : /
	 */

	declare(strict_types = 1);

	require_once('service.php');

	if(
		!empty($_SERVER['HTTP_X_REQUESTED_WITH'])
		&& (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
		&& (strtolower($_SERVER['REQUEST_METHOD']) === 'post')
	) {
		/**
		 * XHR Request Only
		 */

		switch(service::isInput($_SERVER['REQUEST_URI'])) {
			case "/api/?getUsers":
				http_response_code(200);
				echo(file_get_contents("data/users.json"));
				break;

			default:
				die();
				break;
		}
	}

	else {
		/**
		 * HTTP Request & Other
		 */

		http_response_code(403);
	}

	/**
	* END
	*/
