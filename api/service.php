<?php
	/**
 	 * secure
 	 * Objet de vérification de données entrentes
 	 */
	class service {
		/**
 		 * verify if mail is valid
 		 * @param string $data string of mail
 		 * @return bool [true/false]
 		 */
		public static function isMail(string $data): bool {
			$data = filter_var($data, FILTER_VALIDATE_EMAIL);

			return $data;
		}

		/**
		 * verify if number is phone number
		 * @param string $data string of phone number
		 * @return int [1/0]
		 */
		public static function isPhone(string $data): int {
			$data = preg_match("/^[0-9 ]*$/", $data);

			return $data;
		}

		/**
		 * check input parameter
		 * @param string $data string of input parameter
		 * @return string string of output and verify parameter
		 */
		public static function isInput(string $data): string {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);

			return $data;
		}

		/**
		 * check array request parameter
		 * @param array $array array to check
		 * @return array array checked
		 */
		public static function checkArray(array $array): array {
			foreach($array as $key => $value) {
				$value = trim($value);
				$value = stripslashes($value);
				$return[$key] = htmlspecialchars($value);
			}

			return $return;
		}
	}
