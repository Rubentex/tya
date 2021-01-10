<?php
// Array of the files with an unique ID
$files = array(
    'UID87978404' => array(
        'content_type' => 'application/zip', 
        'suggested_name' => 'codex-file.zip', 
        'file_path' => 'files/test.zip',
        'type' => 'local_file'
    ),
    'UID75895795' => array(
        'content_type' => 'audio/mpeg', 
        'suggested_name' => 'file-codex.rar', 
        'file_path' => 'https://dl.dropboxusercontent.com/s/9hio1a29f8zsf77/.mp3',
        'type' => 'remote_file'
    ),
);

// Base URL of the application
define('BASE_URL','http://'. $_SERVER['HTTP_HOST'].'/');

// Path of the download-link.php file
define('DOWNLOAD_PATH', BASE_URL.'download-link.php');

// Path of the token directory to store keys
define('TOKEN_DIR', 'tokens');

// Authentication password to generate download links
define('OAUTH_PASSWORD','gmexsite');

// Expiration time of the link (examples: +1 year, +1 month, +5 days, +10 hours)
define('EXPIRATION_TIME', '+20 minutes');