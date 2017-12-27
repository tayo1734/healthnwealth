<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hnw');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         'zptzaCdK%r!u(Adgj?i+tE#^/je1GGU(om)CnJ^fAJ9.]4Iy3zviA`jOS]Er_bzW');
define('SECURE_AUTH_KEY',  'J$dflvI&S&N85R7k*vz~kN,ISJ4:$KK@}]Y?(A$)puA},L:$t7,QHi,K]G_x.lAL');
define('LOGGED_IN_KEY',    ':ElvA6QR]lVLnD^}A^]rv_{KDN#7|m-~GH#M)F/T$y:H3{(]F{U`I2gykZMR7>RG');
define('NONCE_KEY',        '<rs_vYB?8LB70AS.+pmlz9u>8g9o[Ofgx1:jT=R7~W]nwrbon5E[x6A3cfiq @r@');
define('AUTH_SALT',        '?dC*FN%O2#h~nqzeS:QF?+RH_Ym>rA8S3Tb4=-g;_RetRc Tm8Q:x:eT@c]Y5@T>');
define('SECURE_AUTH_SALT', '[I_3FU]dMERr^KX</io(|+d$(Vq}rjKqGGB:`<^SFY-i~wNhXXCiZ5d.1?qSdnD2');
define('LOGGED_IN_SALT',   'u%H|sPphxQgac8lKWDvkCJ^6O6lb~L>(/Iuu0CM-;t %ZB9 F:&dY1Y+Qi2#H2d/');
define('NONCE_SALT',       'P#gO+w&$&H]8h8Y-q% -1@?$y`*LXF6bbvv$+p$Ya8Ei.Y6_NA(r[kU}[>iRSy`Z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_wcx9fj_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
