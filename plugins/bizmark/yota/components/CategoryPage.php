<?php namespace BizMark\Yota\Components;

use BizMark\Yota\Models\Category;
use Cms\Classes\ComponentBase;

/**
 * CategoryPage Component
 */
class CategoryPage extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'CategoryPage Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'label' => 'Параметр ссылки',
                'default' => '{{ :slug }}'
            ]
        ];
    }

    public function get()
    {
        return Category::where('slug', $this->property('slug'))->first();
    }
}
