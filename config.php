<?php
// Array of the files with an unique ID
$files = array(
    'FID12345' => array(
        'content_type' => 'application/rar', 
        'suggested_name' => 'tutorials-file.rar', 
        'file_path' => 'https://dl.dropboxusercontent.com/s/0nhxpbfek4jvd65/LISTA%20IPTV%20-%20www.m3u8lista.blogspot.com.rar',
        'type' => 'local_file'
    )
    
);

// Base URL of the application
define('BASE_URL','http://'. $_SERVER['HTTP_HOST'].'/');

// Path of the download-link.php file
define('DOWNLOAD_PATH', BASE_URL.'download-link.php');

// Path of the token directory to store keys
define('TOKEN_DIR', '12345');

// Authentication password to generate download links
define('OAUTH_PASSWORD','web');

// Expiration time of the link (examples: +1 year, +1 month, +5 days, +10 hours)
define('EXPIRATION_TIME', '+5 days');
