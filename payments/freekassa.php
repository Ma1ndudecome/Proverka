<?php

define('IN_VPN', true);

@error_reporting(E_ALL ^ E_NOTICE);
@ini_set('display_errors', 1);
define('ROOT_PATH', '../');

@header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
@header('Pragma: no-cache');
@header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT');
@header('Expires: ' . date('r'));
@header('Content-type: text/html; charset=UTF-8');
@header('X-Robots-Tag: noindex, nofollow');

$rcheck = 1;
require_once(ROOT_PATH . 'app/error_hendler.php');
require_once(ROOT_PATH . 'config.php');
require_once(ROOT_PATH . 'app/constants.php');

if(empty($mconf['db'])) $mconf['db'] = 'mysql';

require_once(ROOT_PATH . 'app/db.' . $mconf['db'] . '.php');

$db = new sqlDB($hostname, $bd_user, $bd_password, $database, $port, false, $mconf['charset']);

if(!$db->connect) exit("Could not connect to the database");

require_once(ROOT_PATH . 'app/functions.php');

$q = $db->sql_query('SELECT `' . $cN['settings']['value'] . '` as `value` FROM `' . $cN['settings']['table'] . '` WHERE `' . $cN['settings']['name'] . '` = "fk_mag"');
$id = $db->sql_fetchfield('value', 0, $q);
$q = $db->sql_query('SELECT `' . $cN['settings']['value'] . '` as `value` FROM `' . $cN['settings']['table'] . '` WHERE `' . $cN['settings']['name'] . '` = "fk_st1"');
$key1 = $db->sql_fetchfield('value', 0, $q);
$q = $db->sql_query('SELECT `' . $cN['settings']['value'] . '` as `value` FROM `' . $cN['settings']['table'] . '` WHERE `' . $cN['settings']['name'] . '` = "fk_st2"');
$key = $db->sql_fetchfield('value', 0, $q);
$q = $db->sql_query('SELECT `' . $cN['settings']['value'] . '` as `value` FROM `' . $cN['settings']['table'] . '` WHERE `' . $cN['settings']['name'] . '` = "fk_url"');
$url = $db->sql_fetchfield('value', 0, $q);
$q = $db->sql_query('SELECT `' . $cN['settings']['value'] . '` as `value` FROM `' . $cN['settings']['table'] . '` WHERE `' . $cN['settings']['name'] . '` = "fk_cur"');
$currency = $db->sql_fetchfield('value', 0, $q);

if(isset($_REQUEST['redirect'])) {
    $post = array(
        'm'		=> empty($_REQUEST['m']) ? 0 : escapeStr($_REQUEST['m']),
        'oa'	=> empty($_REQUEST['oa']) ? '' : escapeStr($_REQUEST['oa']),
        'o'		=> empty($_REQUEST['o']) ? '' : escapeStr($_REQUEST['o']),
        'i'		=> empty($_REQUEST['i']) ? '' : escapeStr($_REQUEST['i']),
        'currency' => empty($_REQUEST['currency']) ? '' : escapeStr($_REQUEST['currency'])
    );

    $post['s'] = md5($post['m'] . ':' . $post['oa'] . ':' . $key1 . ':' . $post['o'] . ':' . $currency);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 6);
    $response = curl_exec($ch);
    curl_close($ch);
    echo $response;
}
?>
