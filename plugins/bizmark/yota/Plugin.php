<?php namespace BizMark\Yota;

use Backend, Event;
use Bizmark\Yota\Classes\Event\Forms\FormSaveHandler;
use System\Classes\PluginBase;
use Bizmark\Yota\Classes\Event\ThemeData\ThemeDataModelHandler;

/**
 * Yota Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Yota',
            'description' => 'No description provided yet...',
            'author'      => 'BizMark',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        $this->addEventListeners();
    }

    protected function addEventListeners()
    {
        Event::subscribe(ThemeDataModelHandler::class);
        Event::subscribe(FormSaveHandler::class);
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'BizMark\Yota\Components\CategoryList' => 'CategoryList',
            'BizMark\Yota\Components\CategoryPage' => 'CategoryPage',
            'BizMark\Yota\Components\OfferPage' => 'OfferPage',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'bizmark.yota.access_services' => [
                'tab' => 'Yota',
                'label' => 'Управление услугами'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'yota' => [
                'label'       => 'Услуги',
                'url'         => Backend::url('bizmark/yota/categories'),
                'icon'        => 'icon-leaf',
                'permissions' => ['bizmark.yota.access_services'],
                'order'       => 500,
            ],
        ];
    }
}
