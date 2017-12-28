<?php

namespace VisualComposer\Modules\Vendors;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class WpmlController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        $this->wpAddAction('plugins_loaded', 'initialize', 16);
    }

    protected function initialize()
    {
        if (defined('ICL_SITEPRESS_VERSION')) {
            $this->addFilter('vcv:frontend:pageEditable:url', 'addLangToLink');
            $this->addFilter('vcv:backend:extraOutput', 'addTooltipStyleFixes');
            $this->addFilter('vcv:frontend:url', 'addLangToLink');
            $this->addFilter('vcv:ajax:setData:adminNonce', 'setDataTrid', -1);
            $this->wpAddAction(
                'save_post',
                'insertTrid'
            );
        }
    }

    protected function addLangToLink($url, $payload)
    {
        global $sitepress;
        if (is_object($sitepress) && strpos($url, 'lang') === false) {
            return add_query_arg(['lang' => $sitepress->get_current_language()], $url);
        }

        return $url;
    }

    protected function insertTrid($id, $post, Request $requestHelper)
    {
        $trid = $requestHelper->input('trid');
        if ($trid) {
            update_post_meta($id, '_' . VCV_PREFIX . 'wpmlTrid', $trid);
        }
    }

    protected function setDataTrid($response, $payload)
    {
        $this->wpAddFilter('wpml_save_post_trid_value', 'checkTrid');

        return $response;
    }

    protected function checkTrid($trid, $payload, Request $requestHelper)
    {
        if (empty($trid)) {
            $sourceId = $requestHelper->input('vcv-source-id');
            $trid = get_post_meta($sourceId, '_' . VCV_PREFIX . 'wpmlTrid', true);
        }

        return $trid;
    }

    protected function addTooltipStyleFixes($response, $payload)
    {
        $response[] = '<style>.icl_pop_info { z-index: 2222; };</style>';

        return $response;
    }
}
