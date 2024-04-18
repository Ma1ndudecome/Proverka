<?php

if(!defined('IN_VPN')) exit;
if(empty($lang) || !is_array($lang)) $lang = array();

$lang = array_merge($lang, array(
    'MOD'					=> 'Integration with Freekassa',
    'MOD_INFO'				=> 'The <a href="https://freekassa.ru" target="_blank">Freekassa</a> accepts payments from customers in any electronic currency, via SMS messages, via money/Bank transfers, through payment terminals and of course Bank cards VISA, MasterCard.',
    'HELP'					=> 'Help',

    'FK_URL'				=> 'URL payment',
    'FK_URL_INF'			=> 'The reference in the form of payment to a page where the user will be asked to pay for services',
    'FK_CUR'				=> 'Currency code',
    'FK_CUR_INF'			=> 'Prescribe digital currency code, Freekassa accepts RUB, USD, EUR, UAH, KZT.',
    'FK_MAG'				=> 'ID store',
    'FK_MAG_INF'			=> 'The identifier of store',
    'FK_ST1'				=> 'Secret word 1',
    'FK_ST1_INF'			=> 'Used in the form of payment for signature generation',
    'FK_ST2'				=> 'secret word 2',
    'FK_ST2_INF'			=> 'Used to check transaction processing notification of payment',
    'FK_PMT'				=> 'Payments system',
    'FK_PMT_INF'			=> '186 133 80 179 155 63 161 123 45 175 162 153 159 94 67 100 124 160 181 184 136 150 183 180 174 147 166 172 173 163 167 168 169 170 171 165 164 116 154 106 87 109 121 131 130 1 2 3 114 115 64 69 79 110 113 82 84 132 83 99 158 157 118 117 70 137 138 139 140 141 142 143',

));
