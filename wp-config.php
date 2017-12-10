<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hnwprogram_com');

/** MySQL database username */
define('DB_USER', 'hnwprogramcom');

/** MySQL database password */
define('DB_PASSWORD', 'HAxX6nCH');

/** MySQL hostname */
define('DB_HOST', 'mysql.hnwprogram.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'makH&)DVDgaU9JJ%_d+R$#rF4RkYpuF6yen"cTbFOglgr6FdD!)Je`0G?#G&cLE&');
define('SECURE_AUTH_KEY',  'nHWta"Mv6j&p/nYDF&RbD5wLYH!:z5)V1TItx?YIHFkEMDSOGzk)^D_TyOmVbV~!');
define('LOGGED_IN_KEY',    'Ln:36$!X//KHDw/kNN"3Tm(~R&!~_bIQ$rG?SIJ6l1Ax2M`3*?MC5n8xu28:v/km');
define('NONCE_KEY',        'U#_$tS#c7~;FqzbD|:8F6nEnpRw9lTsHYyi`Ll_Kc|j5d5"GF2&6wo@%;OerkHGJ');
define('AUTH_SALT',        '/QgPnT3m9hISqekH5gm5PyF?jSuH)cH)"UWb)`|s!M~mp#^%HZ:0r%;#DFMEI`&a');
define('SECURE_AUTH_SALT', '$T0z%NP$C)pNjX#E"WFq!lETVV#Q18l5W;fnN9421va/g&k1xjMG&9XVSk)NKb5t');
define('LOGGED_IN_SALT',   'a1+Y:AbYmP1+TpcHALBaFyN%nQ`TZ/ZQddp"4@^FvaP!HF!kNhz4LCDiu3yvsW:M');
define('NONCE_SALT',       'do"F+HU`:E#5AfEN|t7j)T+iFa1DH`+/+)RNP#TfL;cPFd;UV5O78Qc1TL$!Ite3');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_wcx9fj_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

