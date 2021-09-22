<?php namespace Bizmark\Yota\Classes\Event\ThemeData;

use Cms\Models\ThemeData;

/**
 * Class ThemeDataModelHandler
 * @package Bizmark\Yota\Classes\Event\Product
 */
class ThemeDataModelHandler
{
    /**
     * Add listeners
     * @param \Illuminate\Events\Dispatcher $obEvent
     */
    public function subscribe($obEvent)
    {
        ThemeData::extend(function ($obElement) {
            $fields = [
                'contacts',
                'faq',
                'advantages',
                'testimonials',
                'aboutus',
                'main',
                'navigation'
            ];

            /** @var ThemeData $obElement */
            $obElement->addJsonable($fields);
        });
    }
}