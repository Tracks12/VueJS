<?php
	declare(strict_types = 1);

	require_once("service.php");

	if(
		!empty($_SERVER['HTTP_X_REQUESTED_WITH'])
		&& (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
		&& (strtolower($_SERVER['REQUEST_METHOD']) === 'post')
	) {
		/**
		 * XHR Request Only
		 */

		require_once("route.php");
	}

	else {
		/**
		 * HTTP Request & Other
		 */

		http_response_code(403);
	}
