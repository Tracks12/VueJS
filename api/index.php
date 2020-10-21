<?php
	/**
	 * Project  : DM-Cacti-API
	 * Date     : 12/09/2020
	 * Autor    : CARDINAL Florian
	 * Nom      : index.php
	 * Location : /
	 */

	declare(strict_types = 1);

	if(
		!empty($_SERVER['HTTP_X_REQUESTED_WITH'])
		&& (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
		&& (strtolower($_SERVER['REQUEST_METHOD']) === 'post')
	) {
		/**
		 * XHR Request Only
		 */

		switch($_SERVER['REQUEST_URI']) {
			case "/api?onlineUsers":
				http_response_code(200);
				echo(file_get_contents("/api/data/users.json"));
				break;
		}
	}

	else {
		/**
		 * HTTP Request & Other
		 */

		http_response_code(200);
 		echo(file_get_contents("data/users.json"));
		http_response_code(404);
	}

	/**
	* END
	*/
