<?php

/**
 * ECWD
 *
 */
class ECWD {

    protected $plugin_name = 'event-calendar-wd';
    protected $prefix = 'ecwd';
    protected static $instance = null;

    private function __construct() {

        $this->setup_constants();
        add_action('init', array($this, 'add_localization'), 1);
        include_once( 'includes/ecwd-shortcodes.php' );
        $this->includes();
        $cpt_instance = ECWD_Cpt::get_instance();
        $this->user_info();

        add_filter('body_class', array($this, 'theme_body_class'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'), 5);
        add_action('wp_enqueue_scripts', array($this, 'enqueue_styles'));
        add_action('ecwd_show_related_events', array($this, 'show_related_events'), 10, 2);
    }

    public function show_related_events($events, $upcoming_events = false) {
        global $ecwd_options;
        $today = date('Y-m-d');
        $date_format = 'Y-m-d';
        $time_format = 'H:i';
        if (isset($ecwd_options['date_format']) && $ecwd_options['date_format'] != '') {
            $date_format = $ecwd_options['date_format'];
        }
        if (isset($ecwd_options['time_format']) && $ecwd_options['time_format'] != '') {
            $time_format = $ecwd_options['time_format'];
        }
        $time_format .= (isset($ecwd_options['time_type']) ? ' ' . $ecwd_options['time_type'] : '');
        if (isset($ecwd_options['time_type']) && $ecwd_options['time_type'] != '') {
            $time_format = str_replace('H', 'g', $time_format);
            $time_format = str_replace('h', 'g', $time_format);
        }


        if (isset($ecwd_options['related_events_count']) && intval($ecwd_options['related_events_count'])) {
            $related_events_count = intval($ecwd_options['related_events_count']);
        } else {
            $related_events_count = -1;
        }
        $related_events_count -= 1;
        include_once 'views/related_events.php';
    }

    /**
     * Setup constants
     */
    public function setup_constants() {
        if (!defined('ECWD_PLUGIN_DIR')) {
            define('ECWD_PLUGIN_DIR', dirname(__FILE__));
        }

        if (!defined('ECWD_PLUGIN_PREFIX')) {
            define('ECWD_PLUGIN_PREFIX', $this->prefix);
        }
        if (!defined('ECWD_PLUGIN_NAME')) {
            define('ECWD_PLUGIN_NAME', $this->plugin_name);
        }
        if (!defined('ECWD_URL')) {
            define('ECWD_URL', plugins_url(plugin_basename(dirname(__FILE__))));
        }

        if (!defined('ECWD_SCRIPTS_KEY')) {
            define('ECWD_SCRIPTS_KEY', ECWD::scripts_key());
        }
    }

    public function add_localization() {
        $path = dirname(plugin_basename(__FILE__)) . '/languages/';
        $loaded = load_plugin_textdomain('ecwd', false, $path);
        if (isset($_GET['page']) && $_GET['page'] == basename(__FILE__) && !$loaded) {
            echo '<div class="error">Event calendar WD ' . __('Could not load the localization file: ' . $path, 'ecwd') . '</div>';

            return;
        }
    }

    public function user_info() {
        //detect timezone
    }

    public static function theme_body_class(
    $classes
    ) {
        $child_theme = get_option('stylesheet');
        $parent_theme = get_option('template');
        if (!defined('ECWD_TEHEME')) {
            define('ECWD_TEHEME', $parent_theme);
        }

        if ($child_theme == $parent_theme) {
            $child_theme = false;
        }

        if ($child_theme) {
            $theme_classes = "ecwd-theme-parent-$parent_theme ecwd-theme-child-$child_theme";
        } else {
            $theme_classes = "ecwd-theme-$parent_theme";
        }
        $classes[] = $theme_classes;

        return $classes;
    }

    /**
     * Include all necessary files
     */
    public static function includes() {
        global $ecwd_options;

        include_once( 'includes/ecwd-cpt-class.php' );
        include_once( 'includes/register-settings.php' );
        $ecwd_options = ecwd_get_settings();

        if (isset($ecwd_options['time_zone'])) {
            $timezone = (self::isValidTimezone($ecwd_options['time_zone'])) ? $ecwd_options['time_zone'] : "";
        }else{
            $timezone = self::get_default_timezone();
        }

        if(!empty($timezone)) {
            date_default_timezone_set($timezone);
        }

        include_once('includes/ecwd-notices-class.php');
        include_once( 'includes/ecwd-functions.php' );
        include_once( 'includes/ecwd-event-class.php' );
        include_once( 'includes/ecwd-display-class.php' );

        include_once( 'views/widgets.php' );
    }

    /**
     * Load public facing scripts
     */
    public function enqueue_scripts() {
        global $wp_scripts, $post,$ecwd_options;
        $map_included = false;

        $scripts_key = ECWD_VERSION . '_' . ECWD_SCRIPTS_KEY;

        $load_map = true;
        if(isset($post)){
            if($post->post_type == "ecwd_venue") {
                if(get_post_meta($post->ID, 'ecwd_venue_show_map', true) !== '1'){
                    $load_map = false;
                }
            }else if($post->post_type == "ecwd_event"){
                if(get_post_meta($post->ID, 'ecwd_event_show_map',true) !== '1'){
                    $load_map = false;
                }
            }
        }


        $gmap_key = (isset($ecwd_options['gmap_key'])) ? trim($ecwd_options['gmap_key']) : "";
        if (is_object($post) && $load_map === true && !empty($gmap_key)) {
            if (isset($post->post_type) && ($post->post_type == 'ecwd_event' || $post->post_type == 'ecwd_venue' || strpos($post->post_content, 'ecwd id') !== false)) {
                if (isset($wp_scripts->registered) && $wp_scripts->registered) {
                    foreach ($wp_scripts->registered as $wp_script) {
                        if (isset($wp_scripts->src) && $wp_script->src && (strpos($wp_script->src, 'maps.googleapis.com') || strpos($wp_script->src, 'maps.google.com')) !== false) {
                            if (is_array($wp_scripts->queue) && in_array($wp_script->handle, $wp_scripts->queue)) {
                                $map_included = true;
                                break;
                            }
                        }
                    }
                }

                if (!$map_included) {
                    wp_enqueue_script($this->prefix . '-maps-public', 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&key=' . $gmap_key, array('jquery'), $scripts_key, false);
                }
            }
        }

        if(!empty($gmap_key) && $load_map === true) {
            wp_enqueue_script($this->prefix . '-gmap-public', plugins_url('js/gmap/gmap3.js', __FILE__), array('jquery'), $scripts_key, true);
        }
        wp_enqueue_script($this->prefix . '-popup', plugins_url('js/ecwd_popup.js', __FILE__), array('jquery'), $scripts_key, true);
        wp_enqueue_script($this->prefix . '-public', plugins_url('js/scripts.js', __FILE__), array(
            'jquery',
            'jquery-ui-draggable',
            'masonry',
            $this->prefix . '-popup'
                ), $scripts_key, true);
        wp_localize_script(ECWD_PLUGIN_PREFIX . '-public', 'ecwd', array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'ajaxnonce' => wp_create_nonce(ECWD_PLUGIN_PREFIX . '_ajax_nonce'),
            'loadingText' => __('Loading...', 'ecwd'),
            'event_popup_title_text' => __('Event Details','ecwd'),
            'plugin_url' => ECWD_URL,
            'gmap_key'   => $gmap_key,
            'gmap_style' => (isset($ecwd_options['gmap_style'])) ? $ecwd_options['gmap_style'] : ""
        ));
        
    }

    /*
     * Load public facing styles
     */

    public function enqueue_styles() {
        global $ecwd_options;
        $styles_key = ECWD_VERSION . '_' . ECWD_SCRIPTS_KEY;
        wp_enqueue_style($this->prefix . '-popup-style', plugins_url('/css/ecwd_popup.css', __FILE__), '', $styles_key, 'all');
        wp_enqueue_style($this->prefix . '_font-awesome', plugins_url('/css/font-awesome/font-awesome.css', __FILE__), '', $styles_key, 'all');
        wp_enqueue_style($this->prefix . '-public', plugins_url('css/style.css', __FILE__), '', $styles_key, 'all');
        $css = (isset($ecwd_options['custom_css'])) ? $ecwd_options['custom_css'] : "";
        wp_add_inline_style($this->prefix . '-public', $css);
    }

    public static function isValidTimezone($timezone) {
        return in_array($timezone, timezone_identifiers_list());
    }

    public static function scripts_key($reset=false){
        $key = get_option('ecwd_scripts_key');
        if ($key === false || $reset === true) {
            $key = uniqid();
            update_option('ecwd_scripts_key', $key);
        }
        return $key;
    }

    public static function get_default_timezone() {
        $default_timezone = self::isValidTimezone(@ini_get('date.timezone')) ? ini_get('date.timezone') : 'Europe/Berlin';
        return $default_timezone;
    }

    public static function sanitize_array($data) {
        if (!is_array($data)) {
            if (is_string($data)) {
                return sanitize_text_field($data);
            }
            return $data;
        }

        if (empty($data)) {
            return $data;
        }

        foreach ($data as $key => $value) {
            if (is_string($value)) {
                $data[$key] = sanitize_text_field($value);
            }
        }

        return $data;
    }

    /**
     * Return the plugin name.
     */
    public function get_name() {
        return $this->plugin_name;
    }

    /**
     * Return the plugin prefix.
     */
    public function get_prefix() {
        return $this->prefix;
    }

    public static function add_http($url){
        $url = trim($url);
        if (empty($url) === false && strpos($url,'http://') === false && strpos($url,'https://') === false){
            $url = 'http://'.$url;
        }
        return $url;
    }

    public static function get_ecwd_event_date_view($ecwd_event_date_from, $ecwd_event_date_to, $ecwd_all_day_event) {
        global $ecwd_options;

        $date_format = 'Y-m-d';
        $time_format = 'H:i';
        if (isset($ecwd_options['date_format']) && $ecwd_options['date_format'] != '') {
            $date_format = $ecwd_options['date_format'];
        }
        if (isset($ecwd_options['time_format']) && $ecwd_options['time_format'] != '') {
            $time_format = $ecwd_options['time_format'];
        }
        $time_format .= (isset($ecwd_options['time_type']) ? ' ' . $ecwd_options['time_type'] : '');
        if (isset($ecwd_options['time_type']) && $ecwd_options['time_type'] != '') {
            $time_format = str_replace('H', 'g', $time_format);
            $time_format = str_replace('h', 'g', $time_format);
        }

        $html = '';

        if ($ecwd_all_day_event == 1) {
            $html .= date($date_format, strtotime($ecwd_event_date_from));

            if ($ecwd_event_date_to && date($date_format, strtotime($ecwd_event_date_from)) !== date($date_format, strtotime($ecwd_event_date_to))) {
                $html .= ' - ' . date($date_format, strtotime($ecwd_event_date_to));
            }
            $html .= ' ' . __('All day', 'ecwd');

            return $html;
        }


        $ecwd_event_date_from_sec = strtotime($ecwd_event_date_from);
        $ecwd_event_date_to_sec = strtotime($ecwd_event_date_to);

        $ecwd_event_date_from_date = date($date_format, $ecwd_event_date_from_sec);
        $ecwd_event_date_to_date = date($date_format, $ecwd_event_date_to_sec);

        $ecwd_event_date_from_time = date($time_format, $ecwd_event_date_from_sec);
        $ecwd_event_date_to_time = date($time_format, $ecwd_event_date_to_sec);


        if ($ecwd_event_date_from_date == $ecwd_event_date_to_date) {
            $html .= $ecwd_event_date_from_date . ' <span style="width:5px;"></span> ' . $ecwd_event_date_from_time . ' - ' . $ecwd_event_date_to_time;
        } else {
            $html .= $ecwd_event_date_from_date . ' ' . $ecwd_event_date_from_time . ' - ';
            $html .= $ecwd_event_date_to_date . ' ' . $ecwd_event_date_to_time;
        }
        $html .= ECWD::get_time_zone( $ecwd_all_day_event );
				
        return $html;
    }


    /**
     * Return an instance of this class.
     */
    public static function get_instance() {
        if (null == self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    /**
     * Return an TimeZone.
     */
		public static function get_time_zone( $all_day = false ) {
			global $ecwd_options;
			$timezone_str = "";
			if (isset($ecwd_options['time_zone'])) {
					$timezone = (self::isValidTimezone($ecwd_options['time_zone'])) ? $ecwd_options['time_zone'] : "";
			}else{
					$timezone = self::get_default_timezone();
			}
			$show_timezone = (isset($ecwd_options["show_time_zone"]) && $ecwd_options["show_time_zone"] == 1) ? true : false;
			if($show_timezone && !$all_day) {
				$timezone_str = "<span class='ecwd_timezone'>" . $timezone . "</span>";
			}
			
			return $timezone_str;
		}
}
