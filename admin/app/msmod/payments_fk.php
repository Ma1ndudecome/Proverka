<?php

if(!defined('IN_VPN')) exit;

require_once("./app/language/$language/$page.php");

$title = $lang['MOD'];

if(isset($_POST['fk_url'])) {
    foreach($_POST as $k => $v) {
        $db->sql_query('
			INSERT INTO `' . $cN['settings']['table'] . '` (
				`' . $cN['settings']['name'] . '`,
				`' . $cN['settings']['value'] . '`
			) VALUES (
				"' . $db->sql_escape($k) . '",
				"' . $db->sql_escape($v) . '"
			) ON DUPLICATE KEY UPDATE `' . $cN['settings']['value'] . '` = "' . $db->sql_escape($v) . '"
		');
    }
    $content	= '<br><br><center>' . $lang['SAVE_OK'] . '<br><a href="' . $mconf['fs'] . '?page=' . $page . '">' . $lang['BACK'] . '</a></center>';
} else {
    $q = $db->sql_query('
		SELECT
			`' . $cN['settings']['name'] . '` as `name`,
			`' . $cN['settings']['value'] . '` as `value`
		FROM `' . $cN['settings']['table'] . '`
	');
    while($r = $db->sql_fetchrow($q)) {
        $array[$r['name']] = $r['value'];
    }

    $array['fk_url'] = empty($array['fk_url']) ? 'https://pay.freekassa.ru/' : $array['fk_url'];
    $array['fk_cur'] = empty($array['fk_cur']) ? 121 : $array['fk_cur'];
    $array['fk_mag'] = empty($array['fk_mag']) ? '' : $array['fk_mag'];
    $array['fk_st1'] = empty($array['fk_st1']) ? '' : $array['fk_st1'];
    $array['fk_st2'] = empty($array['fk_st2']) ? '' : $array['fk_st2'];
    $array['fk_pmt'] = empty($array['fk_pmt']) ? '' : $array['fk_pmt'];

    $content = '
	<h4><a href="' . $mconf['fs'] . '?page=' . $page . '" id="hitle">' . $lang['MOD'] . '</a></h4>
	<div style="float:right;">
		<a href="' . $mconf['fn'] . ($seo ? '' : '?page=') . 'donate#freekassa"><img src="' . $mconf['fn'] . 'style/images/coin.png" width="16" height="16"></a>
	</div>
	<br><br>' . $lang['MOD_INFO'] . '<br><br>
	<form method="post">
	<input type="hidden" name="page" value="' . $page . '">
	<table width="100%">

	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_URL'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_URL_INF'] . '</span></a>
		</td>
		<td>
			<input type="text" name="fk_url" value="' . $array['fk_url'] . '" align="left" class="mbttext freekassa">
		</td>
	</tr>
	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_CUR'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_CUR_INF'] . '</span></a>
		</td>
		<td>
			<input type="text" name="fk_cur" value="' . $array['fk_cur'] . '" align="left" class="mbttext freekassa" autocomplete="new-password">
		</td>
	</tr>
	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_MAG'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_MAG_INF'] . '</span></a>
		</td>
		<td class="nowrap">
			<input type="password" name="fk_mag" value="' . $array['fk_mag'] . '" align="left" class="mbttext freekassa" id="loginFK" autocomplete="new-password">
			<input onchange="if ($(\'#loginFK\').get(0).type==\'password\') $(\'#loginFK\').get(0).type=\'text\'; else $(\'#loginFK\').get(0).type=\'password\';" name="fff" type="checkbox" value="false" class="showPass">
		</td>
	</tr>
	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_ST1'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_ST1_INF'] . '</span></a>
		</td>
		<td class="nowrap">
			<input type="password" name="fk_st1" value="' . $array['fk_st1'] . '" align="left" class="mbttext freekassa" id="pswFK1" autocomplete="new-password">
			<input onchange="if ($(\'#pswFK1\').get(0).type==\'password\') $(\'#pswFK1\').get(0).type=\'text\'; else $(\'#pswFK1\').get(0).type=\'password\';" name="fff" type="checkbox" value="false" class="showPass">
		</td>
	</tr>
	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_ST2'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_ST2_INF'] . '</span></a>
		</td>
		<td class="nowrap">
			<input type="password" name="fk_st2" value="' . $array['fk_st2'] . '" align="left" class="mbttext freekassa" id="pswFK2" autocomplete="new-password">
			<input onchange="if ($(\'#pswFK2\').get(0).type==\'password\') $(\'#pswFK2\').get(0).type=\'text\'; else $(\'#pswFK2\').get(0).type=\'password\';" name="fff" type="checkbox" value="false" class="showPass">
		</td>
	</tr>

	<tr>
		<td>
			<a class="tooltip" href="javascript://">' . $lang['FK_PMT'] . '<span class="custom help"><img src="../style/images/help.png" alt="' . $lang['HELP'] . '" height="48" width="48"><em>' . $lang['HELP'] . '</em>' . $lang['FK_PMT_INF'] . '</span></a>
		</td>
		<td>
			<input type="text" name="fk_pmt" value="' . $array['fk_pmt'] . '" align="left" class="mbttext freekassa">
		</td>
	</tr>
	<tr><td colspan=2><br><button class="button"> ' . $lang['SAVE'] . ' </button></td></tr>
	</table></form>';
}

$css .= '
<script type="text/javascript">
$(document).ready(function(){
	$(\'ul.sdt_menu a[href="' . $mconf['fs'] . '?page=logs"]\').addClass("active");
	$(\'ul.sdt_menu a[href="' . $mconf['fs'] . '?page=' . $page . '"]\').addClass("active");
});
</script>
';
