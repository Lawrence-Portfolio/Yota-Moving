<?php namespace BizMark\Yota\Components;

use BizMark\Yota\Models\Category;
use Cms\Classes\ComponentBase;

/**
 * CategoryList Component
 */
class CategoryList extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'CategoryList Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function get()
    {
        return Category::all();
    }
}
