<?php namespace BizMark\Yota\Components;

use BizMark\Yota\Models\Offer;
use Cms\Classes\ComponentBase;

/**
 * OfferPage Component
 */
class OfferPage extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'OfferPage Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'label' => 'Параметр ссылки',
                'default' => '{{ :slug }}'
            ],
            'type' => [
                'label' => 'Параметр ссылки',
                'default' => '{{ :type }}'
            ],
            'category' => [
                'label' => 'Параметр ссылки',
                'default' => '{{ :category }}'
            ],
        ];
    }

    public function get()
    {
        return Offer::whereHas('category', function($query) {return $query->where('slug', $this->property('category'));})
            ->where('type', $this->property('type'))
            ->where('slug', $this->property('slug'))
            ->first();
    }
}
