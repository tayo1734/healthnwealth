<?php
/**
 * Plugin Name: Visual Composer Website Builder
 * Plugin URI: https://visualcomposer.io/?utm_medium=wp-dashboard&utm_source=plugins-page&utm_campaign=vcwb&utm_content=plugin-link
 * Description: Create your WordPress website with the fast and easy-to-use drag-and-drop builder for experts and beginners.
 * Version: 1.10
 * Author: The Visual Composer Team
 * Author URI: https://visualcomposer.io/?utm_medium=wp-dashboard&utm_source=plugins-page&utm_campaign=vcwb&utm_content=author-link
 * Copyright: (c) 2017 TechMill Ltd.
 * License: GNU General Public License v2.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 4.5
 * Tested up to: 4.8.3
 * Text Domain: vcwb
 */

/**
 * Check for direct call file.
 */
if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

/**
 * Skip loading when installing.
 *
 * @see wp_installing
 */
if (defined('WP_INSTALLING') && WP_INSTALLING) {
    return;
}

/**
 * Check for plugin conflict.
 */
if (defined('VCV_VERSION')) {
    wp_die('It seems that another version of Visual Composer Website Builder is active. Please deactivate it before use this version.');
}

/**
 * Plugin version constant
 */
define('VCV_VERSION', '1.10');
/**
 * Plugin url: 'http://web/wp-content/plugins/plugin_dir/'
 */
define('VCV_PLUGIN_URL', rtrim(plugin_dir_url(__FILE__), '/') . '/');
/**
 * Plugin directory full path: 'server/web/wp-content/plugins/plugin_dir/'
 * @internal - please try to use vcapp()->path() instead
 */
define('VCV_PLUGIN_DIR_PATH', rtrim(plugin_dir_path(__FILE__), '/') . '/');
/**
 * Plugin "basename" - directoryName/PluginFileName.php: 'vc-five/plugin-wordpress.php'
 */
define('VCV_PLUGIN_BASE_NAME', plugin_basename(__FILE__));
/**
 * Plugin core file full path: '/server/web/wp-content/plugins/vc-five/plugin-wordpress.php'
 */
define('VCV_PLUGIN_FULL_PATH', __FILE__);
/**
 * Plugin directory name: 'vc-five'
 */
define('VCV_PLUGIN_DIRNAME', basename(dirname(VCV_PLUGIN_BASE_NAME)));
define('VCV_PLUGIN_ASSETS_DIRNAME', VCV_PLUGIN_DIRNAME . '-assets');
define('VCV_PLUGIN_ASSETS_DIR_PATH', WP_CONTENT_DIR . '/' . VCV_PLUGIN_ASSETS_DIRNAME);
/**
 * Plugin core prefix for options/meta and etc.
 */
define('VCV_PREFIX', 'vcv-');

// Used in requirements.php
/**
 * Minimal required PHP version.
 */
define('VCV_REQUIRED_PHP_VERSION', '5.4');
/**
 * Minimal required WordPress version.
 */
define('VCV_REQUIRED_BLOG_VERSION', '4.1');
if (!defined('VCV_AJAX_REQUEST')) {
    define('VCV_AJAX_REQUEST', 'vcv-ajax');
}
if (!defined('VCV_ADMIN_AJAX_REQUEST')) {
    define('VCV_ADMIN_AJAX_REQUEST', 'vcv-admin-ajax');
}
if (!defined('VCV_LAZY_LOAD')) {
    define('VCV_LAZY_LOAD', false);
}
/**
 * Check PHP version.
 * Check WordPress version.
 * PHP 5.1 parse-able (no parse error).
 */
require_once __DIR__ . '/visualcomposer/Requirements.php';

if (!defined('DOING_AJAX') || !DOING_AJAX) {
    $requirements = new VcvCoreRequirements();
    $requirements->coreChecks();
}

if (file_exists(__DIR__ . '/env-dev.php')) {
    require_once __DIR__ . '/env-dev.php';
} else {
    require_once __DIR__ . '/env.php';
}

// !! PHP 5.4 Required under this line (parse error otherwise).

// Bootstrap the system.
require __DIR__ . '/bootstrap/autoload.php';
